import React, { useState, useEffect } from 'react';

function Toggle(props){
    const userStateToggled = props.userStateToggled;
    const setUserStateToggled = props.setUserStateToggled;

    // console.log(userStateToggled);

    const handleToggle = (e) => {
        console.log(userStateToggled);
        setUserStateToggled(userStateToggled === "yes" ? "no" : "yes");
        
    };

    return(
        <div className="toggleArea">
            <input type="checkbox" 
                id="toggle" className="toggleCheckbox"
                checked={userStateToggled}
            />
            <div htmlFor="toggle" className='toggleContainer'>
                <div onClick={handleToggle}></div>   
                {/* <div></div> */}
            </div>
            {userStateToggled === "yes" ? (
                <style>
                {`.toggleCheckbox:checked + .toggleContainer::before {
                    left: 0%;
                }`}
                {`.toggleCheckbox:checked + .toggleContainer div:first-child {
                    color: #111111;
                    transition: color 0.3s;
                }`}
                </style>
            ):
            (
                <style>
                {`.toggleCheckbox:checked + .toggleContainer::before {
                    left: 50%;
                }`}
                {`.toggleCheckbox:checked + .toggleContainer div:last-child {
                    color: #111111;
                    transition: color 0.3s;
                }`}
                </style>
            )}
        </div>
    );
}

export default Toggle;