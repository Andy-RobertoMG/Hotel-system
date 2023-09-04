package com.hotel.app.hotel_system.service;

import java.util.List;
import java.util.UUID;

import com.hotel.app.hotel_system.models.entity.Users;

public interface UsersServiceI {
  List<Users> getAllUsers();
  Users createUser(Users user);
  Users SearchById(UUID id);
  Users SearchByName(String name);
}