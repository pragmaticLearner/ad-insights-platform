package com.example.adinsightsbackend.controllers;

import com.example.adinsightsbackend.controllers.requests.LoginRequest;
import com.example.adinsightsbackend.controllers.requests.SignUpRequest;
import com.example.adinsightsbackend.services.AuthenticationService;
import com.example.adinsightsbackend.utils.exceptions.InvalidCredentialsProvided;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
class AuthenticationController {

    private final AuthenticationService authenticationService;
    private final AuthenticationManager authenticationManager;
    private static Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) throws InvalidCredentialsProvided {
        try {
            logger.info("Received login request: " + request);
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            return ResponseEntity.ok("Logged in as " + authentication.getPrincipal());
        } catch (AuthenticationException e) {
            throw new InvalidCredentialsProvided(e.getMessage());
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<String> postUser(@RequestBody SignUpRequest request) {
        logger.info("Received sign up request: " +  request);
        try {
            authenticationService.registerNewUser(request);
            return ResponseEntity.ok("Successfully created new user");
        } catch (IllegalArgumentException e) {
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body(e.getMessage());
        }
    }
}
