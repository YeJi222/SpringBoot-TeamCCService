package com.service.teamcc.data.entity;

import com.service.teamcc.data.dto.CcDTO;
import com.service.teamcc.data.dto.ColorDTO;
import com.service.teamcc.data.entity.compositeKey.ColorPK;
import jakarta.persistence.EmbeddedId;
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
@Table(name = "Color")
public class ColorEntity {
    @EmbeddedId
    ColorPK compositeKey;
    String color;
    public ColorDTO toDto(){
        return ColorDTO.builder()
            .adminId(compositeKey.getAdminId())
            .score(compositeKey.getScore())
            .color(color)
            .build();
    }
}
