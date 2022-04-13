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

import com.app.daos.DlDao;
import com.app.dtos.Response;
import com.app.entities.DrivingLicence;
import com.app.entities.User;
import com.app.services.DlServiceImpl;
import com.app.services.EmailSenderServiceImpl;
import com.app.services.UserServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/dl/")
public class DlController {

	@Autowired
	private DlDao dlDao;

	@Autowired
	private DlServiceImpl dlServiceImpl;

	
	@Autowired
	private UserServiceImpl userServiceImpl;
	
	@Autowired
	private EmailSenderServiceImpl emailSenderService;
	
	
	
	@GetMapping("/search")
	public ResponseEntity<?> findDl() {
		List<DrivingLicence> result = new ArrayList<>();
		result = dlServiceImpl.findAllDls();
		return Response.success(result);
	}

	@GetMapping("/{id}")
	public ResponseEntity<DrivingLicence> getDrivingLicenceById(@PathVariable int id) {
		DrivingLicence dl = dlServiceImpl.findBYId(id);
		if (dl == null) {
			return (ResponseEntity<DrivingLicence>) Response.error("DrivingLicence not exist with dl_id :" + id);
		}
//				.orElseThrow(() -> new ResourceNotFoundException("DrivingLicence not exist with dl_id :" + id));
		return ResponseEntity.ok(dl);
	}
	@GetMapping("/byUserId/{id}")
	public ResponseEntity<DrivingLicence> getDrivingLicenceById1(@PathVariable int id) {
		
		DrivingLicence dl = dlServiceImpl.findLLBYUserId(id);
		System.out.println(dl);
		if (dl == null) {
			return (ResponseEntity<DrivingLicence>) Response.error("DrivingLicence not exist with dl_Userid  :" + id);
		}
//				.orElseThrow(() -> new ResourceNotFoundException("DrivingLicence not exist with temp_ll_id :" + id));
		return ResponseEntity.ok(dl);
	}

	@PostMapping("/add_dl")
	public ResponseEntity<?> addRc(@RequestBody DrivingLicence drivingLicence) {
		DrivingLicence dl = dlServiceImpl.saveDl(drivingLicence);
//		System.out.println(result);
		if (dl == null)
			return Response.error("DrivingLicence is empty");
		return Response.success(dl);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteDl(@PathVariable int id) {
		DrivingLicence dl = dlServiceImpl.findBYId(id);
		if (dl == null) {
			return (ResponseEntity<Map<String, Boolean>>) Response.error("DrivingLicence not exist with dl_id :" + id);
		}

		dlDao.delete(dl);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	@PutMapping("/{id}")
	public ResponseEntity<DrivingLicence> updateUser(@PathVariable int id, @RequestBody DrivingLicence dlDetails) throws MessagingException {
		DrivingLicence dl = dlServiceImpl.findBYId(id);
		if (dl == null) {
			return (ResponseEntity<DrivingLicence>) Response.error("DrivingLicence not exist with dl_id :" + id);
		}
		
//		User user=userServiceImpl.findUserFromdbById(dl.getUser_id());
//				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
		User user =userServiceImpl.findUserFromdbById(dl.getUser_id());
		dl.setUser(user);
		dl.setDl_no(dlDetails.getDl_no());
		dl.setDl_issue_date(dlDetails.getDl_issue_date());
		dl.setDl_expiry_date(dlDetails.getDl_expiry_date());
		dl.setStatus(dlDetails.getStatus());
		
		dlServiceImpl.updateDl(dl.getDl_no(), dl.getDl_issue_date(),dl.getDl_expiry_date(),dl.getStatus(),dl.getId());
		

if (dl.getStatus().equalsIgnoreCase("Approved")) {
			// if approved then sends the mail to the applicant
			emailSenderService.sendSimpleEmail(user.getEmail(), "Dear " + user.getName() + ",\n\n"
					+ "Congratulations, Your Driving Licence is Approved  .\n"
					+ "You can Check status of it from RTO MANAGEMENT WEBSITE  and also Your Driving Licence will be Delivered On Your Registered Address .\n"
					+ "\n" + "Warm Regards,\n" + "RTO Info Group,\n" + "\n" + "Thank You for Using our services",
					"Your Driving Licence request is approved");
		}
	
		return ResponseEntity.ok(dl);
	}
}
