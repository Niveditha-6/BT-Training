import React, { useState, useEffect } from "react";
import "./card.css";
import { INewLoans } from "../pages/AppliedLoans";
import { ILoans } from "../pages/AllLones";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ApplyForm from "../pages/ApplyForm";

interface IData {
  data?: ILoans | INewLoans | any;
  buttonName: string;
  headings?: string[];
  values?: string[];
  loanApproved?: boolean;

  bankHeadings?: string[];
  bankValues?: string[];
  fromPendingApplication?: boolean;
  fromAppliedLoans?: boolean;
  fromAllLones?: boolean;
  setisUpdated?(b: boolean): void;
}

export default function Card(props: IData) {
  const [newData, setNewData] = useState<any>(props.data);
  const navigate = useNavigate();
  const [entireData, setEntireData] = useState<INewLoans[]>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:4000/appliedNewLoans")
      .then((res) => setEntireData(res.data))
      .catch((err) => console.log(err));
  };

  const handleReject = () => {
    newData.rejected = true;
    updateData();
  };

  const handleApprove = () => {
    newData.approved = true;

    updateData();
  };

  const updateData = () => {
    console.log(newData, "new");
    props.setisUpdated && props.setisUpdated(true);
    axios
      .put(`http://localhost:4000/appliedNewLoans/${newData.id}`, newData, {
        headers: { "content-type": "application/json" },
      })
      .then((response) => {
        console.log(`Updated Record Successfully`);
        console.log(response.data);
        alert(`Updated Record id:${newData.id} Successfully`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const displayHeadings = (): any => {
    return props.fromAllLones || props.fromAppliedLoans
      ? props.headings && props.headings.map((h) => <li>{h}</li>)
      : props.headings &&
          props.headings.map((h, i: number) => (
            <li>
              {h}: {props.values && props.values[i]}
            </li>
          ));
  };

  const displayValues = (): any => {
    return props.fromAllLones || props.fromAppliedLoans
      ? props.values && props.values.map((v) => <li>{v}</li>)
      : props.bankHeadings &&
          props.bankHeadings.map((v, i: number) => (
            <li>
              {v}: {props.bankValues && props.bankValues[i]}
            </li>
          ));
  };

  const hanndleApply = () => {
    const uEmail = localStorage.getItem("email");
    const bankApplied = props.data.title;


    const checkData: any =
      entireData &&
      entireData.map((data) => {
        return data.title === bankApplied && data.email === uEmail;
      });
    let checker = (checkData: any[]) => checkData.every((v) => v === false);
    props.data && checker(checkData)
      ? navigate("/applyform", { state: { data: props.data } })
      : alert("Already exist");
  };

  return (
    <div
      className={
        props.fromAllLones || props.fromAppliedLoans
          ? "cardContainer"
          : "biggerCardContainer"
      }
    >
      <div className="cardFlex">
        <div
          className={
            props.fromAllLones || props.fromAppliedLoans
              ? "cardFirstflex"
              : "biggerFirstflex"
          }
        >
          <img src={props.data.logo} alt="company-logo"></img>
        </div>
        <div
          className={
            props.fromAllLones || props.fromAppliedLoans
              ? "cardSecondflex"
              : "biggerSecondflex"
          }
        >
          <ul>{displayHeadings()}</ul>
        </div>
        <div
          className={
            props.fromAllLones || props.fromAppliedLoans
              ? "cardThirdflex"
              : "biggerThirdflex"
          }
        >
          <ul>{displayValues()}</ul>
        </div>
      </div>

      {props.fromAppliedLoans ? (
        <button
          className={
            props.loanApproved
              ? "green"
              : props.buttonName === "Application Pending"
              ? "yellow"
              : "red"
          }
        >
          {props.buttonName}
        </button>
      ) : props.fromPendingApplication && props.fromPendingApplication ? (
        <div className="buttonsConatiner">
          <button className="PendingApprove" onClick={handleApprove}>
            Approve
          </button>
          <button className="PendingReject" onClick={handleReject}>
            Reject
          </button>
        </div>
      ) : props.fromAllLones ? (
        <button className="applyButton" onClick={hanndleApply}>
          {props.buttonName}
        </button>
      ) : (
        <button
          className={
            props.loanApproved
              ? "green bigConatainer"
              : props.buttonName === "Application Pending"
              ? "yellow bigConatainer"
              : `red bigConatainer`
          }
        >
          {props.buttonName}
        </button>
      )}
    </div>
  );
}
