package com.service.teamcc.data.entity;

import com.service.teamcc.data.dto.ActivityDTO;
import com.service.teamcc.data.dto.AdminDTO;
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
@Table(name = "Admin")
public class AdminEntity {
    @Id
    String id;
    String password;

    public AdminDTO toDto(){
        return AdminDTO.builder()
            .id(id)
            .password(password)
            .build();
    }
}
