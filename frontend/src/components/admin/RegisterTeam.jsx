import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TextInputBox from './component/TextInputBox';

function RegisterTeam(){
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
                <span style={{color:"#717171"}}>CREATE</span><br></br>
                <span className='spanTitle'>TEAM</span>
            </div>
            <br></br>
            <div className="registerPart">
                <TextInputBox
                    inputboxName={"Team Name"}
                    imgSRC={"/assets/adminImage/nameIcon.png"}
                    placeholderText={'팀명을 입력하세요'}
                />
                <TextInputBox
                    inputboxName={"CC Team 수"}
                    imgSRC={"/assets/adminImage/ccTeamIcon.png"}
                    placeholderText={'CC 팀 수를 입력하세요'}
                />
                <br></br>
                <div className='registerBtn2' onClick={registerAction}>
                    Create
                </div>
            </div>
        </div>
        
        
    )
}

export default RegisterTeam;