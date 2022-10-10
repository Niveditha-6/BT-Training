import React, { useState } from 'react'

export default function SimpleForm() {
type IUsers ={
    uName: string
    uAge: number
uEmail: string
}
    const [userInfo, setUserInfo] = useState<IUsers>({uName:'',uAge:0,uEmail:''});
    // console.log(typeof userInfo.uAge);
    
  return (

   <>
   <form>
    <pre>
      User Name:  <input type="text" onChange={(e) => setUserInfo({...userInfo,uName:e.target.value})}></input>
       User Age: <input type="number" onChange={(e) => setUserInfo({...userInfo,uAge:parseInt(e.target.value)})}></input>
User Email: <input type="email" onChange={(e) => setUserInfo({...userInfo,uEmail:e.target.value})}></input>
    </pre>
   </form>
   <h3>{JSON.stringify(userInfo)}</h3>
   </>
  )
}
