package com.service.teamcc.data.repository;

import com.service.teamcc.data.entity.CcEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CcRepository extends JpaRepository<CcEntity, String> {

}