package com.hotel.app.hotel_system.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.hotel.app.hotel_system.exception.RoomNotFoundException;
import com.hotel.app.hotel_system.models.entity.Room;
import com.hotel.app.hotel_system.models.repository.RoomRepository;

@Service("Rservice")
public class RoomService implements Rservice{
  @Autowired
  @Qualifier("Rrepository")
  private RoomRepository crud;

  @Override
  public Room insertarR(Room room) {
    // TODO Auto-generated method stub
    System.out.println(room);
    return crud.save(room);
  }

  @Override
  public List<Room> getRs() {
    // TODO Auto-generated method stub
    return crud.findAll();
  }

  @Override
  public Room searchRoom(Long id) throws RoomNotFoundException{
    // TODO Auto-generated method stub
    Optional<Room> Roptional = crud.findById(id);
    if(Roptional.isPresent()){
      return Roptional.get();
    }
    else{
      throw new RoomNotFoundException("La habitación no ha sido encontrada");
    }
  }

  @Override
  public Room update(Room room) {
    // TODO Auto-generated method stub
    return crud.save(room);
  }

  @Override
  public void delete(Long id) {
    // TODO Auto-generated method stub
    crud.deleteById(id);
  }

  

 
  
    
}