import React, { isValidElement, useState,useMemo } from 'react'
import { isFunctionExpression } from 'typescript'

export default function UseMemoDemo() {

    const [counterOne, setCounterOne] = useState<number>(0)
    const [counterTwo, setCounterTwo] = useState<number>(0)

    const incrementOne = ()=>{
        setCounterOne(counterOne+1)
    }
    const incrementTwo= ()=>{
        setCounterTwo(counterTwo+1)
    }
   

    // it is used with a Function, where function should be exected only with change of few dependency variable, and not necessarily calculated in every re-render.
    const isEven = useMemo(()=>{
        let i = 0
        while(i<2000000000) i++
        return counterOne %2 === 0
    },[counterOne])

  return (
    <div>
      
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
         <span>{isEven? 'Even':'Odd'}</span>
      </div>
        
       <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
    </div>
  )
}


