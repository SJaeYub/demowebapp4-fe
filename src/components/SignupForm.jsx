import React from "react";
import Button from "./Button.jsx";

const SignupForm = ({formData, handleChange, handleSignup, handleIdCheck, handleCodeCheck}) => {
    return (
        <>
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
                <Button text={"check-valid"} onClick={handleCodeCheck}/>
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
            </div>z
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
                <Button text={"check-valid"} onClick={handleCodeCheck}/>
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

        </>
    )
}

export default SignupForm