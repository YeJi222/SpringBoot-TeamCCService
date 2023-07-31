package com.service.teamcc.data.handler.Impl;

import com.service.teamcc.data.dao.ActivityDAO;
import com.service.teamcc.data.entity.ActivityEntity;
import com.service.teamcc.data.handler.ActivityHandler;
import java.util.List;
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
    public List<ActivityEntity> getActivityEntityList(String adminId){
        List<ActivityEntity> activityEntityList = activityDAO.getActivityEntityList(adminId);

        return activityEntityList;
    }

    @Override
    public int deleteActivity(String adminId, String deleteId){
        int result = activityDAO.deleteActivity(adminId, deleteId);

        return result;
    }

    @Override
    public int insertActivity(String adminId, String activity, String score, String multipleCount){
        int result = activityDAO.insertActivity(adminId, activity, score, multipleCount);

        return result;
    }
}
