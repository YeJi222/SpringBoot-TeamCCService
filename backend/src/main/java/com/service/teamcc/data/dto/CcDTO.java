package com.service.teamcc.data.dto;

import com.service.teamcc.data.entity.ActivityEntity;
import com.service.teamcc.data.entity.CcEntity;
import com.service.teamcc.data.entity.compositeKey.ActivityPK;
import com.service.teamcc.data.entity.compositeKey.CcPK;
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
public class CcDTO {
    private String adminId;
    private String teamNum;
    private String activityId;
    private String image;
    private String size;
    private String mimetype;
    private String activityIdx;

    public CcEntity toEntity(){
        CcPK pk = CcPK.builder()
            .adminId(adminId)
            .teamNum(teamNum)
            .activityId(activityId)
            .activityIdx(activityIdx)
            .build();

        return CcEntity.builder()
            .compositeKey(pk)
            .image(image)
            .size(size)
            .mimetype(mimetype)
            .build();
    }
}
