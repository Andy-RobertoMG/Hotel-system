package com.hotel.app.hotel_system.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.hotel.app.hotel_system.models.dao.IRoomDao;
import com.hotel.app.hotel_system.models.dto.RoomDTO;
import com.hotel.app.hotel_system.models.dto.RoomTypeDTO;
import com.hotel.app.hotel_system.models.entity.Room;

@RestController
public class RoomController {
   
   @Autowired
   private  IRoomDao roomDao;

   @GetMapping("/rooms")
   @ResponseStatus(value = HttpStatus.OK)
   public List<RoomDTO> cuentaL(ModelMap model) {
      System.out.println("Funciona hasta aca");
      List<Room> listaHabitaciones = roomDao.findAll();
      // System.out.println(lista.toString());
      // Mapear los datos de Room a RoomDTO
        List<RoomDTO> listaDTO = new ArrayList<>();
        for (Room habitacion : listaHabitaciones) {
            RoomDTO dto = new RoomDTO();
            dto.setId(habitacion.getId());
            dto.setFloor(habitacion.getFloor());
            dto.setRoomtype_id(habitacion.getRoomType2().getId());
            RoomTypeDTO roomtype = new RoomTypeDTO();
            roomtype.setDesc(habitacion.getRoomType2().getDescr());
            roomtype.setId(habitacion.getRoomType2().getId());
            roomtype.setPrice(habitacion.getRoomType2().getPrice());
            roomtype.setTitle(habitacion.getRoomType2().getTitle());
            dto.setRoomtype(roomtype);
            listaDTO.add(dto);
        }
      // model.addAttribute("titulo", "Lista de habitaciones");
      // model.addAttribute("rooms", roomDao.findAll());
      // return lista;
      return listaDTO;
   }
}