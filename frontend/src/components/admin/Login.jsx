import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();

    const loginAction = e => {

    }

    return(
        <div className='page'>
            <div className='title'>
                <span style={{color:"#717171"}}>LOGIN</span><br></br>
                <span className='spanTitle'>PAGE</span>
            </div>
            <div className="loginPart">
                <div className='loginBtn2' onClick={loginAction}>
                    LOGIN
                </div>
            </div>
        </div>
        
        
    )
}

export default Login;