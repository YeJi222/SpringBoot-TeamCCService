package com.service.teamcc.data.handler;

import com.service.teamcc.data.entity.ActivityEntity;
import java.util.List;

public interface ActivityHandler {
    List<ActivityEntity> getActivityEntityList(String adminId);
}
