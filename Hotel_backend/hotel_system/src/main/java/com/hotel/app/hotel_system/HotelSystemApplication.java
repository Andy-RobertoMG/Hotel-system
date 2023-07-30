package com.hotel.app.hotel_system;

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

}
