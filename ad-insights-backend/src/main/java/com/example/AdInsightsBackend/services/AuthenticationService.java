package com.example.adinsightsbackend.services;

import com.example.adinsightsbackend.controllers.requests.SignUpRequest;
import com.example.adinsightsbackend.entities.User;
import com.example.adinsightsbackend.repositories.UserRepository;
import com.example.adinsightsbackend.utils.enums.Role;
import jakarta.mail.MessagingException;
import lombok.AllArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
public class AuthenticationService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final EmailService emailService;

    @Transactional
    public void registerUser(SignUpRequest request) throws DataIntegrityViolationException, MessagingException {
        try {
            if (userRepository.existsByEmail(request.getEmail())) {
                throw new DataIntegrityViolationException("User with email: " + request.getEmail() + " already exists");
            }

            User user = User.builder()
                    .firstName(request.getFirstName())
                    .lastName(request.getLastName())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .role(Role.USER)
                    .build();

            userRepository.save(user);
            emailService.sendWelcomeEmail(user.getEmail(), user.getFirstName());
        } catch (DataIntegrityViolationException e) {
            throw new DataIntegrityViolationException("User with email: " + request.getEmail() + "already exists");
        } catch (MessagingException e) {
            throw new MessagingException("Could not send welcome email to user");
        }
    }

    public void changePassword(String email) {
        Boolean userExists = userRepository.existsByEmail(email);
        System.out.println("User exists: " + userExists);

        if (userExists) {
            emailService.sendForgotPasswordEmail(email);
        }
    }
}
