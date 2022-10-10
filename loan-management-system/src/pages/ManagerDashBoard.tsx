import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import AllApplication from "./AllApplication";
import { INewLoans } from "./AppliedLoans";
import ApprovedApplication from "./ApprovedApplication";
import PendingApplication from "./PendingApplication";
import RejectedApplication from "./RejectedApplication";

export default function ManagerDashBoard() {

 

  return (
    <div>
      <div className="userHead">
        <Link to="/managerdashboard/allapplication">All Application</Link>
        <Link to="/managerdashboard/pendingapplication">Pending Application</Link>
        <Link to="/managerdashboard/approvedapplication">Approved Application</Link>
        <Link to="/managerdashboard/rejectedapplication">Rejected Application</Link>
      </div>

      <Routes>
         <Route path="allapplication" element={<AllApplication />} />
        <Route path="pendingapplication" element={<PendingApplication />} />
        <Route path="approvedapplication" element={<ApprovedApplication />} />
       <Route path="rejectedapplication" element={<RejectedApplication  />} />
      </Routes>

    </div>
  );
}

