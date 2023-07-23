package com.service.teamcc.data.handler;

import com.service.teamcc.data.dto.AdminDTO;

public interface AdminHandler {
    AdminDTO getAdminEntity(String userId);
    AdminDTO saveAdminEntity(String userId, String userPw);
}
