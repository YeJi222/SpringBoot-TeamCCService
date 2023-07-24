package com.service.teamcc.controller;

import com.service.teamcc.data.dto.AdminDTO;
import com.service.teamcc.data.service.AdminService;
import java.util.HashMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AdminInfoController {
    private AdminService adminService;
    @Autowired
    public AdminInfoController(AdminService adminService){
        this.adminService = adminService;
    }

    @PostMapping(value = "/signup")
    public String signupAction(@RequestParam("userId") String userId, @RequestParam("userPw") String userPw){
        System.out.println("userId : " + userId);
        System.out.println("userPw: " + userPw);

        try{ // 이미 등록된 회원인 경우,
            AdminDTO adminInfo = adminService.getUser(userId);
            System.out.println(adminInfo);

            return "existing member";
        } catch (Exception e){ // 등록된 회원 정보가 아닐 경우, sign up
            adminService.saveUser(userId, userPw);

            return "signUp success";
        }
    }

    @PostMapping(value = "/login")
    public HashMap<String, Object> loginAction(
        @RequestParam("userId") String userId, @RequestParam("userPw") String userPw){
        HashMap<String, Object> map = new HashMap<>();

        // System.out.println("userId : " + userId);
        // System.out.println("userPw: " + userPw);

        try{ // userId가 등록된 회원인 경우
            AdminDTO adminInfo = adminService.getUser(userId);
            // System.out.println(userInfo);

            if(adminInfo.getPassword().equals(userPw)){ // 비밀번호 확인
                map.put("responseData", "login success");
                map.put("userId", adminInfo.getId());
                map.put("userPw", adminInfo.getPassword());
            } else{
                map.put("responseData", "wrong password");
            }
            System.out.println(map);
            return map;
        } catch (Exception e){ // 등록된 회원 정보가 아닐 경우, 로그인 실패
            map.put("responseData", "no-existing member");

            return map;
        }
    }
}
