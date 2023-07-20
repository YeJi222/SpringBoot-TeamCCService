package com.service.teamcc.data.repository;

import com.service.teamcc.data.entity.DeveloperEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeveloperRepository extends JpaRepository<DeveloperEntity, String> {

}
