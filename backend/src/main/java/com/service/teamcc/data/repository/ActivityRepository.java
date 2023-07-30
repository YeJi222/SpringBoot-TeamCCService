package com.service.teamcc.data.repository;

import com.service.teamcc.data.entity.ActivityEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRepository extends JpaRepository<ActivityEntity, String> {

    List<ActivityEntity> findByCompositeKeyAdminId(String adminId);
}
