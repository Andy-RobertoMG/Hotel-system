package com.hotel.app.hotel_system.service;

import java.util.List;
import java.util.UUID;

import com.hotel.app.hotel_system.models.entity.Rol;
public interface RolServiceI {
  List<Rol> getAllRol();
  Rol createRol(Rol rol);
  Rol SearchById(UUID id);
}