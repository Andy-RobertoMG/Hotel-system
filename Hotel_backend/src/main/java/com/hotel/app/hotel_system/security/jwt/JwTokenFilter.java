package com.hotel.app.hotel_system.security.jwt;

import java.io.IOException;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwTokenFilter extends OncePerRequestFilter {
  private static final Logger logger = org.slf4j.LoggerFactory.getLogger(JwtTokenFilter.class);
  @Autowired
  private  JwtProvider jwtProvider;
  @Autowired
  private  UserDetailsServiceImpl userDetailsServiceImpl; 
    
  @Override
  protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain filterChain) throws ServletException, IOException{
      try {
          String token = getToken(req);
          if (token != null && jwtProvider.validateToken(token)) {
              String userName = jwtProvider.getUserNameFromToken(token);
              UserDetails userDetails = userDetailsServiceImpl.loadUserByUsername(userName);
              UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
              SecurityContextHolder.getContext().setAuthentication(auth);
              
          }
      } catch (Exception e) {
          logger.error(e.getMessage());
      }
      filterChain.doFilter(req, res);
    }


    private String getToken(HttpServletRequest request){
        String header = request.getHeader("Authorization");
        if (header != null && header.startsWith("Bearer")) 
            return header.replace("Bearer ", "");
        return null;
    }
  
    
}