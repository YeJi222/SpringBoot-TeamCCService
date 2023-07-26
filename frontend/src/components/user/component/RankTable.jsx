import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function RankTable(props){

    return(
        <div className='rankTablePart'>
            <div className='rankLeftBlock'>Team 1</div>
            <div className='rankRightBlock'>
                <div className='infoPart'>
                    <div className='teamName'>Tory AND Bibi TEAM</div>
                    <div className='totalScore'>Total 8학점</div>
                </div>
                <img className='medalImage' src='/assets/userImage/bronze.png'></img>
            </div>
            <div className='semiBlockTop'></div>
            <div className='semiBlockBottom'></div>
        </div>
    )
}

export default RankTable;