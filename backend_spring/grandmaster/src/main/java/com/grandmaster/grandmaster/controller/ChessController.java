package com.grandmaster.grandmaster.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class ChessController {
    @GetMapping("/hello")
    public String getMethodName() {
        return "Hello world";
    }
    
}
