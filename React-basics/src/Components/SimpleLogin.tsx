import React, { useState } from 'react'
import GreetForSimpleLogin from './GreetForSimpleLogin'

export default function SimpleLogin() {

const [isLoggedIn, setIsLoggedIn] = useState(false);

// const handleLogOut = () =>{
//     setIsLoggedIn(false)
// }

// const handleLogIn = () =>{
//     setIsLoggedIn(true)

// }
  return (
    <div>
        {/* <button onClick={handleLogOut}>Log Out</button>
        <button onClick={handleLogIn}>Log In</button> */}

        <button onClick={()=>setIsLoggedIn(false)}>Log Out</button>
        <button onClick={()=>setIsLoggedIn(true)}>Log In</button>
      <GreetForSimpleLogin  isLoggedIn ={isLoggedIn}/>
    </div>
  )
}
