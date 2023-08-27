package com.hotel.app.hotel_system.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.hotel.app.hotel_system.models.entity.Rol;
import com.hotel.app.hotel_system.models.repository.RolRepository;

@Service("RolService")
public class RolService implements RolServiceI {
  @Autowired
  @Qualifier("rolRepository")
  private RolRepository crud_Rol;

  @Override
  public List<Rol> getAllRol() {
    // TODO Auto-generated method stub
    return crud_Rol.findAll();
  }

  @Override
  public Rol createRol(Rol rol) {
    // TODO Auto-generated method stub
    return crud_Rol.save(rol);
  }

  @Override
  public Rol SearchById(UUID id) {
    // TODO Auto-generated method stub
    Optional<Rol> objeto = crud_Rol.findById(id);
    if(objeto.isPresent()){
      return objeto.get();
    }
    throw new UnsupportedOperationException("Unimplemented method 'SearchById'");
  }

  
  


}