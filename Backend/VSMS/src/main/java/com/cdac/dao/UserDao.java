package com.cdac.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cdac.entities.User;
import com.cdac.entities.UserRole;



public interface UserDao extends JpaRepository<User, Long>{
	List<User> findByRole(UserRole role);
	
	boolean existsByEmail(String email);

	Optional<User> findByEmail(String email);
}
