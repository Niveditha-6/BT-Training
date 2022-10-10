import React, { ReactElement, useState } from "react";

type ITodo = {
  description: string;
  done: boolean;
};

export default function TodoStaticData() {
  const [todoItems, setTodoItems] = useState<ITodo[]>([
    { description: "walking", done: true },
    { description: "meditation", done: false },
    { description: "read", done: true },
  ]);



  const getUnchecked = todoItems.filter((ele) => ele.done === false);


const handleCheck = (index:number) =>{
let newdata =[...todoItems]
newdata[index].done= !newdata[index].done
setTodoItems(newdata)

}

  const display = () => {
    return todoItems.map((ele: ITodo, index: number) => {
      return (
        <tr key={index}>
          <td>{ele.description}</td>
          <td>
            <input type="checkbox"  checked={ele.done} onChange={()=>handleCheck(index)}></input>
          </td>
        </tr>
      );
    });
  };



  return (
    <>
      <h1>Niveditha's todo List {getUnchecked.length}</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{display()}</tbody>
      </table>
    </>
  );
}

/* {todoItems.map((ele:ITodo, index: number) => {
          return (
            <tr key={index}>
              <td>{ele.description}</td>
              <td>
                <input type="checkbox" checked={ele.done} onChange={}></input>
              </td>
            </tr>
          );
        })} */
