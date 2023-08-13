package com.hotel.app.hotel_system;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
public class HotelSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(HotelSystemApplication.class, args);
	}
	@Bean
    public CorsFilter corsFilter() {
         CorsConfiguration corsConfig = new CorsConfiguration();
				 corsConfig.setAllowedOriginPatterns(List.of("*")); // Use allowedOriginPatterns instead of allowedOrigins
        // corsConfig.addAllowedOrigin("*"); // Permit all origins (for testing, you can restrict this to specific domains)
        corsConfig.addAllowedMethod("*"); // Permit all HTTP methods (GET, POST, PUT, etc.)
        corsConfig.addAllowedHeader("*"); // Permit all HTTP headers
        corsConfig.setAllowCredentials(true); // Allow sending credentials (e.g., cookies)

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfig);

        return new CorsFilter(source);
    }
    // @Bean
    // public CorsFilter corsFilter() {
    //     CorsConfiguration corsConfig = new CorsConfiguration();
    //     corsConfig.setAllowedOriginPatterns(Collections.singletonList("*")); // Permitir todos los orígenes
    //     corsConfig.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS")); // Permitir métodos HTTP específicos
    //     corsConfig.setAllowedHeaders(Arrays.asList("*")); // Permitir todos los encabezados HTTP
    //     corsConfig.setAllowCredentials(true); // Permitir el envío de credenciales (por ejemplo, cookies)
        
    //     UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    //     source.registerCorsConfiguration("/**", corsConfig);
        
    //     return new CorsFilter(source);
    // }
}
