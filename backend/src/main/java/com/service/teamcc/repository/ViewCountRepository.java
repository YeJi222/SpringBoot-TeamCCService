package com.service.teamcc.repository;

import com.service.teamcc.entity.ViewCountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ViewCountRepository extends JpaRepository<ViewCountEntity, String> {

}
