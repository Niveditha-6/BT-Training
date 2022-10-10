import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {

    const[name,setName] = useState('')
    const[pass,setPass] = useState('')

    localStorage.setItem('token',name)
  return (
    <>

   


  Username:<input onChange={(e)=>{setName(e.target.value)}}/>
  Passsword: <input onChange={(e)=>{setPass(e.target.value)}}/>
  <button > <Link to='/page'>Login</Link></button>

   </>
  )
}
