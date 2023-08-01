import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Toggle from './Toggle';

function TableTitle(props){
    const tableName = props.tableName;
    const tableTitle = props.tableTitle;
    const tableList = props.tableList;
    const btnContent = props.btnContent;

    if(tableList !== undefined){
        var listLen = tableList.length;
        const userStateToggled = props.userStateToggled;
        const setUserStateToggled = props.setUserStateToggled;

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
                            <span className='urlTableBtn'>
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