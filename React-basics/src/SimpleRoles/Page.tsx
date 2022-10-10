import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Page() {

    const user = localStorage.getItem("token");
    const res = useLocation()

const [role,setRole] = useState<string | null>("")
    useEffect(() => {
       setRole(user)
      }, [res.pathname]);
  console.log(user);
  return (
    <div>
      {role === "admin" ? (
        <>
          {" "}
          <Link to="/home">Home</Link>
          <Link to="/comment">Comment</Link>
          
        </>
      ) : role === "guest" ? (
        <>
         <Link to="/home">Home</Link>
        </>
      ) : (
        <>
          {" "}
          <Link to="/loginpage">Login</Link>
        </>
      )}
    </div>
  );
}



// <BrowserRouter>
// <Page/>
// <Routes>

// {/* <Route path="/" element={<Menu />}>
// <Route path="/home" element={<Home/>}/>
// <Route path="/comment" element={<Likes/>}/>
// </Route> */}
// <Route path="/home" element={<Home/>}/>
// <Route path="/comment" element={<Likes/>}/>
// <Route path="/login" element={<Login/>}/>
// <Route path="/loginpage" element={<LoginPage/>}/>


// {/* <Route path="/page" element={<Page/>}/> */}

// </Routes>
// </BrowserRouter>
