package com.cdac.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cdac.dao.ContactUsDao;
import com.cdac.dto.ContactUsRequest;
import com.cdac.entities.ContactUs;

@Service
@Transactional
public class ContactUsServiceImpl implements ContactUsService {
	
	@Autowired
	private ContactUsDao contacUsDao;

	@Override
	public String register(ContactUsRequest request) {
		
		ContactUs contactUs = new ContactUs();
		contactUs.setName(request.getName());
		contactUs.setEmail(request.getEmail());
		contactUs.setMessage(request.getMessage());
		
		contacUsDao.save(contactUs);
		return "Message send successfully";
	}
	

}
