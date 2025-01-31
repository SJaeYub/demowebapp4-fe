import {useState} from 'react'
import './App.css'
import Login from "./pages/login/Login.jsx";
import {Route, Routes} from "react-router-dom";
import Signup from "./pages/signup/Signup.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Login/>}/>
                <Route path={"/signup"} element={<Signup/>}/>
            </Routes>
        </>
    )
}

export default App
