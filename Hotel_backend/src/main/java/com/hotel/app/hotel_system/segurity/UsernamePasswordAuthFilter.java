package com.hotel.app.hotel_system.segurity;

import java.io.IOException;

import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hotel.app.hotel_system.models.entity.Credential;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class UsernamePasswordAuthFilter extends OncePerRequestFilter{

  private static final ObjectMapper Mapper = new ObjectMapper();
  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {
        System.out.println("UsernamePasswordAuthFilter: Intercepting request");
    // TODO Auto-generated method stub
        if("auth/login".equals(request.getServletPath() )&& HttpMethod.POST.matches(request.getMethod())){
          Credential credential = Mapper.readValue(request.getInputStream(),Credential.class);
          System.out.println("UsernamePasswordAuthFilter: Username: " + credential.getUsername());
            System.out.println("UsernamePasswordAuthFilter: Password: " + credential.getPassword());
          SecurityContextHolder.getContext().setAuthentication(
            new UsernamePasswordAuthenticationToken(credential.getUsername(), credential.getPassword())
          );
        }
        System.out.println("Pasa por aca");
        
        filterChain.doFilter(request, response);
  }
    
}