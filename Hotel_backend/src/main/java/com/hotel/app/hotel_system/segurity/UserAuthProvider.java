package com.hotel.app.hotel_system.segurity;

import java.util.Collection;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.preauth.PreAuthenticatedAuthenticationToken;
import org.springframework.stereotype.Component;

import com.hotel.app.hotel_system.models.dto.UsersDTO;
import com.hotel.app.hotel_system.models.entity.Credential;
import com.hotel.app.hotel_system.service.AuthenticationService;

@Component
public class UserAuthProvider implements AuthenticationProvider{
  // @Autowired 
  @Qualifier("UsersService")
  private final AuthenticationService authenticationService;
  public UserAuthProvider(AuthenticationService authenticationService){
    this.authenticationService= authenticationService;
  }
  @Override
  public Authentication authenticate(Authentication authentication) throws AuthenticationException {
    UsersDTO usersDTO= null;
    System.out.println("UserAuthProvider: Authenticating user...");
    if(authentication instanceof UsernamePasswordAuthenticationToken){
      usersDTO = authenticationService.authenticate(
        new Credential((String)authentication.getPrincipal(), (String)authentication.getCredentials())
      );
      System.out.println("Dato");
    }else if(authentication instanceof PreAuthenticatedAuthenticationToken){
      authenticationService.findByToken((String)authentication.getPrincipal());
      System.out.println("Dato2");
    }
    if(usersDTO==null){
      return null;
    }
    System.out.println("Dato3");
    return new UsernamePasswordAuthenticationToken(usersDTO, null,Collections.emptyList());
  }

  @Override
    public boolean supports(Class<?> aClass) {
        return true;
    }
    
}