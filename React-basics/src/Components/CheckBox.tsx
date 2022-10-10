import React from 'react'


type IProps ={
    handledoneCheck:(e: React.ChangeEvent<HTMLInputElement>)=> void
    doneCheckBox : boolean
}


export default function CheckBox(props : IProps) {
  return (
    <div>
       <input
              type="checkbox"
              checked={props.doneCheckBox}
              onChange={(e) => props.handledoneCheck(e)}
            />Show Task Completed
    </div>
  )
}
