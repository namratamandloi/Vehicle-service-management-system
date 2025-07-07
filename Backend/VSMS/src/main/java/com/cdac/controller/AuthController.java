package com.cdac.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.LoginRequest;
import com.cdac.dto.LoginResponse;
import com.cdac.dto.SignUpRequest;
import com.cdac.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Tag(name = "Authentication", description = "User signup and login APIs")
public class AuthController {
	
	private final UserService userService;
	//===================SignUP API mapping===========================//
	@PostMapping("/signup")
	@Operation(summary = "Register new user", description = "Creates a new user account")
	public ResponseEntity<?> signup(@RequestBody SignUpRequest request) {
        try {
            userService.register(request);
            return ResponseEntity.ok("User registered successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
	//===================Login API mapping===========================//
	 @PostMapping("/login")
	 @Operation(summary = "Login user", description = "loggin in registered user")
	    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
	        return ResponseEntity.ok(userService.login(request));
	    }
	
}
