package com.service.teamcc.entity;

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
@Table(name = "Cc")
public class CcEntity {
    @Id
    String adminId;
    String teamNum;
    String activityId;
    String image;
    String size;
    String mimetype;
    String activityIdx;
}
