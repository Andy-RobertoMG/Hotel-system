package com.hotel.app.hotel_system.security.controller;

import org.apache.catalina.connector.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.app.hotel_system.security.RegisterRequest;
import com.hotel.app.hotel_system.security.jwt.JwtAuthenticationFilter;
import com.hotel.app.hotel_system.security.service.AuthService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
  private final AuthService authService;
  @PostMapping(value = "login")
  public String login(){
    return "L";

  }
  @PostMapping(value = "/register")
  public ResponseEntity<String> register(@RequestBody RegisterRequest request,HttpServletResponse response) throws Exception{
    
    Cookie cookie =new Cookie(JwtAuthenticationFilter.COOKIE_NAME,authService.register(request));
    cookie.setHttpOnly(true);
    cookie.setSecure(false);
    cookie.setMaxAge(30 * 24 * 60 * 60);
    // cookie.setDomain("http://localhost:5173/");
    cookie.setPath("/");
    response.addCookie(cookie);
    // response.setHeader("Set-Cookie", String.format("%s; %s", cookie.toString(), "SameSite=None"));
    return ResponseEntity.ok("funciona");
     

  }
  @GetMapping("/logout")
  public ResponseEntity<String> logout(HttpServletRequest request, HttpServletResponse response) {
      // Elimina la cookie de autenticación (si estás usando cookies)
      Cookie cookie = new Cookie("auth_by_cookie", null);
      cookie.setMaxAge(0);
      cookie.setPath("/");
      response.addCookie(cookie);

      // Limpia el contexto de seguridad
      SecurityContextHolder.clearContext();

      return ResponseEntity.ok("Logout successful");
  }
}