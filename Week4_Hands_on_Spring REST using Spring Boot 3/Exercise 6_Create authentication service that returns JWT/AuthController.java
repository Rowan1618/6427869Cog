package com.example.jwtauth.controller;

import com.example.jwtauth.util.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

@RestController
public class AuthController {

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        String header = request.getHeader("Authorization");
        if (header == null || !header.startsWith("Basic ")) {
            return ResponseEntity.status(401).body("Missing or invalid Authorization header");
        }

        String[] credentials = extractCredentials(header);
        String username = credentials[0];
        String password = credentials[1];

        if (!"user".equals(username) || !"pwd".equals(password)) {
            return ResponseEntity.status(401).body("Invalid credentials");
        }

        String token = JwtUtil.generateToken(username);
        return ResponseEntity.ok().body("{\"token\":\"" + token + "\"}");
    }

    private String[] extractCredentials(String header) {
        String base64Credentials = header.substring("Basic ".length());
        byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(credDecoded, StandardCharsets.UTF_8);
        return credentials.split(":", 2);
    }
}
