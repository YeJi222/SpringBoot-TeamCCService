import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function TableTitle(props){
    const tableName = props.tableName;
    const tableTitle = props.tableTitle;
    const tableList = props.tableList;

    if(tableList !== undefined){
        var listLen = tableList.length;

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

                <div className='secondCol'>
                    View Credit Card Image
                </div>

                {/* <div className='thirdCol'>
                    Create Activity
                </div> */}
            </div>
            
        )
    }
}

export default TableTitle;