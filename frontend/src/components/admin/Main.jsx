import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TableTitle from './component/TableTitle';
import Table from './component/Table';
import HeaderImage from '../HeaderImage';
import Footer from '../Footer';
import NavBar from '../NavBar';

function Main(){
    const navigate = useNavigate();

    

    return(
        <div>
            <NavBar/>
            <HeaderImage/>
            <div className='middleContainer'>
                <div className='tableWrapper'>
                    <TableTitle
                        tableTitle="TeamCC Activity"
                    />
                    <Table/>
                    
                    <TableTitle
                        tableTitle="TeamCC Activity"
                    />
                    <Table/>
                    
                    <TableTitle
                        tableTitle="TeamCC Activity"
                    />
                    <Table/>
                    
                    
                </div>
            </div>
            <Footer/>
        </div>
        
        
    )
}

export default Main;