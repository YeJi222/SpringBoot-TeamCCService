package com.service.teamcc.data.repository;

import com.service.teamcc.data.entity.DeveloperEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeveloperRepository extends JpaRepository<DeveloperEntity, String> {

}
