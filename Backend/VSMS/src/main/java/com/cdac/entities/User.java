package com.cdac.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class User extends BaseEntity {
	private String name;
	@Column(unique=true,nullable =false )
	private String email;
	@Column(name="phone_no",nullable = false)
	private String phoneNo;
	@Column(nullable = false)
	private String password;
	private String address;
	@Enumerated(EnumType.STRING)
	private UserRole role;
	
	public UserRole getRole() {
	    return role;
	}
	
	 
	 public User(String name, String email, String phoneNo, String password, String address, UserRole role) {
		super();
		this.name = name;
		this.email = email;
		this.phoneNo = phoneNo;
		this.password = password;
		this.address = address;
		this.role = role;
	}

}
