import axios from "axios";
import React, { useEffect, useState } from "react";

interface IUsers {
  name: string;
  email: string;
  password: string;
}

interface ILogin {
  email: string;
  password: string;
}
export default function InitialPage() {
  const [displayRegister, setDisplayRegister] = useState<boolean>(false);
  const [displayLogin, setDisplaylogin] = useState<boolean>(false);
  const [displayList, setDisplayList] = useState<boolean>(false);
  const [registerData, setRegisterData] = useState<IUsers>({
    name: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState<ILogin>({
    email: "",
    password: "",
  });
  const [listData, setListData] = useState<string>("");
  const [isLogout,setIsLogout]=useState<boolean>(false);
  const[loggingOff,setLoggingOff] = useState<boolean>(false);
  // useEffect(() => {
  //     updateUserInfo();

  //   }, []);

  const updateRegisteredData = () => {
    // console.log(registerData)
    axios
      .post(
        `https://angularjwtauthentication.herokuapp.com/api/user/register`,
        registerData,
        { headers: { "content-type": "application/json" } }
      )
      .then((response) => {
        alert(`Updated Record Successfully`);
        console.log(response);
        setDisplayRegister(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updateLoginData = () => {
    console.log(loginData);
    setIsLogout(true);
    axios
      .post(
        `https://angularjwtauthentication.herokuapp.com/api/user/login`,
        loginData,
        { headers: { "content-type": "application/json" } }
      )
      .then((response) => {
        alert(`Updated Record Successfully`);
        console.log(response.data["token"]);
      localStorage.setItem('token',response.data["token"])
        setDisplaylogin(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateList = () => {
    console.log("list");
    setDisplayList(true);
    axios
      .get(`https://angularjwtauthentication.herokuapp.com/api/user/list`, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')
        }`,
        },
      })
      .then((response) => {
        alert(`Updated Record Successfully`);
        console.log(response.data["text"]);
        setListData(response.data["text"]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegisterData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <button
        onClick={() => {
          setDisplayList(false);
          setDisplaylogin(false);
          setDisplayRegister(true);
          setIsLogout(false)

        }}
      >
        Register
      </button>
   

      {
isLogout ?<>

<button onClick={()=>{ localStorage.setItem('token','');setLoggingOff(true);setIsLogout(false)}}>Logout</button>

</> : <>

<button
        onClick={() => {
          setDisplayList(false);
          setDisplaylogin(true);
          setDisplayRegister(false);
          setIsLogout(false);

        }}
      >
        {" "}
        Log in
      </button>


</>

      }

      <button onClick={updateList}>List</button>
      {displayRegister ? (
        <>
          Name:
          <input
            name="name"
            type="text"
            onChange={(e) => {
              handleRegisterData(e);
            }}
          />
          Email:
          <input
            name="email"
            type="email"
            onChange={(e) => {
              handleRegisterData(e);
            }}
          />
          Password:
          <input
            name="password"
            type="password"
            onChange={(e) => {
              handleRegisterData(e);
            }}
          />
          <button onClick={updateRegisteredData}>Register!!!</button>
        </>
      ) : displayLogin ? (
        <>
          Email:
          <input
            type="email"
            name="email"
            onChange={(e) => {
              handleLoginData(e);
            }}
          />
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => {
              handleLoginData(e);
            }}
          />
          <button onClick={updateLoginData}>Login!!!</button>
        </>
      ) : displayList ? (
        <>
          <div>{listData ? listData : "UnAuthorized"}</div>
        </>
      ) : 
      loggingOff ?
    
      <h1>You are logged off!!</h1>
      
      
      :
      
        <></>
      }
    </div>
  );
}
