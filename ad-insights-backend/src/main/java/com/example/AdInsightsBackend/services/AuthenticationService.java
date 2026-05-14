package com.example.adinsightsbackend.services;

import com.example.adinsightsbackend.controllers.requests.SignUpRequest;
import com.example.adinsightsbackend.models.User;
import com.example.adinsightsbackend.repositories.UserRepository;
import com.example.adinsightsbackend.utils.enums.Role;
import com.example.adinsightsbackend.utils.exceptions.UserAlreadyExistsException;
import jakarta.mail.MessagingException;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationService.class);

    @Transactional
    public void registerUser(SignUpRequest request) throws UserAlreadyExistsException, MessagingException {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new UserAlreadyExistsException("User with email: " + request.getEmail() + " already exists");
        }

        User user = User.createUser(request, passwordEncoder);
        userRepository.save(user);

        emailService.sendWelcomeEmail(user.getEmail(), user.getFirstName());
    }

    public void changePassword(String email) throws DataIntegrityViolationException {
        Boolean userExists = userRepository.existsByEmail(email);
        logger.info("User exists: " + userExists);

        if (userExists) {
            emailService.sendForgotPasswordEmail(email);
        }

        if (!userExists) {
            throw new DataIntegrityViolationException("User with email: " + email + " doesn't exist");
        }
    }
}
