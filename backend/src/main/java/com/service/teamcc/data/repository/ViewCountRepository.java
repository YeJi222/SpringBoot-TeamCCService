package com.service.teamcc.data.repository;

import com.service.teamcc.data.entity.ViewCountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ViewCountRepository extends JpaRepository<ViewCountEntity, String> {

}
