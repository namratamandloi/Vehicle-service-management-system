package com.cdac.entities;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "appointments")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true,exclude = "myUser")
public class Appointment extends BaseEntity {
	
	@Column(name = "vehicle_type")
	private String vehicleType;
	@Column(name = "service_type")
	private String serviceType;
	@Column(name = "appointment_date")
	private LocalDate appointmentDate;
	private String status ="pending";
	@Column(columnDefinition = "TEXT")
	private String remarks;
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User myUser;
	
	
	public Appointment(String vehicleType, String serviceType, LocalDate appointmentDate, String remarks) {
		super();
		this.vehicleType = vehicleType;
		this.serviceType = serviceType;
		this.appointmentDate = appointmentDate;
		this.remarks = remarks;
	}
	
}
