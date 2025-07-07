package com.cdac.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.ContactUsRequest;
import com.cdac.service.ContactUsService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Tag(name = "Contact_Us", description = "Review Messages")
public class ContactUsController {
	
	private final ContactUsService contactUsService;
	
	@PostMapping("/contact-us")
	public ResponseEntity<?> ContactUs(@RequestBody ContactUsRequest request){
		 try {
	            contactUsService.register(request);
	            return ResponseEntity.ok("User registered successfully");
	        } catch (RuntimeException e) {
	            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
	        }
	}
}
