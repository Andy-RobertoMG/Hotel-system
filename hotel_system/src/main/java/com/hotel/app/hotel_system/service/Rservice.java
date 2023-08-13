package com.hotel.app.hotel_system.service;

import java.util.List;

import com.hotel.app.hotel_system.exception.RoomNotFoundException;
import com.hotel.app.hotel_system.models.entity.Room;

public interface Rservice {
  Room insertarR(Room room);
  List<Room> getRs();
  Room searchRoom(Long id) throws RoomNotFoundException;
  Room update(Room room);
  void delete(Long id);
  
}