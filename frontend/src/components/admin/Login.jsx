import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TextInputBox from './component/TextInputBox';
import Swal from "sweetalert2";
import axios from "axios";

function Login(){
    const navigate = useNavigate();
    const [loginId, setLoginId] = useState("");
    const [loginPw, setLoginPw] = useState("");
    const [confirmId, setConfirmId] = useState("yes");
    const [confirmPw, setConfirmPw] = useState("yes");

    const loginAction = e => {
        const formData = new FormData();
        formData.append('userId', loginId);
        formData.append('userPw', loginPw);

        console.log("userId", loginId);
        console.log("userPw", loginPw);

        if(loginId === '' || loginPw === ''){
            let timerInterval;
                Swal.fire({
                    title: '빈칸이 있습니다',
                    html: '입력 후 LOGIN 버튼을 눌러주세요 :)',
                    timer: 1200,
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
                    }
                })
        }

        axios({
            method: "post",
            url: 'http://localhost:8090/login',
            data: formData
        })
        .then(function(response){
            if(response.data.responseData === "login success"){
                setConfirmId("yes");
                setConfirmId("yes");

                // 알림창 띄우고, main 화면으로
                let timerInterval;
                Swal.fire({
                    title: '로그인 완료!',
                    html: '메인 화면으로 이동합니다 :) ',
                    timer: 1500,
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
                        const userData = { userId: loginId, userPw: loginPw };
                        localStorage.setItem('user', JSON.stringify(userData));

                        const storedData = localStorage.getItem('user');
                        const sessionData = JSON.parse(storedData);
                        console.log("storedData : ", sessionData);
                        console.log("userId : ", sessionData.userId);
                        console.log("userPw : ", sessionData.userPw);

                        navigate('../main');
                    }
                })
            } else if(response.data.responseData === "wrong password"){
                console.log(response.data);
                setConfirmPw("no");
                setConfirmId("yes");
            } else if(response.data.responseData === "no-existing member"){
                console.log(response.data);
                setConfirmPw("yes");
                setConfirmId("no");
            }
        })
        .catch(function(error){
            console.log(error);
        })
    }

    const backAction = (e) => {
        window.history.back(); 
    }

    return(
        <div className='pageImage'>
            <div onClick={backAction}>
                <img className='backArrow' src="/assets/adminImage/backArrow.png"></img>
            </div>
            <div className='title'>
                <span style={{color:"#717171"}}>LOGIN</span><br></br>
                <span className='spanTitle'>PAGE</span>
            </div>
            <div className="loginPart">
                <TextInputBox
                    inputboxName={"ID"}
                    imgSRC={"/assets/adminImage/idImage.png"}
                    placeholderText={'아이디'}
                    argument={loginId}
                    setFunc={setLoginId}
                    confirmArgu={confirmId}
                    errorMsg={"아이디를 다시 확인해주세요"}
                />
                <TextInputBox
                    inputboxName={"Password"}
                    imgSRC={"/assets/adminImage/pwImage.png"}
                    placeholderText={'패스워드'}
                    argument={loginPw}
                    setFunc={setLoginPw}
                    confirmArgu={confirmPw}
                    errorMsg={"비밀번호를 다시 확인해주세요"}
                />
                <div className='loginBtn2' onClick={loginAction}>
                    LOGIN
                </div>
            </div>
        </div>
        
        
    )
}

export default Login;