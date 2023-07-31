package com.service.teamcc.data.dao;

import com.service.teamcc.data.entity.ActivityEntity;
import java.util.List;

public interface ActivityDAO {
    List<ActivityEntity> getActivityEntityList(String adminId);
    int deleteActivity(String adminId, String deleteId);
    int insertActivity(int insertId, String adminId, String activity, String score, String multipleCount);
}
