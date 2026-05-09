package com.example.adinsightsbackend.services;

import com.example.adinsightsbackend.controllers.requests.SignUpRequest;
import com.example.adinsightsbackend.entities.User;
import com.example.adinsightsbackend.repositories.UserRepository;
import com.example.adinsightsbackend.utils.enums.Role;
import lombok.AllArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthenticationService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    public void registerNewUser(SignUpRequest request) throws IllegalArgumentException {
        try {
            User user = User.builder()
                    .firstName(request.getFirstName())
                    .lastName(request.getLastName())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .role(Role.USER)
                    .build();
            userRepository.save(user);
        } catch (DataIntegrityViolationException e) {
            throw new IllegalArgumentException("User with email: " + request.getEmail() + "already exists");
        }
    }
}
