package com.hotel.app.hotel_system.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.app.hotel_system.models.dao.IRoomDao;
import com.hotel.app.hotel_system.models.dao.ITypeRoom;
import com.hotel.app.hotel_system.models.dto.RoomTypeDTO;
import com.hotel.app.hotel_system.models.entity.RoomType;

@RestController
public class TypeRoomController {
  @Autowired
  private  ITypeRoom typeroomDao;

  @GetMapping("/typeroom")
  @ResponseStatus(value = HttpStatus.OK)
  public List<RoomTypeDTO> cuentaL(ModelMap model) {
      System.out.println("Funciona hasta aca");
      List<RoomType> listaTypeRooms = typeroomDao.findAll();
      List<RoomTypeDTO> listaDTO = new ArrayList<>();
        for (RoomType habitacion : listaTypeRooms) {
          RoomTypeDTO aux = new RoomTypeDTO();
          aux.setDesc(habitacion.getDescr());
          aux.setId(habitacion.getId());
          aux.setPrice(habitacion.getPrice());
          aux.setTitle(habitacion.getTitle());
          listaDTO.add(aux);
        } 
      // System.out.println(lista.toString());

      // model.addAttribute("titulo", "Lista de habitaciones");
      // model.addAttribute("rooms", roomDao.findAll());
      return listaDTO;
  }
}