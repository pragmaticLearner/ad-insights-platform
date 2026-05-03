package com.example.adinsightsbackend.controllers;

import com.example.adinsightsbackend.services.UserService;
import com.example.adinsightsbackend.entities.User;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
class UserController {

    private final UserService userService;

    @PostMapping("/create-user")
    public User postUser(@RequestBody User user) {
        return userService.registerNewUser(user);
    }
}
