import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom';
import "./navbar.css";

export default function NavBar() {
  const email = localStorage.getItem('email');

const res = useLocation();
const [logout,setLogout] = useState(false);

useEffect(()=>{
  email ? setLogout(true) : setLogout(false);
},[res.pathname])
 
  console.log(email)
  return (
    <div>
        <nav className='navContainer'>
            <div><img src ="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/x6a2966pqcivbfuejzrn" alt='logo'/></div>
            <div className='navSub'>
            {logout ? <div><Link to="/" className='navLink' onClick={()=>{localStorage.removeItem('email')}}>Logout</Link></div> : <><div><Link to="/login" className='navLink'>Login</Link></div> <div><Link to="/register" className='navLink'>Register</Link></div> </>}
            
            </div>
        </nav>
    </div>
  )
}
 