import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/Card";

export interface INewLoans {
  Mincreditscore: string;
  ProcessingFee: string;
  TermLenghth: string;
  age: number;
  approved: boolean;
  currentemployer: string;
  designation: string;
  email: string;
  gender: string;
  id: number;
  interestRates: string;
  loanAmount: string;
  loanAmountToApply: string;
  logo: string;
  name: string;
  password: string;
  rejected: boolean;
  role: string;
  salary: string;
  title: string;
}

export default function AppliedLoans() {
  const [newLoans, setNewLoans] = useState<INewLoans[]>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:4000/appliedNewLoans")
      .then((res) => setNewLoans(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="allLonesContainer">
    <ul>
      {newLoans &&
        newLoans.map((ele: INewLoans, index: number) => {
            console.log(Object.keys(ele),"   ",Object.values(ele))
          const headings = Object.keys(ele).splice(9,6);
          const values = Object.values(ele).splice(9,6);

          return (
            <li key={index}>
              <Card
                data={ele}
                buttonName={ele.approved  ? "Application Approved" : ele.rejected ?  "Application Rejected" : "Application Pending"}
                headings={headings}
                values={values}
                loanApproved = {ele.approved}
                fromAppliedLoans = {true}
             
              />
            </li>
          );
        })}
    </ul>
  </div>
  );
}
