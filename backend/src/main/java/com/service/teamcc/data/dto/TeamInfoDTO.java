package com.service.teamcc.data.dto;

import com.service.teamcc.data.entity.DeveloperEntity;
import com.service.teamcc.data.entity.TeamInfoEntity;
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
public class TeamInfoDTO {
    private String adminId;
    private String title;
    private String num;
    private String backgroundImage;
    private String backgroundMimetype;
    private String state;

    public TeamInfoEntity toEntity(){
        return TeamInfoEntity.builder()
            .adminId(adminId)
            .title(title)
            .num(num)
            .backgroundImage(backgroundImage)
            .backgroundMimetype(backgroundMimetype)
            .state(state)
            .build();
    }
}
