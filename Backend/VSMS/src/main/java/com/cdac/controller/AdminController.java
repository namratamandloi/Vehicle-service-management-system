package com.cdac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dao.AppointmentDao;
import com.cdac.dao.ContactUsDao;
import com.cdac.dao.UserDao;
import com.cdac.dto.UpdateAppointmentDateRequestByAdmin;
import com.cdac.entities.Appointment;
import com.cdac.entities.ContactUs;
import com.cdac.entities.User;
import com.cdac.service.AppointmentService;

@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private AppointmentDao appointmentDao;
	
	@Autowired
	private AppointmentService appointmentService;
	
	
	@Autowired
	private ContactUsDao contactUsDao;
	
	
	//===================Getting all users by Admin API mapping===========================//
	@GetMapping("/users")
	public ResponseEntity<List<User>> getAllUsers(){
		return ResponseEntity.ok(userDao.findAll());
	}
	
	//===================Getting all Appointments by Admin API mapping=====================//
	@GetMapping("/appointments")
	public ResponseEntity<List<Appointment>> getAllAppointments(){
		return ResponseEntity.ok(appointmentDao.findAll());
	}
	
	//===================Deleting appointment by Admin API mapping=======================//
	@DeleteMapping("/appointments/{appointmentId}")
	public ResponseEntity<String> deleteAppointment(@PathVariable Long appointmentId){
		appointmentService.deleteAppointmentById(appointmentId);
		return ResponseEntity.ok("Appointment deleted successfully.");
	}
	
	//===================Updating appointment date by Admin API mapping====================//
	@PutMapping("/appointments/{appointmentId}/update-date")
	public ResponseEntity<String> updateAppointmentDateByAdmin(@PathVariable Long appointmentId, @RequestBody UpdateAppointmentDateRequestByAdmin request){
		appointmentService.updateAppointmentDateByAdmin(appointmentId, request.getNewAppointmentDate());
		return ResponseEntity.ok("Appointment date updated successfully.");
	}
	
	//===================See all the Contact_Us Messages===============================//
	@GetMapping("/messages")
	public ResponseEntity<List<ContactUs>> getAllMessages(){
		return ResponseEntity.ok(contactUsDao.findAll()); 
    }
}

