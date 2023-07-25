import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function TableTitle(props){
    const tableTitle = props.tableTitle;

    return(
        <div className='gridContainer'>
            <div className='firstCol'>
                <div className='tableTitle'>
                    {tableTitle}
                </div>
                <div className='tableSubTitle'>
                    Total 30 activities
                </div>
            </div>

            <div className='secondCol'>
                View Credit Card Image
            </div>

            {/* <div className='thirdCol'>
                Create Activity
            </div> */}
        </div>
        
    )
}

export default TableTitle;