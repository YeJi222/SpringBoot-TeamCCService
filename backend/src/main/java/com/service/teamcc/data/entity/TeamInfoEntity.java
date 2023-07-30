package com.service.teamcc.data.entity;

import com.service.teamcc.data.dto.ColorDTO;
import com.service.teamcc.data.dto.TeamInfoDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
@Table(name = "TeamInfo")
public class TeamInfoEntity {
    @Id
    String adminId;
    String title;
    String num;
    String backgroundImage;
    String backgroundMimetype;
    String state;

    public TeamInfoDTO toDTO(){
        return TeamInfoDTO.builder()
            .adminId(adminId)
            .title(title)
            .num(num)
            .backgroundImage(backgroundImage)
            .backgroundMimetype(backgroundMimetype)
            .state(state)
            .build();
    }
}
