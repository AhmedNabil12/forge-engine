import './App.css';
import React from 'react';
import  Home from "./Component/Home/home";
import NavBar from './Component/NavBar/NavBar';
import AboutUs from "./Component/AboutUs/AboutUs";
import Learn from "./Component/Learn/Learn";
import Forget from "./Component/ForgetPass/Forget";
import Download from './Component/Download/Download';
import LogIn_SignUp from "./Component/LogIn_SignUp/LogIn_SignUp";
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    </Routes>
     <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/Learn' element={<Learn/>} />
        <Route path='/Forget' element={<Forget/>} />
        <Route path='/Download' element={<Download/>} />
        <Route path='/LogIn_SignUp' element={<LogIn_SignUp/>} />

     </Routes>
    </BrowserRouter>
  );
}

export default App;
