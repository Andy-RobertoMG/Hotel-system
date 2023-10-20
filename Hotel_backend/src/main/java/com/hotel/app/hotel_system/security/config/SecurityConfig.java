package com.hotel.app.hotel_system.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.header.writers.StaticHeadersWriter;
import org.springframework.security.web.servlet.util.matcher.MvcRequestMatcher;

import com.hotel.app.hotel_system.security.exception.UserAuthenticationEntryPointException;
import com.hotel.app.hotel_system.security.jwt.JwtAuthenticationFilter;
import org.springframework.web.servlet.handler.HandlerMappingIntrospector;
import static org.springframework.security.config.Customizer.withDefaults;
import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig {
  private final JwtAuthenticationFilter jwtAuthenticationFilter;
  private final AuthenticationProvider authProvider;
  private final UserAuthenticationEntryPointException userAuthenticationEntryPoint;
  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http, HandlerMappingIntrospector introspector) throws Exception{
    MvcRequestMatcher.Builder mvcMatcherBuilder = new MvcRequestMatcher.Builder(introspector);
    return http.csrf(csrf-> csrf.disable()).headers().addHeaderWriter(new StaticHeadersWriter("Set-Cookie", "SameSite=None; Secure")).and().cors().and().
    exceptionHandling().authenticationEntryPoint(userAuthenticationEntryPoint).and().
    authorizeHttpRequests(authRequest->
    authRequest .requestMatchers(mvcMatcherBuilder.pattern(HttpMethod.POST, "/**")).permitAll()
                .requestMatchers(mvcMatcherBuilder.pattern(HttpMethod.GET, "/**")).permitAll()
                .requestMatchers(mvcMatcherBuilder.pattern(HttpMethod.GET, "/rooms")).hasRole("NUEVO")
                .anyRequest().authenticated()
                )
    .sessionManagement(sessionManager->
    sessionManager
      .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
      .authenticationProvider(authProvider)
      .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
      .build();
  }
}