import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TextInputBox from './component/TextInputBox';

function Register(){
    const navigate = useNavigate();

    const registerAction = e => {

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
                />
                <TextInputBox
                    inputboxName={"Password"}
                    imgSRC={"/assets/adminImage/pwImage.png"}
                    placeholderText={'패스워드'}
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