package com.hotel.app.hotel_system.security.entity;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthResponse {
  String token;
  public AuthResponse(String token){
    this.token = token;
  }
}