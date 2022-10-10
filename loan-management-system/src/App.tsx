import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import NavBar from './Components/NavBar';
import UserDashBoard from './pages/UserDashBoard';
import ManagerDashBoard from './pages/ManagerDashBoard';
import ApplyForm from './pages/ApplyForm';

function App() {
  return (
    <div className="App">
   
     <BrowserRouter>
  <NavBar/>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/home" element={<Home/>}/>

     <Route path="/login" element={<Login/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/userdasboard/*" element={<UserDashBoard/>}/>
     <Route path="/managerdashboard/*" element={<ManagerDashBoard/>}/>
     <Route path="/applyform" element={<ApplyForm/>}/>


     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
