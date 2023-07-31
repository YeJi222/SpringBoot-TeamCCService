package com.service.teamcc.data.repository;

import com.service.teamcc.data.entity.ActivityEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityRepository extends JpaRepository<ActivityEntity, String> {

    List<ActivityEntity> findByCompositeKeyAdminId(String adminId);
    int deleteByCompositeKeyAdminIdAndCompositeKeyActivityId(String adminId, String deleteId);

    @Modifying
    @Query(value = "INSERT INTO activity(activity_id, admin_id, activity, score, multiple_count) values (:insertId, :adminId, :activity, :score, :multipleCount)", nativeQuery = true)
    int insertActivity(@Param("insertId") int insertId, @Param("adminId") String adminId,
        @Param("activity") String activity,
        @Param("score") String score, @Param("multipleCount") String multipleCount);
}
