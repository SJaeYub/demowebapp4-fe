import React, { useState } from 'react';
import './Signup.css';
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
        id: '',
        password: '',
        confirmPassword: '',
        email: '',
        registrationCode: '',
        name: '',
        englishName: ''
    });

    const nav = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = () => {
        console.log('Signup attempted with:', formData);
    };

    const handleIdCheck = () => {
        console.log('ID check for:', formData.id);
    };

    const handleCodeCheck = () => {
        console.log('Registration code check for:', formData.registrationCode);
    };

    const handleBack = () => {
        console.log('Back button clicked');
        nav(-1);
    };

    return (
        <div className="signup-container">
            <button className="back-button" onClick={handleBack}>뒤로</button>
            <div className="title-container">
                <h1>회원가입</h1>
                <h2>demowebapp4</h2>
            </div>
            <div className="form-container">
                <div className="input-group">
                    <label htmlFor="id">ID</label>
                    <input
                        id="id"
                        name="id"
                        className="input-field"
                        placeholder="아이디 입력"
                        type="text"
                        value={formData.id}
                        onChange={handleChange}
                    />
                    <button className="check-button" onClick={handleIdCheck}>중복검사</button>
                </div>
                <div className="input-group">
                    <label htmlFor="password">PW</label>
                    <input
                        id="password"
                        name="password"
                        className="input-field"
                        placeholder="비밀번호 입력"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="confirmPassword">PW 확인</label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        className="input-field"
                        placeholder="비밀번호 확인"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">이메일</label>
                    <input
                        id="email"
                        name="email"
                        className="input-field"
                        placeholder="이메일 입력"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="registrationCode">등록 코드</label>
                    <input
                        id="registrationCode"
                        name="registrationCode"
                        className="input-field"
                        placeholder="등록 코드 입력"
                        type="text"
                        value={formData.registrationCode}
                        onChange={handleChange}
                    />
                    <button className="check-button" onClick={handleCodeCheck}>유효성 검사</button>
                </div>
                <div className="input-group">
                    <label htmlFor="name">이름</label>
                    <input
                        id="name"
                        name="name"
                        className="input-field"
                        placeholder="이름 입력"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="englishName">영문 이름</label>
                    <input
                        id="englishName"
                        name="englishName"
                        className="input-field"
                        placeholder="영문 이름 입력"
                        type="text"
                        value={formData.englishName}
                        onChange={handleChange}
                    />
                </div>
                <div className="button-container">
                    <button className="signup-button" onClick={handleSignup}>회원가입</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
