package com.hotel.app.hotel_system.models.repository;
import com.hotel.app.hotel_system.models.entity.Room;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository("Rrepository")
public interface RoomRepository extends JpaRepository<Room,Long>{
    
}