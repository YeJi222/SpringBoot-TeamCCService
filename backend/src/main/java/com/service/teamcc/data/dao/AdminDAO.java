package com.service.teamcc.data.dao;

import com.service.teamcc.data.entity.AdminEntity;

public interface AdminDAO {
    AdminEntity getUser(String userId);
    AdminEntity saveUser(AdminEntity adminEntity);
}
