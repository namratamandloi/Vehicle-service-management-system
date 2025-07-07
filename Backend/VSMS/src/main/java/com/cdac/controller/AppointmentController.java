package com.cdac.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.custom_exceptions.UnauthorizedException;
import com.cdac.dto.AppointmentRequest;
import com.cdac.dto.AppointmentResponse;
import com.cdac.dto.UpdateAppointmentDateRequestByAdmin;
import com.cdac.entities.Appointment;
import com.cdac.service.AppointmentService;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {
	
	@Autowired
	private AppointmentService appointmentService;
	//=====================Booking appointment API mapping===========================//
	@PostMapping("/book")
	public ResponseEntity<?> bookAppointment(@RequestBody AppointmentRequest request) {
	    try {
	        AppointmentResponse response = appointmentService.bookAppointment(request);
	        return ResponseEntity.ok(response);
	    } catch (UnauthorizedException e) {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error booking appointment");
	    }
	}
	//===================Users past appointments API mapping===========================//
	@GetMapping("/my")
	public ResponseEntity<?> getMyAppointments(){
		List<AppointmentResponse> list =appointmentService.getAppointmentsForCurrentUser();
		return ResponseEntity.ok(list);
	}
	
	//=========================Updating appointment by user API mapping===================//
	@PutMapping("/{appointmentId}")
	public ResponseEntity<?> updateAppointmentDate(@PathVariable Long appointmentId, @RequestBody LocalDate newDate){
		AppointmentResponse updated = appointmentService.updateAppointmentDate(appointmentId, newDate);
		return ResponseEntity.ok(updated);
	}
	
	//===================Deleting appointment by user API mapping=========================//
	@DeleteMapping("/{appointmentId}")
	public ResponseEntity<?> deleteAppointment(@PathVariable Long appointmentId){
		appointmentService.deleteAppointment(appointmentId);
		return ResponseEntity.ok("Appointment deleted successfully");
	}

}
