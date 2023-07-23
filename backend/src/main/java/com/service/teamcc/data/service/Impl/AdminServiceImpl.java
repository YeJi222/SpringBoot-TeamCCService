package com.service.teamcc.data.service.Impl;

import com.service.teamcc.data.dto.AdminDTO;
import com.service.teamcc.data.handler.AdminHandler;
import com.service.teamcc.data.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {
    AdminHandler adminHandler;

    @Autowired
    public AdminServiceImpl(AdminHandler adminHandler){
        this.adminHandler = adminHandler;
    }

    @Override
    public AdminDTO getUser(String userId){
        return adminHandler.getAdminEntity(userId);
    }

    @Override
    public AdminDTO saveUser(String userId, String userPw){
        return adminHandler.saveAdminEntity(userId, userPw);
    }
}
