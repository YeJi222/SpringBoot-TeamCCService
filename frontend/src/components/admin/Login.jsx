import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TextInputBox from './component/TextInputBox';

function Login(){
    const navigate = useNavigate();

    const loginAction = e => {

    }

    return(
        <div className='pageImage'>
            <div className='title'>
                <span style={{color:"#717171"}}>LOGIN</span><br></br>
                <span className='spanTitle'>PAGE</span>
            </div>
            <div className="loginPart">
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
                <div className='loginBtn2' onClick={loginAction}>
                    LOGIN
                </div>
            </div>
        </div>
        
        
    )
}

export default Login;