package com.service.teamcc.data.dto;

import com.service.teamcc.data.entity.ActivityEntity;
import com.service.teamcc.data.entity.compositeKey.ActivityPK;
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
public class ActivityDTO {
    private String id;
    private String adminId;
    private String activity;
    private String score;
    private String activityNum;

    public ActivityEntity toEntity(){
        ActivityPK pk = ActivityPK.builder()
            .id(id)
            .adminId(adminId)
            .build();

        return ActivityEntity.builder()
            .compositeKey(pk)
            .activity(activity)
            .score(score)
            .activityNum(activityNum)
            .build();
    }
}
