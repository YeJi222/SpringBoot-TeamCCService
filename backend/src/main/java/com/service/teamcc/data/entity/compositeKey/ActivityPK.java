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
public class ActivityPK implements Serializable {
    @Column(name = "id")
    String id;
    @Column(name = "adminId")
    String adminId;

    public String getId() {
        return id;
    }

    public String getAdminId() {
        return adminId;
    }
}
