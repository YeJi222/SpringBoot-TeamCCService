import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TableTitle from './component/TableTitle';
import Table from './component/Table';

function Main(){
    const navigate = useNavigate();

    

    return(
        <div className='tableWrapper'>   
            <TableTitle
            tableTitle="TeamCC Activity"
                
            />
            <br></br>
            <Table

            />
            
        </div>
        
    )
}

export default Main;