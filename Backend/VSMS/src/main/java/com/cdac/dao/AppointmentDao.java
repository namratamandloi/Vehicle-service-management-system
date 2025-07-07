package com.cdac.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entities.Appointment;
import com.cdac.entities.User;

public interface AppointmentDao extends JpaRepository<Appointment, Long> {

	List<Appointment> findByMyUser(User currentUser);

}
