import React, { useState, useEffect } from 'react';

function Toggle(props){
    const userStateToggled = props.userStateToggled;
    const setUserStateToggled = props.setUserStateToggled;

    const handleToggle = (e) => {
        setUserStateToggled(userStateToggled === "yes" ? "no" : "yes");
        console.log(userStateToggled);
    };

    return(
        <span className="toggleArea">
            <input type="checkbox" id="toggle" className="toggleCheckbox"
                checked={props.userStateToggled}
                onClick={handleToggle}
            />
            <span htmlFor="toggle" className='toggleContainer'>
                <div></div>   
                <div></div>
            </span>
            {props.userStateToggled === "yes" ? (
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
        </span>
    );
}

export default Toggle;