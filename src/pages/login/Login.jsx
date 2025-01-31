// pages/Login.tsx
import React, {useState} from 'react';
import LoginForm from '../../components/LoginForm';
import Button from "../../components/Button.jsx";
import {useNavigate} from "react-router-dom";
import CenterField from "../../components/CenterField.jsx";
// import "./Login.css"

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();

    const handleLogin = () => {
        console.log('Login attempted with:', {id, password});
    };

    const handleSignup = () => {
        console.log('Signup clicked');
        nav("/signup", {replace: true});
    };

    return (
        <>
            {/*<div className="login-container">*/}
                <CenterField mainTxt={"welcome"} subTxt={"demo - webapp4"}/>
            {/*</div>*/}
            {/*<div className="form-container">*/}
                <LoginForm id={id} passward={password} setId={setId} setPassword={setPassword}/>
            {/*</div>*/}
            {/*<div className="button-container">*/}
                <Button text={"로그인"} onClick={handleLogin}/>
                <Button text={"회원가입"} onClick={handleSignup}/>
            {/*</div>*/}
        </>
    );
};

export default Login;
