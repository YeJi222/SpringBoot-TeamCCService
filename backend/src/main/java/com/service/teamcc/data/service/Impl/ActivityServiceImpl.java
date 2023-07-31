package com.service.teamcc.data.service.Impl;

import com.service.teamcc.data.dao.ActivityDAO;
import com.service.teamcc.data.dto.ActivityDTO;
import com.service.teamcc.data.entity.ActivityEntity;
import com.service.teamcc.data.handler.ActivityHandler;
import com.service.teamcc.data.service.ActivityService;
import java.util.ArrayList;
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

    public List<ActivityDTO> entityToDTO(String adminId){
        List<ActivityEntity> activityEntityList = activityHandler.getActivityEntityList(adminId);

        // Entity -> DTO 변환
        List<ActivityDTO> activityDTOList =
            activityEntityList.stream().map(ActivityEntity::toDTO).toList();

        return activityDTOList;
    }

    @Override
    public List<ActivityDTO> getActivityList(String adminId){ // Entity -> DTO 변환
        List<ActivityDTO> activityDTOList = entityToDTO(adminId);

        return activityDTOList;
    }

    @Override
    public int deleteActivity(String adminId, String deleteId){
        int result = activityHandler.deleteActivity(adminId, deleteId);
        return result;
    }

    public void dbCheckID(String adminId){
        List<ActivityDTO> activityDTOList = entityToDTO(adminId);
        List<Integer> activityPrevID = new ArrayList<>();

        for(int i = 0 ; i < activityDTOList.size() ; i++){
            activityPrevID.add(activityDTOList.get(i).getActivityId());
        }
        System.out.println(activityPrevID);

        for(int i = 0 ; i < activityPrevID.size() ; i++){
            
        }
    }

    @Override
    public int insertActivity(String adminId, String activity, String score, String multipleCount){
        dbCheckID(adminId);
        int result = activityHandler.insertActivity(adminId, activity, score, multipleCount);

        return result;
    }
}
