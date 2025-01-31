import React, {useState} from 'react';

import {useNavigate} from "react-router-dom";
import CenterField from "../../components/CenterField.jsx";
import Button from "../../components/Button.jsx";
import SignupForm from "../../components/SignupForm.jsx";

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
        setFormData({...formData, [e.target.name]: e.target.value});
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
        <>
            {/*// <div className="signup-container">*/}
            <Button text={"Back"} onClick={handleBack}/>
            {/*// <div className="title-container">*/}
            <CenterField mainTxt={"회원가입"} subTxt={"demowebapp4"}/>
            {/*// </div>*/}
            {/*// <div className="form-container">*/}
            <SignupForm formData={formData} handleChange={handleSignup} handleIdCheck={handleIdCheck}
                        handleCodeCheck={handleCodeCheck} handleSignup={handleSignup}/>
            {/*// </div>*/}
            {/*// <div className="button-container">*/}
            <Button text={"sign up"} onClick={handleSignup}/>
            {/*// </div>*/}
            {/*</div>*/}
        </>
    );
}

export default Signup;
