import React, { useState ,useEffect} from 'react'
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import "./login.css";

interface IUsers {
  email: string,
  password: string
}

export interface IDBData{
  id : number
  email: string
  password: string
  gender: string
  name:string
  role: string
}
export default function Login() {

  const [ userInfo, setUserInfo] = useState<IUsers>({email:"", password:""});
const [dbData, setDbdata] = useState([])
const [role,setRole] = useState<string>("")
  const handleUserInfo = (e:React.ChangeEvent<HTMLInputElement>) =>{
setUserInfo({...userInfo, [e.target.name]:e.target.value})

  }
const navigate = useNavigate()

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    role === "CUSTOMER" ? navigate('/userdasboard'):role === "MANAGER" ? navigate('/managerdashboard'): navigate('/login'); 
    
  }, [role]);


  const fetchData = () =>{
    axios
    .get("http://localhost:4000/user")
    .then((res) => setDbdata(res.data))
    .catch((err) => console.log(err));
}

const handleLogin = () =>{
dbData.map((record: IDBData,index:number)=>{
if(userInfo.email === record.email ){
  localStorage.setItem("email", record.email)
setRole(record.role)
}

})
}

  return (
    <div className='loginParent'>

    <div className='loginContainer'>
  <h1>Login Pannel</h1>
   
<input type="email" onChange={(e)=>handleUserInfo(e)} name="email" required/>
<input type="password" onChange={(e)=>handleUserInfo(e)} name="password"></input>
<button onClick={handleLogin}>Login</button>
    </div>
    </div>
  )
}
