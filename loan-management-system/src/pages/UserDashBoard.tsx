import React from 'react'
import { BrowserRouter, Link,Routes,Route } from 'react-router-dom';
import AllLones from './AllLones';
import AppliedLoans from './AppliedLoans';
import "./userdashboard.css"

export default function UserDashBoard() {
  return (
    <div>
     <div className='userHead'>
        <Link to='/userdasboard/alllones'>All Loans</Link>
        <Link to='/userdasboard/appliedlones'>Applied Loans</Link>

     </div>
  
<Routes>
<Route path="alllones" element={<AllLones/>}/>
     <Route path="appliedlones" element={<AppliedLoans/>}/>
</Routes>

    </div>
  )
}


