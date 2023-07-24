import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TextInputBox from './component/TextInputBox';
import Swal from "sweetalert2";
import axios from "axios";

function Register(){
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [checkPw, setCheckPw] = useState("");
    const navigate = useNavigate();

    const registerAction = e => {
        const formData = new FormData();
        formData.append('userId', id);
        formData.append('userPw', pw);

        console.log("userId", id);
        console.log("userPw", pw);
        console.log("checkPw", checkPw);

        if(pw != checkPw){
            let timerInterval;
            Swal.fire({
                title: '올바른 내용을 입력해주세요',
                html: '확인 후, Create 버튼을 눌러주세요 :) ',
                timer: 1000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {}
            })
        } else{
            axios({
                method: "post",
                url: 'http://localhost:8090/signup',
                data: formData
            })
            .then(function(response){
                if(response.data === "signUp success"){
                    // 알림창 띄우고, main 화면으로
                    let timerInterval;
                    Swal.fire({
                        title: '회원가입 완료!',
                        html: '메인 화면으로 이동합니다 :) ',
                        timer: 2000,
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
                            const userData = { userId: id, userPw: pw };
                            localStorage.setItem('user', JSON.stringify(userData));

                            const storedData = localStorage.getItem('user');
                            const sessionData = JSON.parse(storedData);
                            console.log("storedData : ", sessionData);
                            console.log("userId : ", sessionData.userId);
                            console.log("userPw : ", sessionData.userPw);

                            // const stateData = {
                            //     userId: response.data.userId,
                            //     userPw: response.data.userPw
                            // };

                            // console.log("stateData", stateData);

                            navigate('../main');
                        }
                    })
                } else if(response.data === "existing member"){
                    let timerInterval;
                    Swal.fire({
                        title: '이미 등록된 회원입니다',
                        html: '기존의 아이디로 로그인 해주세요 :) ',
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading()
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                        }).then((result) => {
                            if (result.dismiss === Swal.DismissReason.timer) {
                            }
                    })
                }
            })
            .catch(function(error){
                console.log(error);
            })
        }
    }

    const backAction = (e) => {
        window.history.back();
    }

    return(
        <div className='pageImage'>
            <div onClick={backAction}>
                <img className='backArrow' src="/assets/adminImage/backArrow.png"></img>
            </div>
            <div className='registerTitle'>
                <span style={{color:"#717171"}}>REGISTER</span><br></br>
                <span className='spanTitle'>PAGE</span>
            </div>
            <div className="registerPart">
                <TextInputBox
                    inputboxName={"ID"}
                    imgSRC={"/assets/adminImage/idImage.png"}
                    placeholderText={'아이디'}
                    argument={id}
                    setFunc={setId}
                    errorMsg={"이미 존재하는 아이디입니다"}
                />
                <TextInputBox
                    inputboxName={"Password"}
                    imgSRC={"/assets/adminImage/pwImage.png"}
                    placeholderText={'패스워드'}
                    argument={pw}
                    setFunc={setPw}
                    errorMsg={"비밀번호가 일치하지 않습니다"}
                />
                <TextInputBox
                    inputboxName={"Confirm Password"}
                    imgSRC={"/assets/adminImage/pwImage.png"}
                    placeholderText={'패스워드 확인'}
                    argument={checkPw}
                    setFunc={setCheckPw}
                    errorMsg={"비밀번호가 일치하지 않습니다"}
                />
                <div className='registerBtn2' onClick={registerAction}>
                    Create
                </div>
            </div>
        </div>
        
        
    )
}

export default Register;