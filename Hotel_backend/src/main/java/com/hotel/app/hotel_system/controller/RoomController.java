package com.hotel.app.hotel_system.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.hotel.app.hotel_system.exception.RoomNotFoundException;
import com.hotel.app.hotel_system.exception.RoomTypeNotFoundException;
import com.hotel.app.hotel_system.helper.Message;
// import com.hotel.app.hotel_system.models.dao.IRoomDao_deprecated;
import com.hotel.app.hotel_system.models.dto.RoomDTO;
import com.hotel.app.hotel_system.models.dto.RoomTypeDTO;
import com.hotel.app.hotel_system.models.entity.Room;
import com.hotel.app.hotel_system.models.entity.RoomType;
import com.hotel.app.hotel_system.service.RTservice;
import com.hotel.app.hotel_system.service.Rservice;

import jakarta.websocket.server.PathParam;

@RestController
public class RoomController {
   
   // @Autowired
   // private  IRoomDao_deprecated roomDao;

   // @GetMapping("/rooms")
   // @ResponseStatus(value = HttpStatus.OK)
   // public List<RoomDTO> cuentaL(ModelMap model) {
   //    System.out.println("Funciona hasta aca");
   //    List<Room> listaHabitaciones = roomDao.findAll();
   //    // System.out.println(lista.toString());
   //    // Mapear los datos de Room a RoomDTO
   //      List<RoomDTO> listaDTO = new ArrayList<>();
   //      for (Room habitacion : listaHabitaciones) {
   //          RoomDTO dto = new RoomDTO();
   //          dto.setId(habitacion.getId());
   //          dto.setFloor(habitacion.getFloor());
   //          dto.setRoomtype_id(habitacion.getRoomType2().getId());
   //          RoomTypeDTO roomtype = new RoomTypeDTO();
   //          roomtype.setDesc(habitacion.getRoomType2().getDescr());
   //          roomtype.setId(habitacion.getRoomType2().getId());
   //          roomtype.setPrice(habitacion.getRoomType2().getPrice());
   //          roomtype.setTitle(habitacion.getRoomType2().getTitle());
   //          dto.setRoomtype(roomtype);
   //          listaDTO.add(dto);
   //      }
   //    // model.addAttribute("titulo", "Lista de habitaciones");
   //    // model.addAttribute("rooms", roomDao.findAll());
   //    // return lista;
   //    return listaDTO;
   // }
   @Autowired
   @Qualifier("Rservice")
   private Rservice r_service;

   @Autowired
   @Qualifier("RTservice")
   private RTservice rt_service;

   @PreAuthorize("hasAnyRole('NUEVO')")
   @GetMapping("/rooms")
   @ResponseStatus(value = HttpStatus.OK)
   public List<RoomDTO> FindAll(){
      List<Room> listaRooms = r_service.getRs();
      List<RoomDTO> listaDTO = new ArrayList<RoomDTO>();
      for(Room habitacion: listaRooms){
         RoomDTO aux = new RoomDTO(habitacion);
         listaDTO.add(aux);
      }
      return listaDTO;
   }

   // @GetMapping("/rooms_test")
   // @ResponseStatus(value = HttpStatus.OK)
   // public Page<Room> findAllRoom(){
      // r_service.getAllRooms();
   // }

   // @RequestMapping(value = "/rooms",method = RequestMethod.POST)
   @PostMapping("/rooms")
   public ResponseEntity<RoomDTO> create(@RequestBody RoomDTO room) throws RoomTypeNotFoundException{
      Message message = new Message("Se ha editado exitosamente");
      Room auxiliar= new Room();
      auxiliar.setFloor(room.getFloor());
      auxiliar.setId(room.getId());
      
      RoomType aux = rt_service.searchRoomType(room.getRoomtype_id());
      auxiliar.setRoomType2(aux);
      r_service.insertarR(auxiliar);

      return new ResponseEntity<RoomDTO>(room, HttpStatus.OK);
   }
   @RequestMapping(value = "/rooms/{id}", method = RequestMethod.PUT)
   public ResponseEntity<Message> edit(@RequestBody RoomDTO room, @PathVariable Long id) throws RoomTypeNotFoundException, RoomNotFoundException{
      Message message = new Message("Se ha editado exitosamente");
      
      Room busqueda =r_service.searchRoom(id);
      busqueda.setFloor(room.getFloor());
      busqueda.setId(room.getId());
      RoomType aux = rt_service.searchRoomType(room.getRoomtype_id());
      busqueda.setRoomType2(aux);
      System.out.println("Habitacion:");
      System.out.println(room);
      // System.out.println(busqueda);
      r_service.insertarR(busqueda);
      return new ResponseEntity<Message>(message, HttpStatus.OK);
   }
   @RequestMapping(value = "/rooms/{id}", method = RequestMethod.DELETE)
   public ResponseEntity<Message> delete(@PathVariable Long id)
   {
      Message message = new Message("Se ha eliminado exitosamente");
      r_service.delete(id);
      return new ResponseEntity<Message>(message,HttpStatus.OK);
   }
   @RequestMapping(value = "/rooms/{id}",method = RequestMethod.GET)
   public RoomDTO SearchById(@PathVariable Long id) throws RoomNotFoundException
   {
      Room aux = r_service.searchRoom(id);
      RoomDTO encontrado = new RoomDTO(aux);
      
      return encontrado;
   }
}

