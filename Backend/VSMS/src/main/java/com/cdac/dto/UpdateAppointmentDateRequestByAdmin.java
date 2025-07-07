package com.cdac.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class UpdateAppointmentDateRequestByAdmin {
	private LocalDate newAppointmentDate;
}
