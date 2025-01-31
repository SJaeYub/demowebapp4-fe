import React, {useState} from 'react';
import './Login.css';
import {replace, useNavigate} from "react-router-dom";

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
        <div className="login-container">
            <div className="title-container">
                <h1>Welcome</h1>
                <h2>demowebapp4</h2>
            </div>
            <div className="form-container">
                <div className="input-group">
                    <label htmlFor="id">ID</label>
                    <input
                        id="id"
                        className="input-field"
                        placeholder="아이디 입력"
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">PW</label>
                    <input
                        id="password"
                        className="input-field"
                        placeholder="비밀번호 입력"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="button-container">
                    <button className="login-button" onClick={handleLogin}>로그인</button>
                    <button className="signup-button" onClick={handleSignup}>회원가입</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
