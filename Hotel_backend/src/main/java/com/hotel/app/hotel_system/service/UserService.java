package com.hotel.app.hotel_system.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.hotel.app.hotel_system.models.entity.Users;
import com.hotel.app.hotel_system.models.repository.UsersRepository;
@Service("UsersService")
public class UserService implements UsersServiceI{

  @Autowired
  @Qualifier("UsersRepository")
  private UsersRepository user_crud;

  public Page<Users> getAllUsuarios(org.springframework.data.domain.Pageable pageable){
    // final PageRequest pageable = PageRequest.of(0,10);
    Page<Users> user = user_crud.findAll(pageable);
    System.out.println(    user.getContent().size()
    );
    System.out.println(    user.getContent().isEmpty()); 

    return user;
  }
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
  
  @Override
  public Users SearchByName(String name) {
    // TODO Auto-generated method stub
    Optional<Users> user = user_crud.findByUsername(name);
    if(user.isPresent()){
      return user.get();
    }
    return new Users();
  }

  @Override
  public void deleteUser(UUID id) {
    // TODO Auto-generated method stub
    user_crud.deleteAll();
  }
  
    
}