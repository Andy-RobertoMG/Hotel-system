package com.hotel.app.hotel_system.security.exception;

import java.io.IOException;


import org.springframework.http.MediaType;
import org.springframework.http.HttpHeaders;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hotel.app.hotel_system.models.dto.ErrorDTO;
import com.hotel.app.hotel_system.security.helper.MessageAuthenticate;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@Component
public class UserAuthenticationEntryPointException implements AuthenticationEntryPoint{
  private static final ObjectMapper Mapper = new ObjectMapper();

  @Override
  public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException)
      throws IOException, ServletException {
        System.out.println("Excepcion");
    // TODO Auto-generated method stub
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE);
        Mapper.writeValue(response.getOutputStream(), new MessageAuthenticate("Autorización", false));
  } 
}