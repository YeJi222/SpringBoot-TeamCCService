package com.service.teamcc.data.handler.Impl;

import com.service.teamcc.data.dao.ActivityDAO;
import com.service.teamcc.data.dao.AdminDAO;
import com.service.teamcc.data.dao.TeamInfoDAO;
import com.service.teamcc.data.dto.AdminDTO;
import com.service.teamcc.data.dto.TeamInfoDTO;
import com.service.teamcc.data.entity.ActivityEntity;
import com.service.teamcc.data.entity.AdminEntity;
import com.service.teamcc.data.entity.TeamInfoEntity;
import com.service.teamcc.data.handler.TeamInfoHandler;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class TeamInfoHandlerImpl implements TeamInfoHandler {
    TeamInfoDAO teamInfoDAO;

    @Autowired
    public TeamInfoHandlerImpl(TeamInfoDAO teamInfoDAO){
        this.teamInfoDAO = teamInfoDAO;
    }

    @Override
    public TeamInfoDTO getTeamInfoEntity(String adminId){
        TeamInfoEntity teamInfoEntity = teamInfoDAO.getTeamInfo(adminId);
        TeamInfoDTO teamInfo = new TeamInfoDTO(teamInfoEntity.getAdminId(), teamInfoEntity.getBackgroundImage(),
            teamInfoEntity.getBackgroundMimetype(), teamInfoEntity.getNum(), teamInfoEntity.getState(),
            teamInfoEntity.getTitle());
        return teamInfo;
    }
}
