import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Table(props){
    const tableTitle = props.tableTitle;
    
    const activityInsertAction = e => {
        
    }

    return(
        <div className='tablePart'>
            <table>
                <thead>
                    <tr className='tableCSS'>
                        <th className='tableFirstCol'>NO.</th>
                        <th className='tableTH, tableSecondCol'>Activity Name</th>
                        <th className='tableTH'>Score</th>
                        <th className='tableTH'>Duplication</th>
                        <th className='tableTH'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='tableFirstCol'>1</td>
                        <td className='tableTH, tableSecondCol'>한동 한바퀴</td>
                        <td className='tableTH'>1 학점</td>
                        <td className='tableTH'>1회 가능</td>
                        <td className='tableTH'><img className='deleteBtn' src='/assets/adminImage/trashCan.png'></img></td>
                    </tr>
                    <tr>
                        <td className='tableFirstCol'>1</td>
                        <td className='tableTH, tableSecondCol'>한동 한바퀴</td>
                        <td className='tableTH'>1 학점</td>
                        <td className='tableTH'>1회 가능</td>
                        <td className='tableTH'><img className='deleteBtn' src='/assets/adminImage/trashCan.png'></img></td>
                    </tr>
                    <tr>
                        <td className='tableFirstCol'>1</td>
                        <td className='tableTH, tableSecondCol'>한동 한바퀴</td>
                        <td className='tableTH'>1 학점</td>
                        <td className='tableTH'>1회 가능</td>
                        <td className='tableTH'><img className='deleteBtn' src='/assets/adminImage/trashCan.png'></img></td>
                    </tr>
                    <tr>
                        <td className='tableFirstCol'>🍄</td>
                        <td className='tableTH, tableSecondCol'><input className='activityInput' style={{width:'40vw'}}  type="text" name="activity" placeholder="ex) 바다 가기" required/></td>
                        <td className='tableTH'><input className='activityInput' style={{width:'6vw'}} type="number" min="1" name="score" placeholder=" 5 " required/></td>
                        <td className='tableTH'><input className='activityInput' style={{width:'14vw'}} type="number" min="1" max="50" name="num" placeholder=" 5 " required/></td>
                        <td className='tableTH'><input className='activityInput' style={{width:'13vw'}} type="submit" value=" Insert "></input></td>
                    </tr>
                </tbody>
                
                
            </table>
            
        </div>
        
    )
}

export default Table;