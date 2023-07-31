import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import ActivityTable from './ActivityTable';

function Table(props){
    const activityList = props.activityList;
    const setActivityList = props.setActivityList;
    const userId = props.userId;
    const columnList = props.columnList;
    const tableName = props.tableName;
    
    const insertActivityAction = (e) => {
        const activity = document.getElementById('activityInput').value;
        const score = document.getElementById('scoreInput').value;
        const multipleCount = document.getElementById('multipleInput').value;

        const formData = new FormData();
        formData.append('userId', userId);
        formData.append('activity', activity);
        formData.append('score', score);
        formData.append('multipleCount', multipleCount);

        axios({
            method: "post",
            url: 'http://localhost:8090/insertActivity',
            data: formData
        })
        .then(function(response){
            if(response.data.insertResult === 'success'){
                console.log("success");
                setActivityList(response.data.activityList);
            } else{
                console.log("Failed to insert");
            }
            
        })
        .catch(function(error){
            console.log(error);
        })
    }

    if(activityList !== undefined && columnList != undefined){
        return(
            <div>
                <form onSubmit={insertActivityAction}>
                    <table className='tablePart'>
                        <thead>
                            <tr className='tableCSS'>
                                <th className='tableFirstCol th1'>{columnList[0]}</th>
                                <th className='tableTH, tableSecondCol'>{columnList[1]}</th>
                                <th className='tableTH'>{columnList[2]}</th>
                                <th className='tableTH'>{columnList[3]}</th>
                                <th className='tableTH th5'>{columnList[4]}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableName === 'activityTable' ? 
                                <ActivityTable
                                    userId={userId}
                                    activityList={activityList}
                                    setActivityList={setActivityList}
                                />
                                : (<div></div>)
                            }
                            {
                                tableName === 'activityTable' ? (
                                    <tr>
                                        <td className='tableFirstCol'>+</td>
                                            <td className='tableTH, tableSecondCol'><input className='activityInput' style={{width:'40vw'}}  type="text" id="activityInput" placeholder="ex) 바다 가기" required/></td>
                                            <td className='tableTH'><input className='activityInput' style={{width:'12vw'}} type="number" min="1" id="scoreInput" placeholder=" 5 " required/></td>
                                            <td className='tableTH'><input className='activityInput' style={{width:'17vw'}} type="number" min="1" max="50" id="multipleInput" placeholder=" 5 " required/></td>
                                            <td className='tableTH'>
                                                <input type="submit" className='addBtn' style={{width:'10vw'}} value='Add'></input>
                                            </td>
                                    </tr>
                                ) : (
                                    <div></div>
                                )
                            }
                            
                        </tbody>
                    </table>
                </form>
            </div>
            
        )
    }
    

    
}

export default Table;