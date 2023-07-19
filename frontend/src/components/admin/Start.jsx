import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Start(){
    const navigate = useNavigate();

    const loginPage = e => {
        navigate('./login');
    }

    return(
        <div className='page'>
            <div className='title'>
                <span style={{color:"#717171"}}>TEAM</span><span className='spanTitle'>CC</span> <br></br>
                <span className='spanTitle'>SERVICE</span>
            </div>
            <div className='loginBtn' onClick={loginPage}>
                LOGIN
            </div>
            <div className='registerBtn'>
                REGISTER
            </div>
        </div>
        
    )
}

export default Start;