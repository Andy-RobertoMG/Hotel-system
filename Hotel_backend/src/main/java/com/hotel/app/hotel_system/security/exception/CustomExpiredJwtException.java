package com.hotel.app.hotel_system.security.exception;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Header;

public class CustomExpiredJwtException extends Exception{
  public CustomExpiredJwtException(String message) {
        super(message);
    }
}