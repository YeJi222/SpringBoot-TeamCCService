package com.service.teamcc.data.service.Impl;

import com.service.teamcc.data.entity.ActivityEntity;
import com.service.teamcc.data.handler.ActivityHandler;
import com.service.teamcc.data.service.ActivityService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActivityServiceImpl implements ActivityService {
    ActivityHandler activityHandler;

    @Autowired
    public ActivityServiceImpl(ActivityHandler activityHandler){
        this.activityHandler = activityHandler;
    }

    @Override
    public List<ActivityEntity> getActivityList(String userId){
        return activityHandler.getActivityEntityList(userId);
    }

}
