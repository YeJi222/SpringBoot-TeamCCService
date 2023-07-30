package com.service.teamcc.data.entity.compositeKey;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class CcPK implements Serializable {
    @Column(name = "adminId", length = 250)
    String adminId;
    @Column(name = "teamNum", length = 200)
    String teamNum;
    @Column(name = "activityId", length = 100)
    String activityId;
    @Column(name = "activityIdx", length = 100)
    String activityIdx;

    public String getAdminId() {
        return adminId;
    }
    public String getTeamNum() {
        return teamNum;
    }
    public String getActivityId() {
        return activityId;
    }
    public String getActivityIdx() {
        return activityIdx;
    }
}
