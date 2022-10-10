import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="homeContainer">
    
      <h1 className="header">Personal Loans upto 350000!!</h1>
      <div className="subHeader">
        {" "}
        No origination fees | No pre-payment fees | No late fees{" "}
      </div>
      <div className="navCard">
     <div className="homeCard">
<div className="homeCardText">
  <p>Fixed Rates with autopay</p>
  <p className="boldText">6.66% APR - 20.96% APR</p>
  <p>Checking your rate will not affect your credit score.</p>
</div>
<div>
  <button className="applyButton" onClick={()=> navigate('/login') }>Get my loan Today</button>
</div>
     </div>
      </div>
 <section className="homeFooter">
        <div>
          <h3>BT FINANCE</h3>
          <p>
            BT Finance 
          </p>
        </div>
        <div>
          <h3>PRODUCTS</h3>
          <ul className="ulFlex">
            <li>Student Loan</li>
            <li>Personal Loan</li>
            <li>Mortgage</li>
          </ul>
        </div>
        <div>
          <h3>USEFUL LINKS</h3>
          <ul className="ulFlex">
            <li>
              <Link to="#"> Terms of Use </Link>
            </li>
            <li>
              <Link to="#"> Privacy Policy</Link>
            </li>
            <li>
              <Link to="#"> Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>CONTACT</h3>
          <p> Bengaluru, 300097, India</p>
        </div>
      </section> 
      <footer className="footer">©2022 Copyright: BT</footer>
    </div>
  );
}
