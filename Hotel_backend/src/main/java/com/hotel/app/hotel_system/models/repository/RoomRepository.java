package com.hotel.app.hotel_system.models.repository;
import com.hotel.app.hotel_system.models.entity.Room;

import java.io.Serializable;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
@Repository("Rrepository")
// @EnableJpaRepositories
public interface RoomRepository extends JpaRepository<Room,Long>{
  // @Query("SELECT CASE WHEN COUNT(th) > 0 THEN true ELSE false END FROM room th WHERE th.room.roomtype_id = :roomtype_id")
  // boolean existsByroomType2(UUID roomtype_id);
    @Query("SELECT CASE WHEN COUNT(r) > 0 THEN true ELSE false END FROM Room r WHERE r.roomType2.id = :id_tr")
    boolean existsByroomType2(UUID id_tr);
}