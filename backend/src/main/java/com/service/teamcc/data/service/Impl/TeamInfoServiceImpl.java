package com.service.teamcc.data.service.Impl;

import com.service.teamcc.data.dto.AdminDTO;
import com.service.teamcc.data.dto.TeamInfoDTO;
import com.service.teamcc.data.handler.AdminHandler;
import com.service.teamcc.data.handler.TeamInfoHandler;
import com.service.teamcc.data.service.TeamInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeamInfoServiceImpl implements TeamInfoService {
    TeamInfoHandler teamInfoHandler;

    @Autowired
    public TeamInfoServiceImpl(TeamInfoHandler teamInfoHandler){
        this.teamInfoHandler = teamInfoHandler;
    }

    @Override
    public TeamInfoDTO getTeamInfo(String adminId){
        return teamInfoHandler.getTeamInfoEntity(adminId);
    }
}
