import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function TextInputBox(props){
    const inputboxName = props.inputboxName;
    const imgSRC = props.imgSRC;
    const placeholderText = props.placeholderText;
    const argument = props.argument;
    const setFunc = props.setFunc;
    const errorMsg = props.errorMsg;

    const changeInput = (e) => {
        // console.log(e.target.value);
        setFunc(e.target.value);
    }

    return(
        <div className='boxHeader'>
            <div className='inputTitle'>
                {inputboxName}
            </div>
            <div className='inputGrid'>
                <div>
                    <img className='iconCSS' src={imgSRC}></img>
                </div>
                <div>
                    <input id={inputboxName + "_id"} 
                        class="inputBox"
                        name="id" 
                        required type="text"
                        placeholder={placeholderText}
                        onChange={changeInput}
                    ></input>
                </div>
            </div>
            <hr></hr>
            {
                inputboxName === 'ID' ? (
                    console.log("id")
                ) : inputboxName === 'Password' ? (
                    console.log("pw")
                ) : (
                    console.log("confirmPW")
                )
            }
            <div className='errorMessage'>{errorMsg}</div>
        </div>
        
    )
}

export default TextInputBox;