import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Toggle from './Toggle';
import Swal from "sweetalert2";
import axios from "axios";

function TableTitle(props){
    const tableName = props.tableName;
    const tableTitle = props.tableTitle;
    const tableList = props.tableList;
    const btnContent = props.btnContent;
    const userId = props.userId;

    if(tableList !== undefined){
        var listLen = tableList.length;
        const userStateToggled = props.userStateToggled;
        const setUserStateToggled = props.setUserStateToggled;

        const addTeamAction = (e) => {
            console.log('add team');

            const formData = new FormData();
            formData.append('userId', userId);

            axios({
                method: "post",
                url: 'http://localhost:8090/addTeam',
                data: formData
            })
            .then(function(response){
                if(response.data.addTeamResult === 'success'){
                    console.log("success");
                    // setTableList(response.data.tableList);
                } else{
                    console.log("Failed to insert");
                }
                
            })
            .catch(function(error){
                console.log(error);
            })
        }

        return(
            <div className='gridContainer'>
                <div className='firstCol'>
                    <div className='tableTitle'>
                        {tableTitle}
                    </div>
                    {
                        tableName === 'activityTable' ? (
                            <div className='tableSubTitle'>
                                Total {listLen} activities
                            </div>
                        ) : (
                            <div className='tableSubTitle'>
                                Total {listLen} teams
                            </div>
                        )
                    }
                    
                </div>

                {
                    tableName === 'activityTable' ?
                        <div className='activitytTableBtn'>
                            {btnContent}
                        </div>
                    :
                        <div className='toggleAndBtnArea'>
                            {/* member state toggle btn */}
                            <Toggle
                                userStateToggled={userStateToggled}
                                setUserStateToggled={setUserStateToggled}
                            />
                            <span className='urlTableBtn' onClick={addTeamAction}>
                                {btnContent}
                            </span>
                        </div>  
                        
                }
                

                {/* <div className='thirdCol'>
                    Create Activity
                </div> */}
            </div>
            
        )
    }
}

export default TableTitle;