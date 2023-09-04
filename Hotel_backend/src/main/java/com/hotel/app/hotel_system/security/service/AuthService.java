package com.hotel.app.hotel_system.security.service;

import java.util.Optional;
import java.util.UUID;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hotel.app.hotel_system.models.entity.Rol;
import com.hotel.app.hotel_system.models.entity.Users;
import com.hotel.app.hotel_system.models.repository.RolRepository;
import com.hotel.app.hotel_system.models.repository.UsersRepository;
import com.hotel.app.hotel_system.security.LoginRequest;
import com.hotel.app.hotel_system.security.RegisterRequest;
import com.hotel.app.hotel_system.security.entity.AuthResponse;
import com.hotel.app.hotel_system.security.jwt.JwtAuthenticationFilter;
import com.hotel.app.hotel_system.service.UserService;

import jakarta.servlet.http.Cookie;
@Service
public class AuthService {
  private final RolRepository rolRepository;
  private final UsersRepository usersRepository;
  private final JwtService jwtService;
  private final UserService userService;
  private final PasswordEncoder passwordEncoder;
  public Cookie login(LoginRequest request){
    UserDetails user = userService.SearchByName(request.getUsername());
    String token = jwtService.getToken(user);
    Cookie cookie = new Cookie(JwtAuthenticationFilter.COOKIE_NAME, token);
    cookie.setHttpOnly(true);
    cookie.setSecure(false);
    cookie.setMaxAge(30 * 24 * 60 * 60);
    // cookie.setDomain("http://localhost:5173/");
    cookie.setPath("/");
    return cookie;
  }
  public AuthService(RolRepository rolRepository,UsersRepository usersRepository,JwtService jwtService,PasswordEncoder passwordEncoder,UserService userService){
    this.rolRepository = rolRepository;
    this.userService = userService;
    this.usersRepository = usersRepository;
    this.jwtService = jwtService;
    this.passwordEncoder = passwordEncoder;
  }
  public String register(RegisterRequest request) throws Exception{
    Optional<Rol> rol = rolRepository.findById(UUID.fromString("b0725745-33f3-46e7-99ed-a58f9771caa4"));
    // System.out.println(rol.get().getName());
    if(rol.isPresent()){
      Users user = new Users(request.getUsername(), request.getPhone_number(), request.getEmail(), passwordEncoder.encode(request.getPassword()),rol.get());
      usersRepository.save(user);
      String Token =jwtService.getToken(user); 
      System.out.println(Token);
      return  Token;
    }
    throw new Exception("No se encotro el rol");
  }
}