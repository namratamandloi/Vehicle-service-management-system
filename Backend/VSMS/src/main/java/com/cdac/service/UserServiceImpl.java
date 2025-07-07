package com.cdac.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cdac.config.JwtUtil;
import com.cdac.custom_exceptions.ApiException;
import com.cdac.custom_exceptions.ResourceNotFoundException;
import com.cdac.dao.UserDao;
import com.cdac.dto.ApiResponse;
import com.cdac.dto.LoginRequest;
import com.cdac.dto.LoginResponse;
import com.cdac.dto.SignUpRequest;
import com.cdac.entities.User;
import com.cdac.entities.UserRole;

import jakarta.annotation.PostConstruct;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private final PasswordEncoder passwordEncoder;
	@Autowired
	private UserDao userDao;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtUtil jwtUtil;
	@Autowired
	private UserDetailsService userDetailsService;
	
	


    UserServiceImpl(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }
	
	
	@Override
	public List<User> findAllAvailableUsers() {
		
		return userDao.findByRole(UserRole.USER);
	}


	@Override
	public String addUser(User user) {
		if(userDao.existsByEmail(user.getEmail()))
			throw new ApiException("Duplicate email id");
		User addUser = userDao.save(user);
		return "Added new user with Id = "+addUser.getId();
	}


	@Override
	public String deleteUser(Long userId) {
		if(userDao.existsById(userId)) {
		userDao.deleteById(userId);
		return "deleted user details...";
      }
		throw new ResourceNotFoundException("Invalid userId...");
	}


	@Override
	public User getUserDetails(Long id) {
		
		return userDao.findById(id).orElseThrow(()->new ResourceNotFoundException("invalid user id"));
	}


	@Override
	public ApiResponse updateDetails(Long id, User user) {
		if(userDao.existsById(id)) {
			userDao.save(user);
			return new ApiResponse("updated restaurant details..");
		}
		throw new ResourceNotFoundException("Invalid userId...");
	}

	//==================SignUp Implementation====================//
	@Override
	public String register(SignUpRequest request) {
		if(userDao.existsByEmail(request.getEmail())) {
			throw new ResourceNotFoundException("Email already exists...");
		}
		User user = new User();
		user.setName(request.getName());
		user.setEmail(request.getEmail());
		user.setPassword(passwordEncoder.encode(request.getPassword()));
		user.setPhoneNo(request.getPhoneNo());
		user.setAddress(request.getAddress());
		user.setRole(UserRole.USER);
		
		userDao.save(user);
		
		return "User registered successfully";
	}

	//==================Login Implementation====================//
	@Override
	public LoginResponse login(LoginRequest request) {
		// 1. Authenticate user credentials
		authenticationManager.authenticate
		(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
		
		// 2. Load user from database
		 User user = userDao.findByEmail(request.getEmail())
			        .orElseThrow(() -> new RuntimeException("User not found"));
		
		// 3. Load user details for Spring Security (required for JWT)
		UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
		
		// 4. Generate JWT token
		String token = jwtUtil.generateToken(userDetails);
		
		// 5. Return LoginResponse DTO
		return new LoginResponse(token, user.getRole().name(), user.getEmail());
	}
	
	//==================to encode the admin password once====================//
	//to encode the admin password once in the database
	/*
	@PostConstruct
	public void encodeAdminPassword() {
	    Optional<User> adminOpt = userDao.findByEmail("rohit@123");
	    if (adminOpt.isPresent()) {
	        User admin = adminOpt.get();
	        if (!admin.getPassword().startsWith("$2a$")) { // not encoded
	            admin.setPassword(passwordEncoder.encode(admin.getPassword()));
	            userDao.save(admin);
	        }
	    }
	}*/

}
