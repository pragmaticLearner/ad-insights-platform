package com.example.adinsightsbackend.controllers;

import com.example.adinsightsbackend.controllers.requests.ForgotPasswordRequest;
import com.example.adinsightsbackend.controllers.requests.LoginRequest;
import com.example.adinsightsbackend.controllers.requests.SignUpRequest;
import com.example.adinsightsbackend.services.AuthenticationService;
import com.example.adinsightsbackend.utils.exceptions.UserAlreadyExistsException;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataIntegrityViolationException;
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
    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) {
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
            logger.info("Authentication failed: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Bad Credentials");
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<String> registerUser(@RequestBody SignUpRequest request) {
        logger.info("Received sign up request: " +  request);
        try {
            authenticationService.registerUser(request);
            return ResponseEntity.ok("Successfully created new user");
        } catch (UserAlreadyExistsException e) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body(e.getMessage());
        } catch (MessagingException e) {
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    @PostMapping("/forgot_password")
    public ResponseEntity<String> changePassword(@RequestBody ForgotPasswordRequest request) {
        String email = request.getEmail();
        logger.info("Received change password request: " + email);
        try {
            authenticationService.changePassword(email);
        } catch (Exception e) {
            logger.error("Error changing password: " + e.getMessage());
        }
        return ResponseEntity.status(HttpStatus.OK).body("If an account exists, a reset email has been sent");
    }
}
