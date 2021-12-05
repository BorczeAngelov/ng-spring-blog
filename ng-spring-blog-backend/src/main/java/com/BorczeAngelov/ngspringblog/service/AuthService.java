package com.BorczeAngelov.ngspringblog.service;

import com.BorczeAngelov.ngspringblog.dto.RegisterRequest;
import com.BorczeAngelov.ngspringblog.model.User;
import com.BorczeAngelov.ngspringblog.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public void signup(RegisterRequest registerRequest) {
        User user = new User();
        user.setUserName(registerRequest.getUsername());
        user.setPassword(registerRequest.getPassword());
        user.setEmail(registerRequest.getEmail());

        userRepository.save(user);
    }

}