package com.service.teamcc.data.service;

import com.service.teamcc.data.dto.TeamInfoDTO;

public interface TeamInfoService {
    TeamInfoDTO getTeamInfo(String adminId);
}
