package com.service.teamcc.data.dao;

import com.service.teamcc.data.entity.TeamInfoEntity;

public interface TeamInfoDAO {
    TeamInfoEntity getTeamInfo(String adminId);
}
