package com.cdac.service;

import java.time.LocalDate;
import java.util.List;

import com.cdac.dto.ApiResponse;
import com.cdac.dto.AppointmentRequest;
import com.cdac.dto.AppointmentResponse;


public interface AppointmentService {
	//===================Users control on its appointments===========================//
	AppointmentResponse bookAppointment(AppointmentRequest request);

	List<AppointmentResponse> getAppointmentsForCurrentUser();

	AppointmentResponse updateAppointmentDate(Long appointmentId, LocalDate newDate);

	ApiResponse deleteAppointment(Long appointmentId);

//==================Admin Control on Users and its appointment====================//
	ApiResponse deleteAppointmentById(Long appointmentId);

	ApiResponse updateAppointmentDateByAdmin(Long appointmentId, LocalDate newAppointmentDate);
}
