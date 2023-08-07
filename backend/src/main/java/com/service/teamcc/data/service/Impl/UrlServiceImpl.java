package com.service.teamcc.data.service.Impl;

import com.service.teamcc.data.dto.ActivityDTO;
import com.service.teamcc.data.dto.UrlDTO;
import com.service.teamcc.data.entity.ActivityEntity;
import com.service.teamcc.data.entity.UrlEntity;
import com.service.teamcc.data.handler.ActivityHandler;
import com.service.teamcc.data.handler.UrlHandler;
import com.service.teamcc.data.service.UrlService;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UrlServiceImpl implements UrlService {
    UrlHandler urlHandler;

    @Autowired
    public UrlServiceImpl(UrlHandler urlHandler){
        this.urlHandler = urlHandler;
    }

    public List<UrlDTO> entityToDTO(String adminId){
        List<UrlEntity> urlEntityList = urlHandler.getUrlEntityList(adminId);

        // Entity -> DTO 변환
        List<UrlDTO> urlDTOList =
            urlEntityList.stream().map(UrlEntity::toDTO).toList();

        return urlDTOList;
    }

    @Override
    public List<UrlDTO> getUrlList(String adminId){ // Entity -> DTO 변환
        List<UrlDTO> urlDTOList = entityToDTO(adminId);

        return urlDTOList;
    }

    public int dbCheckID(String adminId){
        List<UrlDTO> urlDTOList = entityToDTO(adminId);
        List<Integer> urlPrevID = new ArrayList<>();

        for(int i = 0 ; i < urlDTOList.size() ; i++){
            urlPrevID.add(Integer.parseInt(urlDTOList.get(i).getTeamNum()));
        }
        Collections.sort(urlPrevID); // 오름차순 정렬

        int smallestEmptyId = 1;

        for(int prevId : urlPrevID){
            if(prevId == smallestEmptyId){
                smallestEmptyId++;
            } else{
                break;
            }
        }

        return smallestEmptyId;
    }

    @Override
    public int addUrl(String adminId){
        int insertId = dbCheckID(adminId);
        System.out.println("insertId : " + insertId);
        int result = urlHandler.addUrl(insertId, adminId);

        return result;
    }

    @Override
    public int deleteUrl(String adminId, String deleteId){
        int result = urlHandler.deleteUrl(adminId, deleteId);
        return result;
    }
}
