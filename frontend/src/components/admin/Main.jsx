import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TableTitle from './component/TableTitle';
import Table from './component/Table';
import HeaderImage from '../HeaderImage';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Swal from "sweetalert2";
import axios from "axios";

function Main(){
    const navigate = useNavigate();

    const [activityList, setActivityList] = useState();

    const storedData = localStorage.getItem('user');
    const sessionData = JSON.parse(storedData);
    const userId = sessionData.userId;

    const activityColumn = ['NO.', 'Activity Name', 'Score', 'Duplication', 'Delete'];
    const sharingUrlColumn = ['NO.', 'Link', 'Delete', 'Copy Link', 'Sharing'];

    useEffect(() => {
        if(sessionData === null){
            let timerInterval;
            Swal.fire({
                title: '세션 정보가 없습니다!',
                html: '다시 로그인해주세요 :) ',
                timer: 1300,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    navigate('/login');
                }
            })
        } else{
            const formData = new FormData();
            formData.append('userId', userId);

            axios({
                method: "post",
                url: 'http://localhost:8090/getActivityList',
                data: formData
            })
            .then(function(response){
                // console.log(response.data.activityList);
                setActivityList(response.data.activityList);
                // setGroupInfo(response.data);
                // console.log("group Info", groupInfo);
            })
            .catch(function(error){
                console.log(error);
            })
        }
    }, [])

    return(
        <div>
            <NavBar/>
            <HeaderImage/>
            <div className='middleContainer'>
                <div className='tableWrapper'>
                    {/* Activity Table Part */}
                    <TableTitle
                        tableTitle="TeamCC Activity"
                        activityList={activityList}
                    />
                    <Table
                        tableName="activityTable"
                        userId={userId}
                        columnList={activityColumn}
                        activityList={activityList}
                        setActivityList={setActivityList}
                    />
                    
                    {/* URL Link Table Part */}
                    <TableTitle
                        tableTitle="Sharing URL Link"
                        activityList={activityList}
                    />
                    <Table
                        tableName="urlTable"
                        userId={userId}
                        columnList={sharingUrlColumn}
                        activityList={activityList}
                        setActivityList={setActivityList}
                    />
                    
                    {/* Information Part */}
                    <TableTitle
                        tableTitle="Information"
                        activityList={activityList}
                    />
                    <Table
                        userId={userId}
                        activityList={activityList}
                        setActivityList={setActivityList}
                    />
                    
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Main;