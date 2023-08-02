package com.service.teamcc.data.handler;

import com.service.teamcc.data.dto.TeamInfoDTO;

public interface TeamInfoHandler {
    TeamInfoDTO getTeamInfoEntity(String adminId);
}
