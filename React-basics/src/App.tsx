
import "./App.css";
import ArrayAsProps from "./Components/ArrayAsProps";
import CustomHookLayout from "./Components/CustomHookLayout";
import Message from "./Components/Message";
import Movie from "./Components/Movie";
import TodoDynamic from "./Components/TodoDynamic";
import UseEffectDemo from "./Components/UseEffectBasics";
import UseMemoDemo from "./Components/UseMemo";
import React from 'react'
import FetchingData from './APIDemo/FetchingData'
import UpdatingData from "./APIDemo/UpdatingData";
import DeletingRecord from "./APIDemo/DeletingRecord";
import InitialPage from "./Project.tsx/InitialPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Routing/Menu";
import Home from "./Routing/Home";
import Likes from "./Routing/Likes";
import Login from "./Routing/Login";
import LoginPage from "./SimpleRoles/LoginPage";
import Page from "./SimpleRoles/Page";

let color:string[] = ['red','blue','yellow']

function App() {
  return (
    // <div className="App">
    //   <Message info="nivi" status="Active"  isHappy="yes"/>
    //   <Message info="rabbit" status="Inactive" />
    //   {/* not passing optional prop */}
    //   <Message info="rabbit" />
    //   <ArrayAsProps color = {color}/>
    //   <Movie/>

    // </div>

    <>

<BrowserRouter>
<Page/>
<Routes>

{/* <Route path="/" element={<Menu />}>
<Route path="/home" element={<Home/>}/>
<Route path="/comment" element={<Likes/>}/>
</Route> */}
<Route path="/home" element={<Home/>}/>
<Route path="/comment" element={<Likes/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/loginpage" element={<LoginPage/>}/>


{/* <Route path="/page" element={<Page/>}/> */}

</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
