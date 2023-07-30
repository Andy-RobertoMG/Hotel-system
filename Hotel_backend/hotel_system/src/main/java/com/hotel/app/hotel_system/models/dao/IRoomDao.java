package com.hotel.app.hotel_system.models.dao;

import java.util.List;

import com.hotel.app.hotel_system.models.entity.Room;



public interface IRoomDao {
    public List<Room> findAll();
    
}