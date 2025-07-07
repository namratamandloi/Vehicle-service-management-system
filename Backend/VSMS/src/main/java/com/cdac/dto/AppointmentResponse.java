package com.cdac.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class AppointmentResponse {
	private Long appointmentId;
    private String vehicleType;
    private String serviceType;
    private LocalDate appointmentDate;
    private String status;
    private String remarks;
}
