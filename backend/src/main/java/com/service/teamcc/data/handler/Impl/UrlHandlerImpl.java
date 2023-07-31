package com.service.teamcc.data.handler.Impl;

import com.service.teamcc.data.dao.ActivityDAO;
import com.service.teamcc.data.dao.UrlDAO;
import com.service.teamcc.data.entity.ActivityEntity;
import com.service.teamcc.data.entity.UrlEntity;
import com.service.teamcc.data.handler.UrlHandler;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UrlHandlerImpl implements UrlHandler {
    UrlDAO urlDAO;

    @Autowired
    public UrlHandlerImpl(UrlDAO urlDAO){
        this.urlDAO = urlDAO;
    }

    @Override
    public List<UrlEntity> getUrlEntityList(String adminId){
        List<UrlEntity> urlEntityList = urlDAO.getUrlEntityList(adminId);

        return urlEntityList;
    }
}
