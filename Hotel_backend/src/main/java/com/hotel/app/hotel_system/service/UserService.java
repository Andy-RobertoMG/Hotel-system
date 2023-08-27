package com.hotel.app.hotel_system.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.hotel.app.hotel_system.models.entity.Users;
import com.hotel.app.hotel_system.models.repository.UsersRepository;
@Service("UsersService")
public class UserService implements UsersServiceI{

  @Autowired
  @Qualifier("UsersRepository")
  private UsersRepository user_crud;

  @Override
  public List<Users> getAllUsers() {
    // TODO Auto-generated method stub
    return user_crud.findAll();
  }

  @Override
  public Users createUser(Users user) {
    // TODO Auto-generated method stub
    return user_crud.save(user);
  }

  @Override
  public Users SearchById(UUID id) {
    Optional<Users> user= user_crud.findById(id);
    if(user.isPresent()){
      System.out.println("saca");
      return user.get();
    }
    else{
      System.out.println("no saca");
      return new Users();
    }
  }
  
    
}