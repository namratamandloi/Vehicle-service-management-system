package com.cdac.service;

import java.util.List;

import com.cdac.dto.ApiResponse;
import com.cdac.dto.LoginRequest;
import com.cdac.dto.LoginResponse;
import com.cdac.dto.SignUpRequest;
import com.cdac.entities.User;

public interface UserService {
	List<User> findAllAvailableUsers();

	String addUser(User user);

	String deleteUser(Long userId);

	User getUserDetails(Long id);

	ApiResponse updateDetails(Long id, User user);

	String register(SignUpRequest request);

	LoginResponse login(LoginRequest request);

	
}
 