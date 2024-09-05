package com.example.backend.config;

// import static org.springframework.security.config.Customizer.withDefaults;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

  @Bean
  public SecurityFilterChain securityFilterChain(
    HttpSecurity http,
    RequestFilter requestFilter
  ) throws Exception {
    return http
      .csrf(AbstractHttpConfigurer::disable)
      .authorizeHttpRequests(auth -> {
        // Kalo mau akses harus ada token
        auth.requestMatchers(HttpMethod.PUT, "/api/movie").authenticated();
        auth.requestMatchers(HttpMethod.DELETE, "/api/movie").authenticated();
        // auth.requestMatchers(HttpMethod.GET, "/api/movie").authenticated();

        // Boleh akses tanpa token
        auth.anyRequest().permitAll();
      })
      .addFilterBefore(
        requestFilter,
        UsernamePasswordAuthenticationFilter.class
      )
      .build();
  }

  //menentukan tipe enkripsi paswordnya
  @Bean
  public PasswordEncoder passwordEncoder() {
    return PasswordEncoderFactories.createDelegatingPasswordEncoder();
  }
}
