import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import HeaderImage from '../HeaderImage';
import Footer from '../Footer';
import NavBar from '../NavBar';

function UserRank(){
    const navigate = useNavigate();

    return(
        <div>
            <NavBar/>
            <HeaderImage/>
            <div className='middleContainer'>
                <div className='podiumPart'>
                    <div className='firstPrize'>
                        Team7
                    </div>
                    <div className='secondPrize'>
                        Team3
                    </div>
                    <div className='thirdPrize'>
                        Team1
                    </div>
                    <img className='podiumImg' src='/assets/userImage/podium.png'/>
                </div>
            </div>
            <Footer/>
        </div>
        
        
    )
}

export default UserRank;