package com.example.adinsightsbackend.controllers;

import com.example.adinsightsbackend.controllers.requests.LoginRequest;
import com.example.adinsightsbackend.services.UserService;
import com.example.adinsightsbackend.entities.User;
import com.example.adinsightsbackend.utils.exceptions.InvalidCredentialsProvided;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ga/api")
@RequiredArgsConstructor
class UserController {

    private final UserService userService;

    @PostMapping("/create-user")
    public User postUser(@RequestBody User user) {
        return userService.registerNewUser(user);
    }

    @GetMapping("/fetch-user")
    public User fetchUser(@RequestBody LoginRequest request) throws InvalidCredentialsProvided {
        return userService.fetchExistingUser(request.getEmail(), request.getPassword());
    }

    @DeleteMapping("/delete-user")
    public User deleteUser(@RequestBody User user) throws InvalidCredentialsProvided {
        return userService.deleteExistingUser(user);
    }
}
