import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function TableRows(props){
    const tableName = props.tableName;
    const tableList = props.tableList;
    const setTableList = props.setTableList;
    const userId = props.userId;

    const deleteAction = (deleteContent, deleteId) => {
        const formData = new FormData();
        formData.append('userId', userId);
        formData.append('deleteId', deleteId);

        if(deleteContent === 'activityDelete'){ // activity delete
            axios({
                method: "post",
                url: 'http://localhost:8090/deleteActivity',
                data: formData
            })
            .then(function(response){
                // console.log(response.data.deleteResult);
                if(response.data.deleteResult === 'success'){
                    setTableList(response.data.activityList);
                } else{
                    console.log("Failed to delete");
                }
            })
            .catch(function(error){
                console.log(error);
            })
        } else{ // url delete
            axios({
                method: "post",
                url: 'http://localhost:8090/deleteUrl',
                data: formData
            })
            .then(function(response){
                // console.log(response.data.deleteResult);
                if(response.data.deleteResult === 'success'){
                    setTableList(response.data.urlList);
                } else{
                    console.log("Failed to delete");
                }
            })
            .catch(function(error){
                console.log(error);
            })
        }
    }

    if(tableList !== undefined){
        var rows = '';
        if(tableName === 'activityTable'){
            rows = tableList.map((activity, idx) => {
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
                                onClick={() => deleteAction('activityDelete', activity.activityId)} 
                            ></img>
                        </td>
                    </tr>
                );
            });
        } else{
            rows = tableList.map((url, idx) => {
                return(
                    <tr key={idx}>
                        <td className='tableFirstCol'><div className='idNumberCSS'>{idx+1}</div></td>
                        <td className='tableTH, tableSecondCol, urlCSS'>{url.url}</td>
                        <td className='tableTH'>
                            <img className='deleteBtn' 
                                src='/assets/adminImage/trashCan.png'
                                onClick={() => deleteAction('urlDelete', url.teamNum)} 
                            ></img>
                        </td>
                        <td className='tableTH'>
                            <img className='linkBtn' 
                                src='/assets/adminImage/linkIcon.png'
                                // onClick={() => deleteAction('urlDelete', url.teamNum)} 
                            ></img>
                        </td>
                        <td className='tableTH'>
                        <img className='sharingBtn' 
                                src='/assets/adminImage/kakaoIcon.png'
                                // onClick={() => deleteAction('urlDelete', url.teamNum)} 
                            ></img>
                        </td>
                    </tr>
                );
            });
        }

        return rows;
    }
}

export default TableRows;