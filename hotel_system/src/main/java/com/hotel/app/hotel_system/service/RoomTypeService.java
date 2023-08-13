package com.hotel.app.hotel_system.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import com.hotel.app.hotel_system.exception.RoomTypeNotFoundException;
// import com.hotel.app.hotel_system.models.dao.TypeRoomImp_deprecated;
import com.hotel.app.hotel_system.models.dto.RoomTypeCreateDTO;
import com.hotel.app.hotel_system.models.entity.RoomType;
import com.hotel.app.hotel_system.models.repository.RoomtypeRepository;

import jakarta.validation.Valid;

@Service("RTservice")

public class RoomTypeService implements RTservice {
  @Autowired
  @Qualifier("RTrepository")
  private RoomtypeRepository crud;
  @Override
  public Boolean insertarRT( RoomType roomType) {
    
    crud.save(roomType);
    return true;
  }

  @Override
  public List<RoomType> getRts() {
     return crud.findAll();
  }

  @Override
  public RoomType searchRoomType(UUID id) throws RoomTypeNotFoundException {
      
      Optional<RoomType> RToptional = crud.findById(id);
      if(RToptional.isPresent()){
        return RToptional.get();
      }
      else {
        throw new RoomTypeNotFoundException("Tipo de habitacion no encotrada");
      }

  }

  @Override
  public void delete(UUID id) {
    // TODO Auto-generated method stub
    crud.deleteById(id);
  }
  

  // @Autowired
  // private TypeRoomImp_deprecated repository;

  // public RoomType save(RoomTypeCreateDTO RTRequest){
  //   RoomType typeroom = new  RoomType(
  //     RTRequest.getTitle(),
  //     RTRequest.getPrice(),
  //     RTRequest.getDescr()
  //   );
  //   // return repository.save(typeroom);
    

  // }
}