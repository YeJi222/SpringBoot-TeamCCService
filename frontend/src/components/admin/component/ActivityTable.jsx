import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function ActivityTable(props){
    const activityList = props.activityList;
    const setActivityList = props.setActivityList;
    const userId = props.userId;

    const deleteActivityAction = (e) => {
        const deleteId = e;
        // console.log("deleteId", deleteId);

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

        return activitiyRows
    }
}

export default ActivityTable;