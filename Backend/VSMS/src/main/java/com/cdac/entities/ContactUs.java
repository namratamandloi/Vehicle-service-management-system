package com.cdac.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="contact_us")
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true)
public class ContactUs extends BaseEntity{
	@Column(nullable = false)
	private String name;
	@Column(nullable = false)
	private String email;
	@Column(columnDefinition = "TEXT", nullable = false)
	private String message;
	
	
	public ContactUs(String name, String email, String message) {
		super();
		this.name = name;
		this.email = email;
		this.message = message;
	}
	
	
}
 