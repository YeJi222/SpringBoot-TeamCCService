package com.service.teamcc.data.entity;

import com.service.teamcc.data.dto.DeveloperDTO;
import com.service.teamcc.data.dto.ViewCountDTO;
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
@Table(name = "ViewCount")
public class ViewCountEntity {
    @Id
    String id;
    String count;
    String year;
    String month;
    String day;

    public ViewCountDTO toDTO(){
        return ViewCountDTO.builder()
            .id(id)
            .count(count)
            .year(year)
            .month(month)
            .day(day)
            .build();
    }
}
