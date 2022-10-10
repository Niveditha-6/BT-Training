import React, { useState } from 'react'

export default function SimpleForm() {
type IUsers ={
    uName: string
    uAge: number
uEmail: string
}
    const [userInfo, setUserInfo] = useState<IUsers>({uName:'',uAge:0,uEmail:''});
    // console.log(typeof userInfo.uAge);

    const handleInputs =(e: React.ChangeEvent<HTMLInputElement>) =>{
       
        setUserInfo({...userInfo,[e.target.name]:e.target.value})
    }
    
  return (

   <>
   <form>
    <pre>
      User Name:  <input type="text" name='uName' onChange={(e) => handleInputs(e)}></input>
       User Age: <input type="text" name='uAge'onChange={(e) => handleInputs(e)}></input>
User Email: <input type="email"  name='uEmail'onChange={(e) => handleInputs(e)}></input>
    </pre>
   </form>
   <h3>{JSON.stringify(userInfo)}</h3>
   </>
  )
}