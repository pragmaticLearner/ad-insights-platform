package com.example.adinsightsbackend.services;

import com.example.adinsightsbackend.entities.User;
import com.example.adinsightsbackend.repositories.UserRepository;
import com.example.adinsightsbackend.utils.exceptions.InvalidCredentialsProvided;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerNewUser(User user) {
        return userRepository.save(user);
    }

    public User fetchExistingUser(String email, String password) throws InvalidCredentialsProvided {
        try {
            System.out.println("Fetching existing user");
            return userRepository.findByEmailAndPassword(email, password);
        }
        catch (Exception e) {
            throw new InvalidCredentialsProvided("Invalid credentials provided: " + e.getMessage());
        }
    }

    @Transactional
    public User deleteExistingUser(User user) throws InvalidCredentialsProvided {
        try {
            System.out.println("Deleting existing user");
            return userRepository.deleteUserById(user.getId());
        }
        catch (Exception e) {
            throw  new InvalidCredentialsProvided("Invalid credentials provided: " + e.getMessage());
        }
    }
}
