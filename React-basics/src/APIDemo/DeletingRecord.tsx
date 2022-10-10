import axios from "axios";
import React, { useEffect, useState } from "react";

interface IData {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
export default function DeletingRecord() {

const [data, setData] = useState<[]>([]);
const[showEdit,setShowEdit] = useState<boolean>(false);
const[editableData,setEditableData] = useState<IData>({postId: 0,id: 0, name: '',email: '',body: ''})


  useEffect(() => {
    fetchData();
    
  }, []);

const handleDelete = (ele:IData) =>{

    if(window.confirm('Are You sure to delete ?')){
        axios.delete(`http://localhost:4000/comments/${ele.id}`)
             .then(()=> {
               alert('deleted Successfully')
               fetchData();
             })
             .catch(error=> console.log(error))
     }
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
                <td><button onClick={()=>{handleDelete(ele)}}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>

  
    </div>
  );
}
