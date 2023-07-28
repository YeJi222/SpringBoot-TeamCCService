package com.service.teamcc.data.handler.Impl;

import com.service.teamcc.data.dao.ActivityDAO;
import com.service.teamcc.data.dao.AdminDAO;
import com.service.teamcc.data.dto.ActivityDTO;
import com.service.teamcc.data.dto.AdminDTO;
import com.service.teamcc.data.entity.ActivityEntity;
import com.service.teamcc.data.entity.AdminEntity;
import com.service.teamcc.data.handler.ActivityHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ActivityHandlerImpl implements ActivityHandler {
    ActivityDAO activityDAO;

    @Autowired
    public ActivityHandlerImpl(ActivityDAO activityDAO){
        this.activityDAO = activityDAO;
    }

    @Override
    public ActivityDTO getActivityEntity(String userId){
        ActivityEntity activityEntity = activityDAO.getActivity(userId);
        ActivityDTO activity = new ActivityDTO(activityEntity.getActivity());

        return activity;
    }
}
