import axios from "axios";
import React, { useEffect, useState } from "react";

interface IData {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
export default function FetchingData() {
  const [data, setData] = useState<[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
