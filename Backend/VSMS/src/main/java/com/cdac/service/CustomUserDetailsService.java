package com.cdac.service;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cdac.dao.UserDao;
import com.cdac.entities.User;



@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
    private UserDao userDao;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User user = userDao.findByEmail(email)
	            .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));

		 // Wrap single role in a collection
	    SimpleGrantedAuthority authority = new SimpleGrantedAuthority("ROLE_" + user.getRole().name());

	        return new org.springframework.security.core.userdetails.User(
	            user.getEmail(),
	            user.getPassword(),
	            Collections.singletonList(authority)
	        );
	}

}
