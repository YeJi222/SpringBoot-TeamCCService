package com.service.teamcc.controller;

import com.service.teamcc.data.dto.AdminDTO;
import com.service.teamcc.data.entity.ActivityEntity;
import com.service.teamcc.data.service.ActivityService;
import com.service.teamcc.data.service.AdminService;
import java.util.HashMap;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AdminFuncController {
    private ActivityService activityService;
    @Autowired
    public AdminFuncController(ActivityService activityService){
        this.activityService = activityService;
    }

    @PostMapping(value = "/getActivityList")
    public HashMap<String, Object> getActivity(@RequestParam("userId") String userId){
        HashMap<String, Object> map = new HashMap<>();

//        List<ActivityEntity> activityEntityList = activityService.getActivityList(userId);
//        System.out.println(activityEntityList);


        return map;
    }
}
