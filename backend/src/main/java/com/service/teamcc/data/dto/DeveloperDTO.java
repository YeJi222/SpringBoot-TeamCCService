package com.service.teamcc.data.dto;

import com.service.teamcc.data.entity.AdminEntity;
import com.service.teamcc.data.entity.DeveloperEntity;
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
public class DeveloperDTO {
    private String id;
    private String password;

    public DeveloperEntity toEntity(){
        return DeveloperEntity.builder()
            .id(id)
            .password(password)
            .build();
    }
}
