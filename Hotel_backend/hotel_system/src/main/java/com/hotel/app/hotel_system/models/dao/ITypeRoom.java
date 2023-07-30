package com.hotel.app.hotel_system.models.dao;

import java.util.List;

import com.hotel.app.hotel_system.models.entity.RoomType;

public interface ITypeRoom {
    public List<RoomType> findAll();
}