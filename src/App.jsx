import {useState} from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Main from "./pages/main/Main.jsx";
import Strategy from "./pages/main/Strategy.jsx";
import Subscription from "./pages/subscription/Subscription.jsx";
import QnARequest from "./pages/qna-req/QnA-Request.jsx";
import PaymentInfo from "./components/PaymentInfo.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Login/>}/>
                <Route path={"/signup"} element={<Signup/>}/>
                <Route path={"/main"} element={<Main/>}/>
                <Route path={"/strategy"} element={<Strategy/>}/>
                <Route path={"/subscribe"} element={<Subscription/>}/>
                <Route path={"/qna"} element={<QnARequest/>}/>
            </Routes>
        </>
    )
}

export default App
