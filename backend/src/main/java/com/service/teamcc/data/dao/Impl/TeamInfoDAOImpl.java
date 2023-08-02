package com.service.teamcc.data.dao.Impl;

import com.service.teamcc.data.dao.TeamInfoDAO;
import com.service.teamcc.data.entity.AdminEntity;
import com.service.teamcc.data.entity.TeamInfoEntity;
import com.service.teamcc.data.repository.AdminRepository;
import com.service.teamcc.data.repository.TeamInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeamInfoDAOImpl implements TeamInfoDAO {
    TeamInfoRepository teamInfoRepository;

    @Autowired
    public TeamInfoDAOImpl(TeamInfoRepository teamInfoRepository){
        this.teamInfoRepository = teamInfoRepository;
    }

    @Override
    public TeamInfoEntity getTeamInfo(String adminId){
        TeamInfoEntity teamInfoEntity = teamInfoRepository.getReferenceById(adminId);
        return teamInfoEntity;
    }
}
