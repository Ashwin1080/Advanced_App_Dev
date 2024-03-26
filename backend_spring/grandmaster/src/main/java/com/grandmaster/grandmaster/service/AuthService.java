package com.grandmaster.grandmaster.service;

import com.grandmaster.grandmaster.dto.request.LoginRequest;
import com.grandmaster.grandmaster.dto.request.RegisterRequest;
import com.grandmaster.grandmaster.dto.response.LoginResponse;

public interface AuthService {
    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);

    String createAdmin();
}