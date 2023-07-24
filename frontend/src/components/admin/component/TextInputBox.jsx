import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function TextInputBox(props){
    const inputboxName = props.inputboxName;
    const imgSRC = props.imgSRC;
    const placeholderText = props.placeholderText;
    const argument = props.argument;
    const setFunc = props.setFunc;
    const confirmArgu = props.confirmArgu;
    const errorMsg = props.errorMsg;
    var inputType = "";

    // console.log(confirmArgu);

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
                    <div style={{display:'none'}}>
                        {
                            inputboxName === 'ID' ? (
                                inputType = "text"
                            ) : (
                                inputType = "password"
                            )
                        }
                    </div>

                    <input id={inputboxName + "_id"} 
                        class="inputBox"
                        name="id"
                        required type={inputType}
                        placeholder={placeholderText}
                        onChange={changeInput}
                    ></input>
                </div>
            </div>
            <hr></hr>
            {
                confirmArgu === 'no' ? (
                    <div className='errorMessage'>{errorMsg}</div>
                ) : (
                    <div className='errorMessage'></div>
                )
            }
            
        </div>
        
    )
}

export default TextInputBox;