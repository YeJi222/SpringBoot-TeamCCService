package com.service.teamcc.data.service;

import com.service.teamcc.data.entity.ActivityEntity;
import java.util.List;

public interface ActivityService {
    List<ActivityEntity> getActivityList(String userId);
}
