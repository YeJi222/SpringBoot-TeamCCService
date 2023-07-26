import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import HeaderImage from '../HeaderImage';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Podium from './component/Podium';
import RankTable from './component/RankTable';

function UserRank(){
    const navigate = useNavigate();

    const backAction = (e) => {
        window.history.back();
    }

    return(
        <div>
            <NavBar/>
            <div onClick={backAction}>
                <img className='backArrowFixed' src="/assets/adminImage/backArrow.png"></img>
            </div>
            <HeaderImage/>
            <div className='middleContainer'>
                <Podium/>
                <RankTable/>
                <RankTable/>
                <RankTable/>
                <RankTable/>
                <RankTable/>
                <RankTable/>
            </div>
            <Footer/>
        </div>
        
        
    )
}

export default UserRank;