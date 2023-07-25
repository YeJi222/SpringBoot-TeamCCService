import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function HeaderImage(){
    // var background_image_tag = '/assets/commonImage/default_background.jpg';

    return(
        <header className="headerImageCSS">
            <div className="">
                <h3 className="teamTitleCSS">꽃보다 영춘 TEAM</h3>
            </div>
        </header>
            
    )
}

export default HeaderImage;