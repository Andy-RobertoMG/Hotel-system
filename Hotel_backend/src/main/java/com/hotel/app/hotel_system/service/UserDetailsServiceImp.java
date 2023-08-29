package com.hotel.app.hotel_system.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.hotel.app.hotel_system.models.dto.UsersDTO;
import com.hotel.app.hotel_system.models.entity.Users;
import com.souldev.security.security.entities.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImp implements UserDetailsService {

  private final UserService userService;

    @Autowired
    public UserDetailsServiceImp(UserService userService) {
        this.userService = userService;
    }
    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException{
        UsersDTO user = new UsersDTO(userService.SearchById(null));
        return MainUser.build(user);
    }
}