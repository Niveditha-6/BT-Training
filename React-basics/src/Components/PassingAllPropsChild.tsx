import React from 'react'


type IData = {
    imgSrc: string;
    title: string;
    text: string;
  };
  type IProps = {
    data: IData[];
  };
export default function PassingAllPropsChild(props: IProps) {
  return (
    <>
      <h1>From child who is recieving the all props</h1>
      {/* able to recive all props */}
      {console.log(props.data)}
    </>
  )
}
