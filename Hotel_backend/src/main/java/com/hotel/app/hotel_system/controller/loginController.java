package com.hotel.app.hotel_system.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.app.hotel_system.models.dto.UsersDTO;
import com.hotel.app.hotel_system.service.UserService;

import jakarta.validation.Valid;

@RestController
public class loginController {
  @Autowired 
  @Qualifier("UsersService")
  private UserService userService;

  @RequestMapping(value="/auth/login",method = RequestMethod.PATCH)
  public String login(@RequestBody @Valid UsersDTO user){
    System.out.println(user);
    return "funciona";
  }
}