package com.hotel.app.hotel_system.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.management.relation.RoleInfoNotFoundException;

import com.hotel.app.hotel_system.exception.RoomTypeNotFoundException;
import com.hotel.app.hotel_system.models.entity.RoomType;

public interface RTservice {
  Boolean insertarRT(RoomType roomType);
  List<RoomType> getRts();
  RoomType searchRoomType(UUID id) throws RoomTypeNotFoundException;  
  void delete(UUID id); 
}