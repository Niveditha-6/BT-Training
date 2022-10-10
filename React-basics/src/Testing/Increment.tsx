import React,{useState}from 'react'

export default function Increment() {
    const [counter , setCounter] = useState<number>(0)
   
    const incrementCounter = ()=>{
      setCounter(prevCount=> prevCount+1)
    }
   return (
     <div>
         <button data-testid="increment" onClick={incrementCounter}>Increment</button>
 
         <p data-testid="counter">{counter}</p> 
     </div>
   )
}
