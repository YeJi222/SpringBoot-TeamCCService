package com.service.teamcc.data.service;

import com.service.teamcc.data.dto.ActivityDTO;
import com.service.teamcc.data.entity.ActivityEntity;
import java.util.List;

public interface ActivityService {
    List<ActivityDTO> getActivityList(String adminId);
    int deleteActivity(String adminId, String deleteId);
    int insertActivity(String adminId, String activity, String score, String multipleCount);
}
