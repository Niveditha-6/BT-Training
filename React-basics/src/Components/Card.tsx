import React from "react";
import PassingAllPropsChild from "./PassingAllPropsChild";
import SimpleLogin from "./SimpleLogin";

type IData = {
  imgSrc: string;
  title: string;
  text: string;
};
type IProps = {
  data: IData[];
};

export default function Card(props: IProps) {
  return (
    <>
      {props.data.map((ele:IData,index:number) => {
        return (
          <div key={index}>
            <img src={ele.imgSrc}></img>
            <div>{ele.title}</div>
            <div>{ele.text}</div>
          </div>
        );
      })}
      <PassingAllPropsChild  {...props}/>
      <SimpleLogin/>
    </>
  );
}

// we can pass all props instead of PASSING SINGLE VALUE
{/* <Example {...props}/> */}