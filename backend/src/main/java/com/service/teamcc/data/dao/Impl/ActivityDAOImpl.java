package com.service.teamcc.data.dao.Impl;

import com.service.teamcc.data.dao.ActivityDAO;
import com.service.teamcc.data.dto.ActivityDTO;
import com.service.teamcc.data.entity.ActivityEntity;
import com.service.teamcc.data.entity.UrlEntity;
import com.service.teamcc.data.repository.ActivityRepository;
import com.service.teamcc.data.repository.UrlRepository;
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
    public List<ActivityEntity> getActivityEntityList(String adminId){
        List<ActivityEntity> activityEntityList = activityRepository.findByCompositeKeyAdminIdOrderByScoreDesc(adminId);

        return activityEntityList;
    }

    @Override
    public int deleteActivity(String adminId, String deleteId){
        int result = activityRepository.deleteByCompositeKeyAdminIdAndCompositeKeyActivityId(adminId, deleteId);

        return result;
    }

    @Override
    public int insertActivity(int insertId, String adminId, String activity, String score, String multipleCount){
        int result = activityRepository.insertActivity(insertId, adminId, activity, score, multipleCount);

        return result;
    }
}
