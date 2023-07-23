package com.service.teamcc.data.handler.Impl;

import com.service.teamcc.data.dao.AdminDAO;
import com.service.teamcc.data.dto.AdminDTO;
import com.service.teamcc.data.entity.AdminEntity;
import com.service.teamcc.data.handler.AdminHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AdminHandlerImpl implements AdminHandler {
    AdminDAO adminDAO;

    @Autowired
    public AdminHandlerImpl(AdminDAO adminDAO){
        this.adminDAO = adminDAO;
    }

    @Override
    public AdminDTO getAdminEntity(String userId){
        AdminEntity adminEntity = adminDAO.getUser(userId);
        AdminDTO admin = new AdminDTO(adminEntity.getId(), adminEntity.getPassword());
        return admin;
    }

    @Override
    public AdminDTO saveAdminEntity(String userId, String userPw){
        AdminEntity adminEntity = new AdminEntity(userId, userPw);
        adminEntity = adminDAO.saveUser(adminEntity);
        AdminDTO admin = new AdminDTO(adminEntity.getId(), adminEntity.getPassword());

        return admin;
    }
}
