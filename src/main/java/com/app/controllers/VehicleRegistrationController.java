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

import com.app.daos.VehicleRegistrationDao;
import com.app.dtos.Response;
import com.app.entities.User;
import com.app.entities.VehicleRegistration;
import com.app.entities.VehicleTransfer;
import com.app.services.EmailSenderServiceImpl;
import com.app.services.UserServiceImpl;
import com.app.services.VehicleRegistrationServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/rc/")
public class VehicleRegistrationController {
	
	
	
	@Autowired
	private VehicleRegistrationServiceImpl registrationServiceImpl;
	
	@Autowired
	private EmailSenderServiceImpl emailSenderService;
	
	@Autowired
	private UserServiceImpl userServiceImpl;
	
	@GetMapping("/search")
	public ResponseEntity<?> findVehicleRegistration() {
		List<VehicleRegistration> result = new ArrayList<>();
			result = registrationServiceImpl.findAllVehicleReg();
		return Response.success(result);
	}
	@GetMapping("/{id}")
	public ResponseEntity<VehicleRegistration> getVehicleRegById(@PathVariable int id) {
		VehicleRegistration vehicleReg = registrationServiceImpl.findBYId(id);
				if(vehicleReg==null) {
					return (ResponseEntity<VehicleRegistration>) Response.error("RC not exist with id :"+id);
				}
//				.orElseThrow(() -> new ResourceNotFoundException("Rc not exist with id :" + id));
		return ResponseEntity.ok(vehicleReg);
	}
	
	@GetMapping("/byUserId/{id}")
	public ResponseEntity<VehicleRegistration> getVehicleRegById1(@PathVariable int id) {
		
		VehicleRegistration vr = registrationServiceImpl.findLLBYUserId(id);
		System.out.println(vr);
		if (vr == null) {
			return (ResponseEntity<VehicleRegistration>) Response.error("RC not exist with user_id :" + id);
		}
//				.orElseThrow(() -> new ResourceNotFoundException("DrivingLicence not exist with temp_ll_id :" + id));
		return ResponseEntity.ok(vr);
	}
	
	@PostMapping("/add_rc")
	public ResponseEntity<?> addRc(@RequestBody VehicleRegistration vehiclereg) {
		
		
		VehicleRegistration rc = registrationServiceImpl.saveVehicleReg(vehiclereg);
//		System.out.println(result);
		if(rc==null)
			return Response.error("rc not is empty");
		return Response.success(rc);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteRc(@PathVariable int id){
		VehicleRegistration rc = registrationServiceImpl.findBYId(id);
		if(rc==null) {
			return (ResponseEntity<Map<String, Boolean>>) Response.error("RC not exist with id :"+id);
		}
//				.orElseThrow(() -> new ResourceNotFoundException("Rc not exist with id :" + id));
		else{
			
		registrationServiceImpl.deleteRC(rc);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		}
	
	}
	
//	@PutMapping("updateRc/{id}")
//	public ResponseEntity<VehicleRegistration> updateRC(@PathVariable int id, @RequestBody VehicleRegistration rcDetails){
//		VehicleRegistration rc = registrationServiceImpl.findBYId(id);
//		if(rc==null) {
//			return (ResponseEntity<VehicleRegistration>) Response.error("RC not exist with id :"+id);
//		}
////				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
//		
//		rc.setRegistration_no(rcDetails.getRegistration_no());
//		rc.setOwner(rcDetails.getOwner());
//		rc.setHypothecated_to(rcDetails.getHypothecated_to());
//		rc.setInsurance_status(rcDetails.getInsurance_status());
//		rc.setPuc_status(rcDetails.getPuc_status());
//		
//		VehicleRegistration updatedRC = registrationServiceImpl.saveVehicleReg(rc);
//		System.out.println(rc.getRegistration_no());
//		System.out.println(updatedRC);
////		if(rc.getRegistration_no()!=null) {
////			updatedRC.setStatus("Approved");
////		}else{
////			updatedRC.setStatus("pending..");
////			}
//
//		
//		return ResponseEntity.ok(updatedRC);
//	}
	@PutMapping("/{id}")
	public ResponseEntity<VehicleRegistration> updateRc(@PathVariable int id, @RequestBody VehicleRegistration rcDetails) throws MessagingException{
		VehicleRegistration rc = registrationServiceImpl.findBYId(id);
		if(rc==null) {
			return (ResponseEntity<VehicleRegistration>) Response.error("RC not exist with id :"+id);
		}
		User user=userServiceImpl.findUserFromdbById(rc.getUser_id());
		System.out.println(user);
		rc.setRegistration_no(rcDetails.getRegistration_no());
		rc.setInsurance_status(rcDetails.getInsurance_status());
		rc.setPuc_status(rcDetails.getPuc_status());
//		rc.setStatus(rcDetails.getStatus());
		
		System.out.println(rc.getRegistration_no());
		System.out.println(rc);
		if(rc.getRegistration_no()!=null) {
			rc.setStatus("Approved");
		}else{
			rc.setStatus("pending..");
		}
		registrationServiceImpl.updateRc(rc.getRegistration_no(), rc.getInsurance_status(),rc.getStatus(),rc.getId());
//EMAIL SERVICE
		if (rc.getStatus().equalsIgnoreCase("Approved")) {
			// if approved then sends the mail to the applicant
			emailSenderService.sendSimpleEmail(user.getEmail(), "Dear " + user.getName() 
					+ ",\n\n" + "Congratulations, Your RC is ready .\n"
					+ "You can download copy of it from RTO MANAGEMENT WEBSITE . and Your Rc will be delivered within 15 days at yor registered Address.\n"
					+ "\n" + "Warm Regards,\n" + "RTO Info Group,\n" + "\n" + "Love from Karad❤️",
					"Your RC approved");
		}
		return ResponseEntity.ok(rc);
	}
	
	
	
	
}
