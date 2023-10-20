package com.hotel.app.hotel_system.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.domain.jaxb.SpringDataJaxb.PageRequestDto;
import org.springframework.data.jpa.support.PageableUtils;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.app.hotel_system.helper.Message;
import com.hotel.app.hotel_system.models.dto.UsersDTO;
import com.hotel.app.hotel_system.models.entity.Users;
import com.hotel.app.hotel_system.service.RolService;
import com.hotel.app.hotel_system.service.UserService;

import jakarta.validation.Valid;

@RestController
public class UsersController {
  @Autowired
  @Qualifier("UsersService")
  private UserService userService;

  @Autowired
  @Qualifier("RolService")
  private RolService rolService;

  @GetMapping("/userse")
  public Page<Users> getAllUsers(@PageableDefault(page = 0,size = 10,sort = "username", direction = Sort.Direction.DESC) org.springframework.data.domain.Pageable pageable){
    // Sort valor =Sort.unsorted();
    // final PageRequest pageable = PageRequest.of(0, 10);

    return userService.getAllUsuarios(pageable);
  }
  @GetMapping("/users")
  public List<UsersDTO> getUsers(){
    List<Users> List_user =userService.getAllUsers(); 
    List<UsersDTO> List_UserDTO = new ArrayList<UsersDTO>();
    for(Users user: List_user){
      UsersDTO aux = new UsersDTO();
      aux.setId(user.getId());
      aux.setName(user.getUsername());
      aux.setEmail(user.getEmail());
      aux.setPass(user.getPassword());
      aux.setPhone_number(user.getPhoneNumber());
      aux.setRol_id(user.getRol_id().getId());
      List_UserDTO.add(aux);
    }
    return List_UserDTO;
  }
  @RequestMapping(value = "/users",method = RequestMethod.POST)
  public String saveUser(@RequestBody @Valid UsersDTO user){
    // userService.createUser(user);
    System.out.println(user);
    Users user_data = new Users(
    user.getName(),user.getPhone_number(),user.getEmail(),user.getPass(),rolService.SearchById(user.getRol_id())
    );
    userService.createUser(user_data);
    return "Funciona";
  }
  @DeleteMapping("/users/{id}")
  public Message deleteUser(@PathVariable UUID id){
    userService.deleteUser(id);
    return new Message("Deleted user");
  }

  @RequestMapping(value="/users/{id}")
  public UsersDTO getUser(@PathVariable UUID id){
    System.out.println(id);
    Users aux = userService.SearchById(id);
    System.out.println("Id:"+aux.getId());
    UsersDTO userDTO = new UsersDTO(aux);
    return userDTO;

  }
}