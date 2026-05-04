package com.example.adinsightsbackend.controllers.requests;

import lombok.Getter;

@Getter
public class LoginRequest {
    private String email;
    private String password;
}
