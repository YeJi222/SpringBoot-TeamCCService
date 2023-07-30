package com.service.teamcc.data.entity;

import com.service.teamcc.data.dto.TeamInfoDTO;
import com.service.teamcc.data.dto.UrlDTO;
import com.service.teamcc.data.entity.compositeKey.UrlPK;
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
@Table(name = "Url")
public class UrlEntity {
    @EmbeddedId
    UrlPK compositeKey;
    String url;

    public UrlDTO toDTO(){
        return UrlDTO.builder()
            .adminId(compositeKey.getAdminId())
            .teamNum(compositeKey.getTeamNum())
            .url(url)
            .build();
    }
}
