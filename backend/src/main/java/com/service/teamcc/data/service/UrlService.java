package com.service.teamcc.data.service;

import com.service.teamcc.data.dto.ActivityDTO;
import com.service.teamcc.data.dto.UrlDTO;
import java.util.List;

public interface UrlService {
    List<UrlDTO> getUrlList(String adminId);
}
