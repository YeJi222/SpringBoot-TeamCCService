package com.service.teamcc.data.dao;

import com.service.teamcc.data.entity.ActivityEntity;
import java.util.List;

public interface ActivityDAO {
    List<ActivityEntity> getActivityEntityList(String adminId);
}
