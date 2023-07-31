package com.service.teamcc.data.service.Impl;

import com.service.teamcc.data.dto.ActivityDTO;
import com.service.teamcc.data.dto.UrlDTO;
import com.service.teamcc.data.entity.ActivityEntity;
import com.service.teamcc.data.entity.UrlEntity;
import com.service.teamcc.data.handler.ActivityHandler;
import com.service.teamcc.data.handler.UrlHandler;
import com.service.teamcc.data.service.UrlService;
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

    @Override
    public int deleteUrl(String adminId, String deleteId){
        int result = urlHandler.deleteUrl(adminId, deleteId);
        return result;
    }
}
