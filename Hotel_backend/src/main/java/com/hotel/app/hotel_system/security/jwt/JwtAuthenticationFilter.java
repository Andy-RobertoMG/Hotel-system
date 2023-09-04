package com.hotel.app.hotel_system.security.jwt;

import java.io.IOException;
import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.hotel.app.hotel_system.helper.Message;
import com.hotel.app.hotel_system.models.repository.UsersRepository;
import com.hotel.app.hotel_system.security.exception.CustomExpiredJwtException;
import com.hotel.app.hotel_system.security.service.JwtService;

import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import jakarta.servlet.http.Cookie;
@Component
// @RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
  public static final String COOKIE_NAME = "auth_by_cookie";
  private final JwtService jwtService;
  private final UserDetailsService userDetailsService;
  private final UsersRepository usersRepository; 
  @Autowired
  public JwtAuthenticationFilter(JwtService jwtService,UserDetailsService userDetailsService,UsersRepository usersRepository){
    this.jwtService = jwtService;
    this.userDetailsService = userDetailsService;
    this.usersRepository = usersRepository;

  }
  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {
      System.out.println("dawdadadnadnadnadnjad");
      Optional<Cookie> cookieAuth=Stream.of(Optional.ofNullable(request.getCookies()).orElse(new Cookie[0])).filter(
          cookie-> COOKIE_NAME.equals(cookie.getName())&&cookie.getValue().length()>0).findFirst();
      String token = null;
      String username = null;
      if(cookieAuth.isPresent()&&cookieAuth.get().getValue().length()>0){
        token = cookieAuth.get().getValue();
      }

      System.out.println("Testeo2");
      // String[] tokenContainer = new String[1];
      //   cookieAuth.ifPresent(cookie->
      //     {
      //       System.out.println("CookieAuthenticationFilter: Found authentication cookie");
      //       System.out.println(cookie.getValue());
      //       System.out.println(cookie.getName());
      //       tokenContainer[0] = cookie.getValue();
      //   }
      //   );
      if(!cookieAuth.isPresent()){
        System.out.println("No esta presente");
        filterChain.doFilter(request, response);
        return;
      }
      System.out.println("Token:"+token);
      try{

        username = jwtService.getUsernameFromToken(token);
      }catch(ExpiredJwtException e){
          try {
            throw new CustomExpiredJwtException("El Jwt ha expirado");
          } catch (CustomExpiredJwtException e1) {
            // TODO Auto-generated catch block
            // e1.printStackTrace();
          }
        }
      System.out.println(token);
      if(username !=null&&SecurityContextHolder.getContext().getAuthentication()==null){
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        try{
        if(jwtService.isTokenValid(token,userDetails)){
            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
              username, null,userDetails.getAuthorities());
              authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            System.out.println("Username:"+username+" Token:"+authToken);
            SecurityContextHolder.getContext().setAuthentication(authToken);
          }
        }catch(ExpiredJwtException e){
          throw new ExpiredJwtException(e.getHeader(), e.getClaims(), "El JWT ha expirado");
        }
      }
      System.out.println("Pasa por aqui");
      filterChain.doFilter(request, response);
  }
  
}