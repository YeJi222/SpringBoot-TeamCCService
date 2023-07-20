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
public class ColorPK implements Serializable {
    @Column(name = "adminId")
    String adminId;
    @Column(name = "score")
    String score;

    public String getAdminId() {
        return adminId;
    }
    public String getScore() {
        return score;
    }
}
