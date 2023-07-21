package com.service.teamcc.data.dto;

import com.service.teamcc.data.entity.AdminEntity;
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
public class AdminDTO {
    private String id;
    private String password;

    public AdminEntity toEntity(){
        return AdminEntity.builder()
            .id(id)
            .password(password)
            .build();
    }
}
