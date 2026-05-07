package com.example.adinsightsbackend.controllers;

import com.example.adinsightsbackend.controllers.requests.LoginRequest;
import com.example.adinsightsbackend.controllers.requests.SignUpRequest;
import com.example.adinsightsbackend.services.AuthenticationService;
import com.example.adinsightsbackend.services.UserService;
import com.example.adinsightsbackend.utils.exceptions.InvalidCredentialsProvided;
import lombok.RequiredArgsConstructor;
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

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) throws InvalidCredentialsProvided {
        try {
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
        authenticationService.register(request);
        return ResponseEntity.ok("Successfully created new user");
    }
}
