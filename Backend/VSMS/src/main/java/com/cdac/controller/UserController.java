package com.cdac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.ApiResponse;
import com.cdac.entities.User;
import com.cdac.service.UserService;

@RestController
@RequestMapping("/api/auth") //http://localhost:8080/users
public class UserController {
	@Autowired
	private UserService userService;
	
	public UserController() {
		System.out.println("in ctor of "+getClass());
	}
	
	/*@GetMapping
	public ResponseEntity<?> findAllAvailableUsers(){
		System.out.println("in get available");
		List<User> users = userService.findAllAvailableUsers();
		if(users.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(users);
	}*/
	/*
	@PostMapping("/add_users")
	public ResponseEntity<?> addNewUser(@RequestBody User user){
		System.out.println("in post, add new user"+user);
		try{
			return ResponseEntity.status(HttpStatus.CREATED).body(userService.addUser(user));
		}catch(RuntimeException e) {
			System.out.println("error in controller "+e);
			return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
		}
	}*/
	
	
	/*@DeleteMapping("/{userId}")
	public ResponseEntity<?> deleteUserDetails(@PathVariable Long userId) {
		System.out.println("in delete "+userId);
		try {
		return ResponseEntity.ok(
				userService.deleteUser(userId));
		}catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse( e.getMessage()));
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getUserDetails(@PathVariable Long id){
		try {
			return ResponseEntity.ok(userService.getUserDetails(id));
		}catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateDetails(@PathVariable Long id, @RequestBody User user){
		try {
			return ResponseEntity.ok(userService.updateDetails(id,user));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}*/
}
