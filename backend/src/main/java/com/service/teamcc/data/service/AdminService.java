package com.service.teamcc.data.service;

import com.service.teamcc.data.dto.AdminDTO;

public interface AdminService {
    AdminDTO getUser(String userId);
    AdminDTO saveUser(String userId, String userPw);
}
