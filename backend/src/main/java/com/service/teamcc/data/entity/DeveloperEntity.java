package com.service.teamcc.data.entity;

import com.service.teamcc.data.dto.AdminDTO;
import com.service.teamcc.data.dto.DeveloperDTO;
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
@Table(name = "Developer")
public class DeveloperEntity {
    @Id
    String id;
    String password;

    public DeveloperDTO toDto(){
        return DeveloperDTO.builder()
            .id(id)
            .password(password)
            .build();
    }
}
