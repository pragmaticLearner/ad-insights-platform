package com.example.adinsightsbackend.controllers;

import com.example.adinsightsbackend.controllers.requests.LoginRequest;
import com.example.adinsightsbackend.services.UserService;
import com.example.adinsightsbackend.entities.User;
import com.example.adinsightsbackend.utils.exceptions.InvalidCredentialsProvided;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ga/api/auth")
@RequiredArgsConstructor
class AuthenticationController {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) throws InvalidCredentialsProvided {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return ResponseEntity.ok("Logged in as " + authentication.getPrincipal());
    }

    @PostMapping("/signup")
    public User postUser(@RequestBody User user) {
        return userService.registerNewUser(user);
    }
}
