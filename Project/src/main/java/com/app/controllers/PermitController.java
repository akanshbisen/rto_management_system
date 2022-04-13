package com.app.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.daos.PermitDao;
import com.app.dtos.Response;
import com.app.entities.Permit;
import com.app.entities.User;
import com.app.services.EmailSenderServiceImpl;
import com.app.services.PermitServiceImpl;
import com.app.services.UserServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/permit/")
public class PermitController {

	@Autowired
	private PermitDao permitDao;

	@Autowired
	private PermitServiceImpl permitServiceImpl;
	
	@Autowired
	private EmailSenderServiceImpl emailSenderService;
	
	@Autowired
	private UserServiceImpl userServiceImpl;


	@GetMapping("/search")
	public ResponseEntity<?> findPermit() {
		List<Permit> result = new ArrayList<>();
		result = permitServiceImpl.findAllPermits();
		return Response.success(result);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Permit> getPermitById(@PathVariable int id) {
		Permit permit = permitServiceImpl.findBYId(id);
		if (permit == null) {
			return (ResponseEntity<Permit>) Response.error("Permit not exist with id :" + id);
		}
//		.orElseThrow(() -> new ResourceNotFoundException("Permit not exist with id :" + id));
		return ResponseEntity.ok(permit);
	}
	
	@GetMapping("/byUserId/{id}")
	public ResponseEntity<Permit> getPermitById1(@PathVariable int id) {
		
		Permit p = permitServiceImpl.findLLBYUserId(id);
		System.out.println(p);
		if (p == null) {
			return (ResponseEntity<Permit>) Response.error("Permit not exist with user_id :" + id);
		}
//				.orElseThrow(() -> new ResourceNotFoundException("DrivingLicence not exist with temp_ll_id :" + id));
		return ResponseEntity.ok(p);
	}

	@PostMapping("/add_permit")
	public ResponseEntity<?> addPermit(@RequestBody Permit permit) {
		Permit permission = permitServiceImpl.savePermit(permit);
		
		permission.setVehicleRegistration(permitServiceImpl.findVRegistrationByRegId(permit.getRegistration_id()));
		System.out.println(permission);
		if (permission == null)
			return Response.error("permit not is empty");
		return Response.success(permission);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePermit(@PathVariable int id) {
		Permit permit = permitServiceImpl.findBYId(id);
		if (permit == null) {
			return (ResponseEntity<Map<String, Boolean>>) Response.error("Permit not exist with id :" + id);
		}
//				.orElseThrow(() -> new ResourceNotFoundException("Permit not exist with id :" + id));

		permitDao.delete(permit);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Permit> updateUser(@PathVariable int id, @RequestBody Permit permission) throws MessagingException {
		Permit permit = permitServiceImpl.findBYId(id);
		if (permit == null) {
			return (ResponseEntity<Permit>) Response.error("Permit not exist with id :" + id);
		}
//				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));

		User user=userServiceImpl.findUserFromdbById(permit.getUser_id());
			System.out.println(user);

		permit.setPermit_no(permission.getPermit_no());
//		permit.setFrom_state(permission.getFrom_state());
//		permit.setTo_state(permission.getTo_state());
//		permit.setFrom_date(permission.getFrom_date());
//		permit.setTo_date(permission.getTo_date());
		permit.setStatus(permission.getStatus());
		
		permitServiceImpl.updatePermit(permit.getPermit_no(), permit.getStatus(),permit.getId());
		

if (permit.getStatus().equalsIgnoreCase("Approved")) {
			// if approved then sends the mail to the applicant
			emailSenderService.sendSimpleEmail(user.getEmail(), "Dear " + user.getName() + ",\n\n"
					+ "Congratulations, Your Permit is Approved  .\n"
					+ "You can Check its status On RTO MANAGEMENT WEBSITE  and also Your Permit Certificate will be Available on website and Will be delevered at your registered Address.\n"
					+ "\n" + "Warm Regards,\n" + "RTO Info Group,\n" + "\n" + "Thank You for Using our services",
					"Your Permit request is approved");
//					 emailSenderService.sendSimpleEmail("shubhamja3333@gmail.com", "This is the mail from Spring boot app", "spring email testing");
		}
		return ResponseEntity.ok(permit);
	}
}
