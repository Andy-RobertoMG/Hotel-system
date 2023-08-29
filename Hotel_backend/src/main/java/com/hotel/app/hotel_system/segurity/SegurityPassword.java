package com.hotel.app.hotel_system.segurity;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.header.writers.StaticHeadersWriter;
import org.springframework.security.web.servlet.util.matcher.MvcRequestMatcher;
import org.springframework.web.servlet.handler.HandlerMappingIntrospector;

import static org.springframework.security.config.Customizer.withDefaults;

import org.apache.catalina.security.SecurityConfig;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
public class SegurityPassword{
  private final UserAuthenticationEntryPoint userAuthenticationEntryPoint;
  public SegurityPassword(UserAuthenticationEntryPoint userAuthenticationEntryPoint){
    this.userAuthenticationEntryPoint=userAuthenticationEntryPoint;
  }
  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http, HandlerMappingIntrospector introspector) throws Exception
  {
    // 
    MvcRequestMatcher.Builder mvcMatcherBuilder = new MvcRequestMatcher.Builder(introspector);
    return http.csrf().disable().headers().addHeaderWriter(new StaticHeadersWriter("Set-Cookie", "SameSite=None; Secure")).and().
    exceptionHandling().authenticationEntryPoint(userAuthenticationEntryPoint)
    .and()
    .addFilterBefore(new UsernamePasswordAuthFilter(), BasicAuthenticationFilter.class)
    .addFilterBefore(new CookieAuthenticationFilter(), UsernamePasswordAuthFilter.class)
    .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
    .and().cors().and()
    .logout().deleteCookies(CookieAuthenticationFilter.COOKIE_NAME)
    .and()
    .authorizeHttpRequests(authorize -> authorize
                .requestMatchers(mvcMatcherBuilder.pattern(HttpMethod.POST, "/auth/**")).permitAll()
                .anyRequest().authenticated()
            )
    .build();
  }
  @Bean
  public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}