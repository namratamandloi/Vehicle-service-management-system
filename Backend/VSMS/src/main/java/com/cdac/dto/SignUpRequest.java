package com.cdac.dto;

import lombok.Data;

@Data
public class SignUpRequest {
	private String name;
	private String email;
	private String password;
	private String phoneNo;
	private String address;
	
}
