package com.service.teamcc.data.dao.Impl;

import com.service.teamcc.data.dao.UrlDAO;
import com.service.teamcc.data.entity.UrlEntity;
import com.service.teamcc.data.repository.ActivityRepository;
import com.service.teamcc.data.repository.UrlRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UrlDAOImpl implements UrlDAO {
    UrlRepository urlRepository;

    @Autowired
    public UrlDAOImpl(UrlRepository urlRepository){
        this.urlRepository = urlRepository;
    }
    @Override
    public List<UrlEntity> getUrlEntityList(String adminId){
        List<UrlEntity> urlEntityList = urlRepository.findByCompositeKeyAdminId(adminId);

        return urlEntityList;
    }
}
