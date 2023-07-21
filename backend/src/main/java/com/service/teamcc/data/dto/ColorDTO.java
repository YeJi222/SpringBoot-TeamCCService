package com.service.teamcc.data.dto;

import com.service.teamcc.data.entity.CcEntity;
import com.service.teamcc.data.entity.ColorEntity;
import com.service.teamcc.data.entity.compositeKey.CcPK;
import com.service.teamcc.data.entity.compositeKey.ColorPK;
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
public class ColorDTO {
    private String adminId;
    private String score;
    private String color;

    public ColorEntity toEntity(){
        ColorPK pk = ColorPK.builder()
            .adminId(adminId)
            .score(score)
            .build();

        return ColorEntity.builder()
            .compositeKey(pk)
            .color(color)
            .build();
    }
}
