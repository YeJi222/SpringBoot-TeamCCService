package com.service.teamcc.data.service.Impl;

import com.service.teamcc.data.dao.ActivityDAO;
import com.service.teamcc.data.dto.ActivityDTO;
import com.service.teamcc.data.entity.ActivityEntity;
import com.service.teamcc.data.handler.ActivityHandler;
import com.service.teamcc.data.service.ActivityService;
import java.util.List;
import java.util.stream.Collectors;
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
    public List<ActivityDTO> getActivityList(String adminId){
        List<ActivityEntity> activityEntityList = activityHandler.getActivityEntityList(adminId);

        // Entity -> DTO 변환
        List<ActivityDTO> activityDTOList =
            activityEntityList.stream().map(ActivityEntity::toDTO).toList();

        // System.out.println("activityDTOList : " + activityDTOList);

        return activityDTOList;
    }

    @Override
    public int deleteActivity(String adminId, String deleteId){
        int result = activityHandler.deleteActivity(adminId, deleteId);
        return result;
    }

}
