package com.service.teamcc.data.entity;

import com.service.teamcc.data.dto.ActivityDTO;
import com.service.teamcc.data.dto.CcDTO;
import com.service.teamcc.data.entity.compositeKey.CcPK;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Table(name = "Cc")
public class CcEntity {
    @EmbeddedId
    CcPK compositeKey;
    String image;
    String size;
    String mimetype;

    public CcDTO toDTO(){
        return CcDTO.builder()
            .adminId(compositeKey.getAdminId())
            .teamNum(compositeKey.getTeamNum())
            .activityId(compositeKey.getActivityId())
            .activityIdx(compositeKey.getActivityIdx())
            .image(image)
            .size(size)
            .mimetype(mimetype)
            .build();
    }
}
