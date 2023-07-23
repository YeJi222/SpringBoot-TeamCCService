package com.service.teamcc.data.dao.Impl;

import com.service.teamcc.data.dao.AdminDAO;
import com.service.teamcc.data.entity.AdminEntity;
import com.service.teamcc.data.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminDAOImpl implements AdminDAO {
    AdminRepository adminRepository;

    @Autowired
    public AdminDAOImpl(AdminRepository adminRepository){
        this.adminRepository = adminRepository;
    }

    @Override
    public AdminEntity getUser(String userId){
        AdminEntity adminEntity = adminRepository.getReferenceById(userId);
        return adminEntity;
    }

    @Override
    public AdminEntity saveUser(AdminEntity adminEntity){
        adminRepository.save(adminEntity);
        return adminEntity;
    }
}
