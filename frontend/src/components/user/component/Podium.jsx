import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Podium(props){

    return(
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
        
    )
}

export default Podium;