import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/Card";
import "./alllones.css";

 export interface ILoans {
  Minicreditscore: string;
  ProcessingFee: string;
  TermLenghth: string;
  interestrates: string;
  loanAmount: string;
  logo: string;
  title: string;
}
export default function AllLones() {
  const [loans, setLoans] = useState<ILoans[]>();
  const fetchData = () => {
    axios
      .get("http://localhost:4000/loans")
      .then((res) => setLoans(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="allLonesContainer">
      <ul>
        {loans &&
          loans.map((ele: ILoans, index: number) => {

            const headings = Object.keys(ele).splice(2);
            const values = Object.values(ele).splice(2);

            return (
              <li key={index}>
                <Card
                  data={ele}
                  buttonName="Apply Now"
                  headings={headings}
                  values={values}
                  fromAllLones = {true}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
