package com.example.adinsightsbackend.controllers;

import com.example.adinsightsbackend.controllers.requests.LoginRequest;
import com.example.adinsightsbackend.services.UserService;
import com.example.adinsightsbackend.entities.User;
import com.example.adinsightsbackend.utils.exceptions.InvalidCredentialsProvided;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/ga/api")
@RequiredArgsConstructor
class UserController {

    private final UserService userService;

    @GetMapping("/")
    public String home() {
        return ("<h1>hello<h1/>");
    }

    @PostMapping("/signup")
    public User postUser(@RequestBody User user) {
        return userService.registerNewUser(user);
    }

    @GetMapping("/login")
    public User login(@RequestBody LoginRequest request) throws InvalidCredentialsProvided {
        return userService.fetchExistingUser(request.getEmail(), request.getPassword());
    }
}
