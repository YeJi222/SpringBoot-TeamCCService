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

    const [userStateToggled, setUserStateToggled] = useState("yes");

    const [activityList, setActivityList] = useState();
    const [urlList, setUrlList] = useState();

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
                setActivityList(response.data.activityList);
            })
            .catch(function(error){
                console.log(error);
            })

            axios({
                method: "post",
                url: 'http://localhost:8090/getUrlList',
                data: formData
            })
            .then(function(response){
                setUrlList(response.data.urlList);
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
                        tableName="activityTable"
                        tableTitle="TeamCC Activity"
                        tableList={activityList}
                        btnContent={'View Credit Card Image'}
                    />
                    <Table
                        tableName="activityTable"
                        userId={userId}
                        columnList={activityColumn}
                        tableList={activityList}
                        setTableList={setActivityList}
                    />
                    
                    {/* URL Link Table Part */}
                    <TableTitle
                        tableName="urlTable"
                        tableTitle="Sharing URL Link"
                        tableList={urlList}
                        btnContent={'Add CC Team(URL)'}
                        userStateToggled={userStateToggled}
                        setUserStateToggled={setUserStateToggled}
                    />
                    <Table
                        tableName="urlTable"
                        userId={userId}
                        columnList={sharingUrlColumn}
                        tableList={urlList}
                        setTableList={setUrlList}
                    />
                    
                    {/* Information Part */}
                    <div className='tableTitle'>
                        Information
                    </div>

                    
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Main;