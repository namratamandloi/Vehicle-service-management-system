package com.cdac.service;


import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cdac.custom_exceptions.ResourceNotFoundException;
import com.cdac.dao.AppointmentDao;
import com.cdac.dao.UserDao;
import com.cdac.dto.ApiResponse;
import com.cdac.dto.AppointmentRequest;
import com.cdac.dto.AppointmentResponse;
import com.cdac.entities.Appointment;
import com.cdac.entities.User;

@Service
public class AppointmentServiceImpl implements AppointmentService {
	
	

	@Autowired
	private AppointmentDao appointmentDao;
	@Autowired
	private UserDao userDao;
	
	private User getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        return userDao.findByEmail(email)
            .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
	//==================Book Appointment====================//
	@Override
	public AppointmentResponse bookAppointment(AppointmentRequest request) {
	    User currentUser = getCurrentUser();

	    Appointment appointment = new Appointment();
	    appointment.setVehicleType(request.getVehicleType());
	    appointment.setServiceType(request.getServiceType());
	    appointment.setAppointmentDate(request.getAppointmentDate());
	    appointment.setRemarks(request.getRemarks());
	    appointment.setStatus("pending");
	    appointment.setMyUser(currentUser);

	    Appointment saved = appointmentDao.save(appointment);

	    // Map to AppointmentResponse DTO
	    AppointmentResponse response = new AppointmentResponse();
	    response.setAppointmentId(saved.getId());
	    response.setVehicleType(saved.getVehicleType());
	    response.setServiceType(saved.getServiceType());
	    response.setAppointmentDate(saved.getAppointmentDate());
	    response.setStatus(saved.getStatus());
	    response.setRemarks(saved.getRemarks());

	    return response;
	}
	
	//==================User can view his appointments====================//
	@Override
	public List<AppointmentResponse> getAppointmentsForCurrentUser() {
		User currentUser = getCurrentUser();
		List<Appointment> list = appointmentDao.findByMyUser(currentUser);
		return list.stream()
				.map(this::mapToResponse)
				.collect(Collectors.toList());
	}
	
	private AppointmentResponse mapToResponse(Appointment appointment) {
	    AppointmentResponse response = new AppointmentResponse();
	    response.setAppointmentId(appointment.getId());
	    response.setVehicleType(appointment.getVehicleType());
	    response.setServiceType(appointment.getServiceType());
	    response.setAppointmentDate(appointment.getAppointmentDate());
	    response.setStatus(appointment.getStatus());
	    response.setRemarks(appointment.getRemarks());
	    return response;
	}
	//==================User can update his appointment date====================//
	@Override
	public AppointmentResponse updateAppointmentDate(Long appointmentId, LocalDate newDate) {
		Appointment appointment = appointmentDao.findById(appointmentId)
				.orElseThrow(()-> new ResourceNotFoundException("Appointment not found"));
		
		if(!appointment.getMyUser().getEmail().equals(getCurrentUser().getEmail())) {
			throw new AccessDeniedException("Unauthorized update");
		}
		
		if (!appointment.getStatus().equalsIgnoreCase("pending")) {
	        throw new IllegalStateException("Cannot update a non-pending appointment");
	    }
		
		appointment.setAppointmentDate(newDate);
		return mapToResponse(appointmentDao.save(appointment));
	}
	
	//==================User can delete his appointment ====================//
	@Override
	public ApiResponse deleteAppointment(Long appointmentId) {
		Appointment appointment = appointmentDao.findById(appointmentId)
				.orElseThrow(()-> new ResourceNotFoundException("Appointment not found"));
		
		if(!appointment.getMyUser().getEmail().equals(getCurrentUser().getEmail())) {
			throw new AccessDeniedException("Unauthorized delete");
		}
		
		if (!appointment.getStatus().equalsIgnoreCase("pending")) {
	        throw new IllegalStateException("Cannot delete a non-pending appointment");
	    }
		
		appointmentDao.delete(appointment);
		return new ApiResponse("Appointment deleted....");
	}
	
	//==================Admin can delete user appointment using id====================//
	@Override
	public ApiResponse deleteAppointmentById(Long appointmentId) {
		Appointment appointment = appointmentDao.findById(appointmentId)
				.orElseThrow(() -> new ResourceNotFoundException("Appointment not found with id: " + appointmentId));
		appointmentDao.delete(appointment);
		return new ApiResponse("Appointment deleted....");
	}
	
	//==================Admin can update user appointment using id====================//
	@Override
	public ApiResponse updateAppointmentDateByAdmin(Long appointmentId, LocalDate newAppointmentDate) {
		Appointment appointment = appointmentDao.findById(appointmentId)
				.orElseThrow(() -> new ResourceNotFoundException("Appointment not found with id: " + appointmentId));
		appointment.setAppointmentDate(newAppointmentDate);
		appointmentDao.save(appointment);
		return new ApiResponse("Appointment date updated....");
	}
	
	
	
	

}
