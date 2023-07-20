import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Table(props){
    const tableTitle = props.tableTitle;

    return(
        <div className='tablePart'>
            <table>
                <tr className='tableCSS'>
                    {/* <div className='tableCSS'> */}
                        <th className='tableFirstCol'>NO.</th>
                        <th className='tableTH, tableSecondCol'>Activity Name</th>
                        <th className='tableTH'>Score</th>
                        <th className='tableTH'>Duplication</th>
                        <th className='tableTH'>Delete</th>
                    {/* </div> */}
                </tr>
                <tr>
                    <td className='tableFirstCol'>1</td>
                    <td className='tableTH, tableSecondCol'>한동 한바퀴</td>
                    <td className='tableTH'>1 학점</td>
                    <td className='tableTH'>1회 가능</td>
                    <td className='tableTH'><img className='deleteBtn' src='/assets/adminImage/trashCan.png'></img></td>
                </tr>
            </table>
            
        </div>
        
    )
}

export default Table;