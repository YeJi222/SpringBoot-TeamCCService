import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TextInputBox from './component/TextInputBox';
import axios from "axios";

function Register(){
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const navigate = useNavigate();

    const registerAction = e => {
        const formData = new FormData();
        formData.append('userId', id);
        formData.append('userPw', pw);

        console.log("userId", id);
        console.log("userPw", pw);

        axios({
            method: "post",
            url: 'http://localhost:8090/signup',
            data: formData
        })
        .then(function(response){
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    const backAction = (e) => {
        window.history.back();
    }

    return(
        <div className='pageImage'>
            <div onClick={backAction}>
                <img className='backArrow' src="/assets/adminImage/backArrow.png"></img>
            </div>
            <div className='registerTitle'>
                <span style={{color:"#717171"}}>REGISTER</span><br></br>
                <span className='spanTitle'>PAGE</span>
            </div>
            <div className="registerPart">
                <TextInputBox
                    inputboxName={"ID"}
                    imgSRC={"/assets/adminImage/idImage.png"}
                    placeholderText={'아이디'}
                    setFunc={setId}
                />
                <TextInputBox
                    inputboxName={"Password"}
                    imgSRC={"/assets/adminImage/pwImage.png"}
                    placeholderText={'패스워드'}
                    setFunc={setPw}
                />
                <TextInputBox
                    inputboxName={"Confirm Password"}
                    imgSRC={"/assets/adminImage/pwImage.png"}
                    placeholderText={'패스워드 확인'}
                />
                <div className='registerBtn2' onClick={registerAction}>
                    Create
                </div>
            </div>
        </div>
        
        
    )
}

export default Register;