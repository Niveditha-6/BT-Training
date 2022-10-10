import axios from "axios";
import React, { useEffect, useState } from "react";

interface IData {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
export default function UpdatingData() {

const [data, setData] = useState<[]>([]);
const[showEdit,setShowEdit] = useState<boolean>(false);
const[editableData,setEditableData] = useState<IData>({postId: 0,id: 0, name: '',email: '',body: ''})


  useEffect(() => {
    fetchData();
    
  }, []);


  const updateData = () =>{
    axios.put(`http://localhost:4000/comments/${editableData.id}`,editableData,{headers:{'content-type':'application/json'}})
    .then((response) => {
        alert(`Updated Record id:${editableData.id} Successfully`)
      fetchData();
        setShowEdit(false)
    })
    .catch((error) => {
        console.log(error)
    })

  }
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setEditableData({...editableData, [event.target.name]:event.target.value})
}
  const fetchData = () => {
    axios
      .get("http://localhost:4000/comments")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };


  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>postId</th>
            <th>id</th>

            <th>name</th>
            <th>email</th>
            <th>body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele: IData, i) => {
            return (
              <tr key={i}>
                <td>{ele["postId"]}</td>
                <td>{ele["id"]}</td>
                <td>{ele["name"]}</td>
                <td>{ele["email"]}</td>
                <td>{ele["body"]}</td>
                <td><button onClick={()=>{setShowEdit(true);setEditableData(ele)}}>Edit</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {showEdit ? 
    <>
   PostId: <input  value={editableData.postId} type="number" name="postId" onChange={(event)=> handleChange(event)}/>
    id:<input  value={editableData.id} name="id"  type="number" onChange={(event)=> handleChange(event)}/>
   Name: <input  value={editableData.name} type="text" name="name" onChange={(event)=> handleChange(event)}/>
   Email: <input  value={editableData.email} type="text"  name="email" onChange={(event)=> handleChange(event)}/>
   Body: <input  value={editableData.body} name="body"  type="text" onChange={(event)=> handleChange(event)}/>
<button onClick={updateData} >Add edited record</button>

    </>  
    
    :
    <></>
    
    }
    </div>
  );
}
