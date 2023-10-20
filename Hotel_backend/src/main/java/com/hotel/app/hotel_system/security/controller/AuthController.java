package com.hotel.app.hotel_system.security.controller;

import java.util.Optional;
import java.util.stream.Stream;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.app.hotel_system.helper.Message;
import com.hotel.app.hotel_system.models.entity.Users;
import com.hotel.app.hotel_system.security.LoginRequest;
import com.hotel.app.hotel_system.security.RegisterRequest;
import com.hotel.app.hotel_system.security.entity.AuthResponse;
import com.hotel.app.hotel_system.security.helper.MessageAuthenticate;
import com.hotel.app.hotel_system.security.jwt.JwtAuthenticationFilter;
import com.hotel.app.hotel_system.security.service.AuthService;
import com.hotel.app.hotel_system.security.service.JwtService;
import com.hotel.app.hotel_system.service.UserService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
  // private final UserService userService;
  private final AuthService authService;
  private final AuthenticationManager authenticationManager;
  private final JwtService jwtService;
  @PostMapping(value = "/login")
  public MessageAuthenticate login(@RequestBody LoginRequest request,HttpServletResponse response){
    System.out.println(request.getUsername());
    System.out.println(request.getPassword());
    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(),request.getPassword()));
    response.addCookie(authService.login(request));
    return new MessageAuthenticate("Autorizado", true);
    // return new AuthResponse(token);
    // return "dasdaw";

  }
  @GetMapping(value = "/autologin")
  public MessageAuthenticate autoLogin(HttpServletResponse response,HttpServletRequest request)throws Exception{
    return authService.autoLogin(request, response);
  }
  @PostMapping(value = "/register")
  public ResponseEntity<String> register(@RequestBody RegisterRequest request,HttpServletResponse response) throws Exception{
    System.out.println("dadwwd");
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