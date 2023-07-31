package com.service.teamcc.data.repository;

import com.service.teamcc.data.entity.UrlEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UrlRepository extends JpaRepository<UrlEntity, String> {
    List<UrlEntity> findByCompositeKeyAdminId(String adminId);
}
