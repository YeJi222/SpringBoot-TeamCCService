import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Table(props){
    const activityList = props.activityList;
    const setActivityList = props.setActivityList;
    const userId = props.userId;
    
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

    const deleteActivityAction = (e) => {
        const deleteId = e;
        console.log("deleteId", deleteId);

        const formData = new FormData();
        formData.append('userId', userId);
        formData.append('deleteId', deleteId);

        axios({
            method: "post",
            url: 'http://localhost:8090/deleteActivity',
            data: formData
        })
        .then(function(response){
            // console.log(response.data.deleteResult);
            if(response.data.deleteResult === 'success'){
                setActivityList(response.data.activityList);
            } else{
                console.log("Failed to delete");
            }
            
        })
        .catch(function(error){
            console.log(error);
        })
    }

    if(activityList !== undefined){
        const activitiyRows = activityList.map((activity, idx) => {
            return(
                <tr key={idx}>
                    <td className='tableFirstCol'><div className='idNumberCSS'>{idx+1}</div></td>
                    <td className='tableTH, tableSecondCol'>{activity.activity}</td>
                    <td className='tableTH'>{activity.score} 학점</td>
                    <td className='tableTH'>{activity.multipleCount}회 가능</td>
                    <td className='tableTH'>
                        <img className='deleteBtn' 
                            src='/assets/adminImage/trashCan.png'
                            // 익명함수를 사용하지 않으면 이벤트 핸들러가 즉시 실행되어 버림
                            onClick={() => deleteActivityAction(activity.activityId)} 
                        ></img>
                    </td>
                </tr>
            );
        });

        return(
            <div>
                <form onSubmit={insertActivityAction}>
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
                            {activitiyRows}
                            <tr>
                                <td className='tableFirstCol'>+</td>
                                
                                    <td className='tableTH, tableSecondCol'><input className='activityInput' style={{width:'40vw'}}  type="text" id="activityInput" placeholder="ex) 바다 가기" required/></td>
                                    <td className='tableTH'><input className='activityInput' style={{width:'12vw'}} type="number" min="1" id="scoreInput" placeholder=" 5 " required/></td>
                                    <td className='tableTH'><input className='activityInput' style={{width:'17vw'}} type="number" min="1" max="50" id="multipleInput" placeholder=" 5 " required/></td>
                                    <td className='tableTH'>
                                        <input type="submit" className='addBtn' style={{width:'10vw'}}
                                            // onClick={() => insertActivityAction} 
                                            value='Add'
                                        ></input>
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            
        )
    }
    

    
}

export default Table;