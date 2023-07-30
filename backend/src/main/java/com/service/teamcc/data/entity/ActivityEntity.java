package com.service.teamcc.data.entity;

import com.service.teamcc.data.dto.ActivityDTO;
import com.service.teamcc.data.entity.compositeKey.ActivityPK;
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
@Table(name = "Activity")
public class ActivityEntity {
    @EmbeddedId
    ActivityPK compositeKey;
    String activity;
    String score;
    String multipleCount;

    public ActivityDTO toDTO(){
        return ActivityDTO.builder()
            .activityId(compositeKey.getActivityId())
            .adminId(compositeKey.getAdminId())
            .activity(activity)
            .score(score)
            .multipleCount(multipleCount)
            .build();
    }
}
