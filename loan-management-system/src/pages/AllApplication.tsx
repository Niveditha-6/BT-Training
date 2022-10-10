import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { INewLoans } from "./AppliedLoans";



export default function AllApplication() {


  const [newLoans, setNewLoans] = useState<INewLoans[]>();

  

  const fetchNewLoans = () => {
    axios
      .get("http://localhost:4000/appliedNewLoans")
      .then((res) => {
        setNewLoans(res.data);
      
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchNewLoans();
  }, []);




  return (
    <div className="allLonesContainer">
      <ul>
        {newLoans &&
         newLoans.map((ele: INewLoans, index: number) => {
            const userHeadings = Object.keys(ele).splice(0, 7);
            const userValues = Object.values(ele).splice(0, 7);

            const bankHeadings = Object.keys(ele).splice(8, 7);
            const bankValues = Object.values(ele).splice(8, 7);

            return (
              <li key={index}>
                <Card
                  data={ele}
                  buttonName={
                    ele.approved
                      ? "Application Approved"
                      : ele.rejected
                      ? "Application Rejected"
                      : "Application Pending"
                  }
                  headings={userHeadings}
                  values={userValues}
                  bankHeadings ={bankHeadings}
                  bankValues ={bankValues}
                  loanApproved={ele.approved}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
