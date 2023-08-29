package com.hotel.app.hotel_system.controller;

import java.time.Duration;
import java.time.temporal.ChronoUnit;
import java.util.UUID;

import org.apache.catalina.connector.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.app.hotel_system.models.dto.UsersDTO;
import com.hotel.app.hotel_system.segurity.CookieAuthenticationFilter;
import com.hotel.app.hotel_system.service.AuthenticationService;
import com.hotel.app.hotel_system.service.UserService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
  private final UserService userService;
  private final AuthenticationService authenticationService;
  public AuthenticationController(UserService userService, AuthenticationService authenticationService){
    this.userService = userService;
    this.authenticationService = authenticationService;
  }
  @PostMapping("/login")
  public ResponseEntity<UsersDTO> signIn(@AuthenticationPrincipal UsersDTO usersDTO,HttpServletResponse response){
    usersDTO = new UsersDTO(UUID.fromString("be7909b3-2194-40d0-8c3a-9f828138146a"), "encodedMasterPassword", 0, "encodedMasterPassword", "encodedMasterPassword",UUID.fromString("be7909b3-2194-40d0-8c3a-9f828138146a"));
    Cookie cookie =new Cookie(CookieAuthenticationFilter.COOKIE_NAME,authenticationService.createToken(usersDTO));
    cookie.setHttpOnly(true);
    cookie.setSecure(false);
    cookie.setMaxAge(30 * 24 * 60 * 60);
    // cookie.setDomain("http://localhost:5173/");
    cookie.setPath("/");
    response.addCookie(cookie);
    // response.setHeader("Set-Cookie", String.format("%s; %s", cookie.toString(), "SameSite=None"));
    return ResponseEntity.ok(usersDTO);
  }
  // @PostMapping("/signUp")
  // public ResponseEntity<UsersDTO> signUp(@RequestBody @Valid SignUpto user){

  // }
}