import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { INewLoans } from "./AppliedLoans";
import "./applyform.css";
import { IDBData } from "./Login";

export default function ApplyForm() {
  const location = useLocation();

  const res = location.state.data;

  const [applyData, setApplyData] = useState<any>({
    name: "lily",
    email: "lily@gmail.com",
    password: "zaq1zaq1!",
    gender: "female",
    salary: "60000",
    age: 22,
    role: "CUSTOMER",
    logo: "https://download.logo.wine/logo/Chase_Bank/Chase_Bank-Logo.wine.png",
    title: "Chase",
    loanAmount: "$5,000-$100,000",
    interestRates: "4.99% -15.69%",
    Mincreditscore: "660",
    TermLenghth: "48 Months",
    ProcessingFee: "$100",
    currentemployer: "Bottomline",
    designation: "Developer",
    loanAmountToApply: "1111",
    approved: false,
    rejected: false,
  });

  const [usersData, setUsersData] = useState<any>([]);
  const email = localStorage.getItem("email");

  const fetchData = () => {
    axios
      .get("http://localhost:4000/user")
      .then((res) => setUsersData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(res, "res");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const matchingData =
      usersData &&
      usersData.filter((data: any) => {
        return data.email === email;
      });
      console.log(usersData,"userData")
    console.log(matchingData[0], "mm");
    console.log(matchingData.name, "fhdwagd");

    axios
      .post(`http://localhost:4000/appliedNewLoans`, {
        name: matchingData[0].name,
        email: email,

        password: matchingData[0].password,
        gender: matchingData[0].gender,

        salary: applyData.monthlySalary,
        age: 22,
        role: "CUSTOMER",
        logo: res.logo,
        title: res.title,
        loanAmount: res.loanAmount,
        interestRates: res.interestRates,
        Mincreditscore: res.Mincreditscore,
        TermLenghth: res.TermLenghth,
        ProcessingFee: res.ProcessingFee,
        currentemployer: applyData.currentemployer,
        designation: applyData.designation,
        loanAmountToApply: "1111",
        approved: false,
        rejected: false,
        monthlySalary: applyData.monthlySalary,
        amount: applyData.amount,
      })

      .then(() => {
        console.log("updated");
      })
      .catch(() => {
        console.log("err");
      });
  };
  return (
    <div className="applyformParent">
      <div className="applyformContainer">
        {" "}
        <h1 className="applyFormText">APPLY LOAN</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend className="applyFormText">Let's make your profile upto date</legend>
            <div className="profile">
              <label className="applyFormText">Current Employer</label>

              <input
              
                type="text"
                onChange={(e) =>
                  setApplyData({
                    ...applyData,
                    currentemployer: e.target.value,
                  })
                }
                name="currentEmployer"
                required
              />
              <label className="applyFormText">Designation</label>

              <input
                onChange={(e) =>
                  setApplyData({ ...applyData, designation: e.target.value })
                }
                name="designation"
                required
              />
              <label className="applyFormText">Monthly salary</label>

              <input
                onChange={(e) =>
                  setApplyData({ ...applyData, monthlySalary: e.target.value })
                }
                name="monthlySalary"
                required
              />
            </div>
          </fieldset>
          <fieldset>
            <legend className="applyFormText">Get your Rate</legend>

            <ul>
              <li className ="applyFormText">Loan Provider: {res.title}</li>
              <li className ="applyFormText">Term Length: {res.TermLenghth}</li>
              <li className ="applyFormText">Min Credit Score: {res.Mincreditscore}</li>
              <li className ="applyFormText">Processing Fee: {res.ProcessingFee}</li>
            </ul>
            <div className="rate">
              <label className="applyFormText">Please enter the loan amoount you are applying</label>
              <input
                type="text"
                onChange={(e) =>
                  setApplyData({ ...applyData, amount: e.target.value })
                }
                name="loan"
                required
              />
              <label className="applyFormText">Interest based on your profile and applied amount</label>

              <button>11.12%</button>
            </div>
          </fieldset>
          <fieldset>
            {" "}
            <legend className="applyFormText">Submit </legend>
            <button type="submit" className="submitButton">
              Create
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
