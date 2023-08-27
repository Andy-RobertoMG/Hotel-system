package com.hotel.app.hotel_system.models.repository;

import java.io.Serializable;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hotel.app.hotel_system.models.entity.RoomType;

@Repository("RTrepository")
public interface RoomtypeRepository extends JpaRepository<RoomType,UUID>{
  
}