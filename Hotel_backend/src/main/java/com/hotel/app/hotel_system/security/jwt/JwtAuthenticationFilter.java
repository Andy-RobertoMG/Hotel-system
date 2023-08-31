package com.hotel.app.hotel_system.security.jwt;

import java.io.IOException;
import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Cookie;
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
  public static final String COOKIE_NAME = "auth_by_cookie";
  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {
      Optional<Cookie> cookieAuth=Stream.of(Optional.ofNullable(request.getCookies()).orElse(new Cookie[0])).filter(
          cookie-> COOKIE_NAME.equals(cookie.getName())&&cookie.getValue().length()>0).findFirst();

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
        filterChain.doFilter(request, response);
        return;
      }
      System.out.println("Pasa por aqui");
      filterChain.doFilter(request, response);
  }
  
}