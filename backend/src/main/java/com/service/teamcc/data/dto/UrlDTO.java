package com.service.teamcc.data.dto;

import com.service.teamcc.data.entity.ColorEntity;
import com.service.teamcc.data.entity.UrlEntity;
import com.service.teamcc.data.entity.compositeKey.ColorPK;
import com.service.teamcc.data.entity.compositeKey.UrlPK;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class UrlDTO {
    private String adminId;
    private String teamNum;
    private String url;

    public UrlEntity toEntity(){
        UrlPK pk = UrlPK.builder()
            .adminId(adminId)
            .teamNum(teamNum)
            .build();

        return UrlEntity.builder()
            .compositeKey(pk)
            .url(url)
            .build();
    }
}
