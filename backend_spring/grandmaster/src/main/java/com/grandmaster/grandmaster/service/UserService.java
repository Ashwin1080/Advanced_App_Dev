package com.grandmaster.grandmaster.service;


import java.util.List;

import com.grandmaster.grandmaster.dto.request.UserCreateRequest;
import com.grandmaster.grandmaster.dto.request.UserUpdateRequest;
import com.grandmaster.grandmaster.dto.response.UserResponse;
import com.grandmaster.grandmaster.model.User;

public interface UserService {

    User createUser(UserCreateRequest registerRequest);

    User updateUser(Long userId, UserUpdateRequest userUpdateRequest);

    public void deleteUser(Long userId) ;
    
    public User getUserById(Long userId);

}