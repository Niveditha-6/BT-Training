import React from 'react'
import SimpleForm from './SimpleForm'
import SimpleFormOptimised from "./SimpleFormOptimised"
type IProps ={
    isLoggedIn: boolean
}
export default function GreetForSimpleLogin({isLoggedIn} : IProps) {
    console.log(isLoggedIn)
  return (
<>

{isLoggedIn ? <h1> Welocme  Peter</h1> : <h1>Welcome guests</h1>}
{/* <SimpleForm/> */}
<SimpleFormOptimised/>

</>


  )
}
