import React, { ReactElement, useState } from "react";
import CheckBox from "./CheckBox";

type ITodo = {
  description: string;
  done: boolean;
};

export default function TodoStaticData() {
  const [todoItems, setTodoItems] = useState<ITodo[]>([]);
  const [doneCheckBox, setDoneCheckBox] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [editableValue, setEditableValue] = useState<string>("");
  const [editValue, setEditValue] = useState<string>("");

  const addData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let newData = { description: "", done: false };
    newData.description = inputValue;
    let foundtask = todoItems.find((todo) => todo.description === inputValue);
    if (!foundtask) {
      setTodoItems([...todoItems, newData]);
    } else {
      alert("Already Exist");
    }
    setInputValue("");
  };

  const handledoneCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDoneCheckBox(e.target.checked);
  };

  const getUnchecked = todoItems.filter((ele) => ele.done === false);

  const handleCheck = (index: number) => {
    let newdata = [...todoItems];
    newdata[index].done = !newdata[index].done;
    setTodoItems(newdata);
  };

  const deleteData = (ele: ITodo) => {
    let deletedArray = todoItems.filter(
      (item) => item.description != ele.description
    );
    setTodoItems(deletedArray);
  };

  const editData = () => {
    let editedData = [...todoItems];
    for (let ele of editedData) {
      if (ele.description === editableValue) {
        ele.description = editValue;
      }
    }
    setTodoItems(editedData);
    setEditableValue("");
  };

  const display = (value: boolean) => {
    return todoItems.map((ele: ITodo, index: number) =>
      ele.done === value ? (
        <tr key={index}>
          <td>{ele.description}</td>
          <td>
            <input
              type="checkbox"
              checked={ele.done}
              onChange={() => handleCheck(index)}
            ></input>
          </td>
          <td>
            {" "}
            <button onClick={(e) => deleteData(ele)}>Delete Todo</button>
            <button onClick={() => setEditableValue(ele.description)}>Edit Todo</button>
          </td>
        </tr>
      ) : null
    );
  };

  return (
    <>
      <h1>Niveditha's todo List {getUnchecked.length}</h1>
      Description:{" "}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={(e) => addData(e)}>Add Todo</button>
      <table border={1}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{display(false)}</tbody>
      </table>
      {doneCheckBox ? (
        <>
          <table border={1}>
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{display(true)}</tbody>
          </table>
        </>
      ) : (
        ""
      )}
      {editableValue !== "" ? (
        <>
          {" "}
          <input onChange={(e) => setEditValue(e.target.value)} />{" "}
          <button onClick={editData}>Add Edit</button>
        </>
      ) : null}
      <CheckBox handledoneCheck={handledoneCheck} doneCheckBox={doneCheckBox} />
    </>
  );
}
