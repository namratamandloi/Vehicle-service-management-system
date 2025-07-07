package com.cdac.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entities.ContactUs;

public interface ContactUsDao extends JpaRepository<ContactUs, Long> {

}
