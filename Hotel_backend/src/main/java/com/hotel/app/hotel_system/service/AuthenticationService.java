package com.hotel.app.hotel_system.service;

import java.nio.CharBuffer;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Objects;
import java.util.UUID;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import javax.management.RuntimeErrorException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hotel.app.hotel_system.models.dto.UsersDTO;
import com.hotel.app.hotel_system.models.entity.Credential;
@Service("AuthenticationService")
public class AuthenticationService {
  @Value("${auth.cookie.hmac-key:secret-key}")
  private String secretkey ;

  @Autowired
  public final PasswordEncoder passwordEncoder;

  
  public AuthenticationService(PasswordEncoder passwordEncoder){
    this.passwordEncoder = passwordEncoder;
  }
  @Autowired 
  @Qualifier("UsersService")
  private UserService userService;
  public UsersDTO authenticate(Credential credential){
    String encodedMasterPassword = passwordEncoder.encode(CharBuffer.wrap("the-password"));
    if(passwordEncoder.matches(CharBuffer.wrap(credential.getPassword()), encodedMasterPassword)){
      return new UsersDTO(UUID.fromString("be7909b3-2194-40d0-8c3a-9f828138146a"), "encodedMasterPassword", 0, "encodedMasterPassword", "encodedMasterPassword", UUID.fromString("be7909b3-2194-40d0-8c3a-9f828138146a"));
    }
    throw new RuntimeException("Invalid password");
  }
  public String createToken(UsersDTO usersDTO){
    return usersDTO.getId()+"&" +usersDTO.getName()+"&"+calculateHmac(usersDTO);
  }
  public UsersDTO findByToken(String token){
    String[ ] parts = token.split("&");
    UUID userId = UUID.fromString(parts[0]);
    String login = parts[1];
    String hmac = parts[2];

    UsersDTO user = new UsersDTO(UUID.fromString("be7909b3-2194-40d0-8c3a-9f828138146a"), "encodedMasterPassword", 0, "encodedMasterPassword", "encodedMasterPassword", UUID.fromString("be7909b3-2194-40d0-8c3a-9f828138146a"));
    if(!hmac.equals(calculateHmac(user))||userId != user.getId()){
      throw new RuntimeException("Invalid Cookie value");
    }
    return user;
  }
  private String calculateHmac(UsersDTO userdto){
    byte[] secretKeyBytes = Objects.requireNonNull(secretkey)
    .getBytes(StandardCharsets.UTF_8);
    userdto =  new UsersDTO(null, "encodedMasterPassword", 0, "encodedMasterPassword", "encodedMasterPassword", UUID.fromString("be7909b3-2194-40d0-8c3a-9f828138146a"));

    byte[] valueBytes= Objects.requireNonNull(userdto.getId()+"&"+userdto.getName()).getBytes(StandardCharsets.UTF_8);
    try{
      Mac mac = Mac.getInstance("HmacSHA512");
      SecretKeySpec sec = new SecretKeySpec(secretKeyBytes,"HmacSHA512");
      mac.init(sec);
      byte [ ] hmacBytes = mac.doFinal(valueBytes);
      return Base64.getEncoder().encodeToString(hmacBytes);
    }catch(NoSuchAlgorithmException | InvalidKeyException e){
      throw new RuntimeException(e);
    }
  }
}