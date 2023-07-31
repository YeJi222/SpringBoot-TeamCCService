package com.service.teamcc.data.dao;

import com.service.teamcc.data.entity.UrlEntity;
import java.util.List;

public interface UrlDAO {
    List<UrlEntity> getUrlEntityList(String adminId);
    int deleteUrl(String adminId, String deleteId);
}
