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
            const sessionUserId = sessionData.userId;
            const formData = new FormData();
            formData.append('userId', sessionUserId);

            axios({
                method: "post",
                url: 'http://localhost:8090/getActivityList',
                data: formData
            })
            .then(function(response){
                console.log(response.data.activityList);
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
                    <TableTitle
                        tableTitle="TeamCC Activity"
                    />
                    <Table
                        activityList={activityList}
                    />
                    
                    <TableTitle
                        tableTitle="Sharing URL Link"
                    />
                    <Table
                        activityList={activityList}
                    />
                    
                    <TableTitle
                        tableTitle="Information"
                    />
                    <Table
                        activityList={activityList}
                    />
                    
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Main;