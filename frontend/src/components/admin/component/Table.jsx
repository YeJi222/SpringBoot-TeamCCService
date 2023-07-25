import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Table(props){
    const tableTitle = props.tableTitle;
    
    const activityInsertAction = e => {
        
    }

    return(
        <div>
            <table className='tablePart'>
                <thead>
                    <tr className='tableCSS'>
                        <th className='tableFirstCol th1'>NO.</th>
                        <th className='tableTH, tableSecondCol'>Activity Name</th>
                        <th className='tableTH'>Score</th>
                        <th className='tableTH'>Duplication</th>
                        <th className='tableTH th5'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='tableFirstCol'><div className='idNumberCSS'>1</div></td>
                        <td className='tableTH, tableSecondCol'>한동 한바퀴</td>
                        <td className='tableTH'>1 학점</td>
                        <td className='tableTH'>1회 가능</td>
                        <td className='tableTH'><img className='deleteBtn' src='/assets/adminImage/trashCan.png'></img></td>
                    </tr>
                    <tr>
                        <td className='tableFirstCol'><div className='idNumberCSS'>1</div></td>
                        <td className='tableTH, tableSecondCol'>한동 한바퀴</td>
                        <td className='tableTH'>1 학점</td>
                        <td className='tableTH'>1회 가능</td>
                        <td className='tableTH'><img className='deleteBtn' src='/assets/adminImage/trashCan.png'></img></td>
                    </tr>
                    <tr>
                        <td className='tableFirstCol'><div className='idNumberCSS'>1</div></td>
                        <td className='tableTH, tableSecondCol'>한동 한바퀴</td>
                        <td className='tableTH'>1 학점</td>
                        <td className='tableTH'>1회 가능</td>
                        <td className='tableTH'><img className='deleteBtn' src='/assets/adminImage/trashCan.png'></img></td>
                    </tr>
                    <tr>
                        <td className='tableFirstCol'>+</td>
                        <td className='tableTH, tableSecondCol'><input className='activityInput' style={{width:'40vw'}}  type="text" name="activity" placeholder="ex) 바다 가기" required/></td>
                        <td className='tableTH'><input className='activityInput' style={{width:'12vw'}} type="number" min="1" name="score" placeholder=" 5 " required/></td>
                        <td className='tableTH'><input className='activityInput' style={{width:'17vw'}} type="number" min="1" max="50" name="num" placeholder=" 5 " required/></td>
                        <td className='tableTH'><input className='activityInput' style={{width:'10vw'}} type="submit" value="Add"></input></td>
                    </tr>
                </tbody>
                
                
            </table>
            
        </div>
        
    )
}

export default Table;