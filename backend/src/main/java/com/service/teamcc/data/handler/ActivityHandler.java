package com.service.teamcc.data.handler;

import com.service.teamcc.data.entity.ActivityEntity;
import java.util.List;

public interface ActivityHandler {
    List<ActivityEntity> getActivityEntityList(String adminId);
    int deleteActivity(String adminId, String deleteId);
    int insertActivity(String adminId, String activity, String score, String multipleCount);
}
