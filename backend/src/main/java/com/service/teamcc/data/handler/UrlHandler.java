package com.service.teamcc.data.handler;

import com.service.teamcc.data.entity.ActivityEntity;
import com.service.teamcc.data.entity.UrlEntity;
import java.util.List;

public interface UrlHandler {
    List<UrlEntity> getUrlEntityList(String adminId);
}
