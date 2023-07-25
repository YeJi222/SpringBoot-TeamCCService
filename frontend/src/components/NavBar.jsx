import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function NavBar(){
    return(
        <div>
            <nav id='commonNavBar' className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navBarTitle navbar-brand" href="#">Admin Page</a>
                <button className="togglerCSS navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span><img src='/assets/commonImage/menuBar.png' width="20px"></img></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="navBarCSS nav-link" href="#">SCORE BOARD</a>
                    </li>
                    <li className="nav-item">
                        <a className="navBarCSS nav-link" href="https://www.notion.so/TEAM-CC-Service-Guideline-a33a35526b7043b6bc0446febb4c6510">GUIDELINE</a>
                    </li>
                    <li className="nav-item">
                        <a className="navBarCSS nav-link" href="#">LOGOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="navBarCSS nav-link" href="#">DELETE</a>
                    </li>
                    <li className="nav-item">
                        <a className="navBarCSS nav-link" href="#">EDIT ADMIN INFO</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
            
            
    )
}

export default NavBar;