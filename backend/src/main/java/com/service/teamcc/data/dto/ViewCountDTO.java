package com.service.teamcc.data.dto;

import com.service.teamcc.data.entity.TeamInfoEntity;
import com.service.teamcc.data.entity.ViewCountEntity;
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
public class ViewCountDTO {
    private String id;
    private String count;
    private String year;
    private String month;
    private String day;

    public ViewCountEntity toEntity(){
        return ViewCountEntity.builder()
            .id(id)
            .count(count)
            .year(year)
            .month(month)
            .day(day)
            .build();
    }
}
