import React, { useState } from 'react';
import axios from "axios";
import "./register.css"

interface INewUsers {
  name:string,
  email:string,
  password:string,
  gender:string,
  salary:string,
  role:string
  

}

export default function Register() {

  const [newUser, setNewUser] = useState<INewUsers>({name:"",email:"",password:"",gender:"",salary:"",role:"CUSTOMER"})

  const handleNewUserInfo = (e:React.ChangeEvent<HTMLInputElement>) =>{
setNewUser({...newUser,[e.target.name]: e.target.value})
  }


  const handleRegister = (e:any) =>{
e.preventDefault();
    axios.post(`http://localhost:4000/user`,newUser,{headers:{'content-type':'application/json'}})
    .then((response) => {
        alert(`Updated Record Successfully`)
    
    })
    .catch((error) => {
        console.log(error)
    })
  }
  return (
    <div className='registerParent'>
  <div className='registerContainer'>        <h1>CREATE AN ACCOUNT</h1>
        <form onSubmit={handleRegister}>
   
        <input type="text" onChange={(e)=>handleNewUserInfo(e)} name="name" required placeholder='Name'/>
  
<input type="email" onChange={(e)=>handleNewUserInfo(e)} name="email" required placeholder='email'/>
<input type="password" onChange={(e)=>handleNewUserInfo(e)} name="password" required placeholder='password'/>

<input type="text" onChange={(e)=>handleNewUserInfo(e)} name="salary" required placeholder='Salary'/>
<div className='radioButtonsContainer'>
<div className='radioButtons'>

<input type="radio" onChange={(e)=>handleNewUserInfo(e)} name="gender" value="male" className='radioButton' />
<label>Male</label>
</div>
<div  className='radioButtons'>
<input type="radio" onChange={(e)=>handleNewUserInfo(e)} name="gender" value="female" className='radioButton' />
<label>Female</label>
</div>
</div>

<button type='submit' className=''>Create</button>


</form>
    </div>
    </div>
  )
}
