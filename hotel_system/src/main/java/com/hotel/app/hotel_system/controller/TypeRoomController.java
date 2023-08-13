package com.hotel.app.hotel_system.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.naming.Binding;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.support.SessionStatus;

import com.hotel.app.hotel_system.exception.RoomTypeNotFoundException;
import com.hotel.app.hotel_system.helper.Message;
// import com.hotel.app.hotel_system.models.dao.IRoomDao_deprecated;
// import com.hotel.app.hotel_system.models.dao.ITypeRoomDao_deprecated;
import com.hotel.app.hotel_system.models.dto.RoomTypeDTO;
// import com.hotel.app.hotel_system.models.dto.RoomTypeRecibeDTO;
import com.hotel.app.hotel_system.models.entity.RoomType;
import com.hotel.app.hotel_system.service.RTservice;

import ch.qos.logback.core.model.Model;
import jakarta.validation.Valid;
// import jakarta.validation.Valid;
@RestController 
public class TypeRoomController {
  // @Autowired
  // private  ITypeRoomDao_deprecated typeroomDao;

  @Autowired
  @Qualifier("RTservice")
  private RTservice rt_service;

  @GetMapping("/typeroom")
  @ResponseStatus(value = HttpStatus.OK)
  public List<RoomTypeDTO> cuentaL(ModelMap model) {
      // System.out.println("Funciona hasta aca");
      // List<RoomType> listaTypeRooms = typeroomDao.findAll();
      List<RoomType> listaTypeRooms = rt_service.getRts();
      List<RoomTypeDTO> listaDTO = new ArrayList<>();
        for (RoomType habitacion : listaTypeRooms) {
          RoomTypeDTO aux = new RoomTypeDTO();
          aux.setDescr(habitacion.getDescr());
          aux.setId(habitacion.getId());
          aux.setPrice(habitacion.getPrice());
          aux.setTitle(habitacion.getTitle());
          // System.out.println(habitacion.getRoom());
          listaDTO.add(aux);
        } 
      // System.out.println(lista.toString());

      // model.addAttribute("titulo", "Lista de habitaciones");
      // model.addAttribute("rooms", roomDao.findAll());
      return listaDTO;
  }
  // @RequestMapping("/")
  // public String crear(){

  // }
    @RequestMapping(value= "/typeroom", method=RequestMethod.POST)
    public ResponseEntity<Message> guardar(@RequestBody @Valid RoomType roomtype)
    {
     
    //   if (result.hasErrors()) {
    //     // Si hay errores de validación, puedes devolver un mensaje de error o los detalles de los errores.
    //     // new ResponseEntity<Message>(new Message("ADS"),HttpStatus.BAD_REQUEST);

    // }
      // RoomType aux = new RoomType(roomtype.getTitle(), roomtype.getPrice(), roomtype.getDescr());
      Boolean objeto =  rt_service.insertarRT(roomtype);
      Message message = new Message("La habitación se ha creado exitosamente");
      return new ResponseEntity<Message>(message, HttpStatus.OK);
      // typeroomDao.save(roomtype);

      // return "23213";
    }
    @RequestMapping(value= "/typeroom/{id}" , method=RequestMethod.GET)
    public RoomTypeDTO findById(@PathVariable UUID id)  throws RoomTypeNotFoundException{
        // System.out.println(id);
        // UUID ID = UUID.fromString(id);
        // RoomType RT = rt_service.searchRoomType(ID);
        RoomType RT = rt_service.searchRoomType(id);
        RoomTypeDTO aux = new RoomTypeDTO(RT);
        return aux;
    }
   @DeleteMapping("/typeroom/{id}")
   public ResponseEntity<Message> delete(@PathVariable UUID id)
   {
      Message message = new Message("Se ha eliminado exitosamente");
      rt_service.delete(id);
      return new ResponseEntity<Message>(message,HttpStatus.OK);
   }
   @RequestMapping(value ="/typeroom/{id}",method =RequestMethod.PUT )
   public ResponseEntity<Message> update(@RequestBody RoomType roomtype, @PathVariable UUID id) throws RoomTypeNotFoundException{
    RoomType RT = rt_service.searchRoomType(id);
    Boolean pass = rt_service.insertarRT(roomtype);
    if(pass){
      Message message = new Message("El objeto se ha modificado");
      return new ResponseEntity<Message>(message,HttpStatus.OK);
    }
      Message message = new Message("El objeto no de ha modificado exitosamente");
      return new ResponseEntity<Message>(message,HttpStatus.OK);
   }
}