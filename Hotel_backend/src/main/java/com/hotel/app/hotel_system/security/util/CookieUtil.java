package com.hotel.app.hotel_system.security.util;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class CookieUtil {
  public static void create(HttpServletResponse response,String name,String value,Boolean secure, Integer maxAge,String domain){
    Cookie cookie = new Cookie(name, value);
    cookie.setSecure(secure);
    cookie.setDomain(domain);
    cookie.setMaxAge(maxAge);
    cookie.setHttpOnly(true);
    cookie.setDomain(domain);
    cookie.setPath("/");
    response.addCookie(cookie);
  }
  public static void clear(HttpServletResponse response,String name)
  {
    Cookie cookie = new Cookie(name, null);
    cookie.setPath(name);
    cookie.setHttpOnly(true);
    cookie.setMaxAge(1);
    cookie.setDomain("localhost");
    response.addCookie(cookie);
  }
}