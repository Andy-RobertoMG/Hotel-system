package com.hotel.app.hotel_system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.app.hotel_system.models.entity.Rol;
import com.hotel.app.hotel_system.service.RolService;

@RestController
public class RolController {
  @Autowired
  @Qualifier("RolService")
  private RolService rol_service;

  @GetMapping("/rol")
  @ResponseStatus(value=HttpStatus.OK)
  public List<Rol> getListRol()
  {
    return rol_service.getAllRol();  
  }
  @PostMapping("/rol")
  public String create(@RequestBody Rol rol){
    rol_service.createRol(rol);
    return "Funciono";

  }
}