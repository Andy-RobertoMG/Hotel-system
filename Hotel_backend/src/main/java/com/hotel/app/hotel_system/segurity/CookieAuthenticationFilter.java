package com.hotel.app.hotel_system.segurity;
import java.io.IOException;
import java.util.Optional;
import java.util.stream.Stream;
import java.util.Optional;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.preauth.PreAuthenticatedAuthenticationToken;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class CookieAuthenticationFilter extends OncePerRequestFilter {
  public static final String COOKIE_NAME = "auth_by_cookie";
  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {
    // TODO Auto-generated method stub
    System.out.println("123");
        
        Optional<Cookie> cookieAuth=Stream.of(Optional.ofNullable(request.getCookies()).orElse(new Cookie[0])).filter(
          cookie-> COOKIE_NAME.equals(cookie.getName())).findFirst();



        cookieAuth.ifPresent(cookie->
          {
            System.out.println("CookieAuthenticationFilter: Found authentication cookie");
            System.out.println(cookie.getValue());
            System.out.println(cookie.getName());
            SecurityContextHolder.getContext().setAuthentication(
                    new PreAuthenticatedAuthenticationToken(cookie.getValue(), null)
            );
        }
        );
        System.out.println("Pasa por aqui");
        filterChain.doFilter(request, response);
  }
    
}