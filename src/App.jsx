import {useState} from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "./pages/login/Login.jsx";
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
