package com.cdac.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class AppointmentRequest {
	
	private String vehicleType;
    private String serviceType;
    private LocalDate appointmentDate;
    private String remarks;
}
