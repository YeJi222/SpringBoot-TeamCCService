package com.service.teamcc.data.dao.Impl;

import com.service.teamcc.data.dao.ActivityDAO;
import com.service.teamcc.data.entity.ActivityEntity;
import com.service.teamcc.data.repository.ActivityRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActivityDAOImpl implements ActivityDAO {
    ActivityRepository activityRepository;

    @Autowired
    public ActivityDAOImpl(ActivityRepository activityRepository){
        this.activityRepository = activityRepository;
    }
    @Override
    public List<ActivityEntity> getActivityEntityList(String userId){
        List<ActivityEntity> activityEntityList = (List<ActivityEntity>) activityRepository.getReferenceById(userId);

        return activityEntityList;
    }
}
