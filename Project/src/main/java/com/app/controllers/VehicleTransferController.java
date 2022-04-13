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

import com.app.daos.VehicleTransferDao;
import com.app.dtos.Response;
import com.app.entities.User;
import com.app.entities.VehicleTransfer;
import com.app.services.EmailSenderServiceImpl;
import com.app.services.UserServiceImpl;
import com.app.services.VehicleRegistrationServiceImpl;
import com.app.services.VehicleTransferServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/vehicle_transfer/")
public class VehicleTransferController {
	@Autowired
	private VehicleTransferDao transferDao;

	@Autowired
	private VehicleTransferServiceImpl vehicleTransferServiceImpl;

	@Autowired
	VehicleRegistrationServiceImpl vehicleRegistrationServiceImpl;

	@Autowired
	private EmailSenderServiceImpl emailSenderService;

	@Autowired
	private UserServiceImpl userServiceImpl;

	@GetMapping("/search")
	public ResponseEntity<?> findVehicletransfer() {
		List<VehicleTransfer> result = new ArrayList<>();
		result = vehicleTransferServiceImpl.findAllVehicleTransfer();

		return Response.success(result);
	}

	@GetMapping("/{id}")
	public ResponseEntity<VehicleTransfer> getVehicleTransferById(@PathVariable int id) {
		VehicleTransfer vehicleTransfer = vehicleTransferServiceImpl.findById(id);
		if (vehicleTransfer == null) {
			return (ResponseEntity<VehicleTransfer>) Response.error("Transfer not exist with id :" + id);
		}
		vehicleTransfer.setVehicleRegistration1(
				vehicleRegistrationServiceImpl.findBYId(Integer.parseInt(vehicleTransfer.getRegistration_id())));
//				.orElseThrow(() -> new ResourceNotFoundException("Transfer not exist with id :" + id));
		return ResponseEntity.ok(vehicleTransfer);
	}

	@GetMapping("/byUserId/{id}")
	public ResponseEntity<VehicleTransfer> getVehicleTransferById1(@PathVariable int id) {

		VehicleTransfer vt = vehicleTransferServiceImpl.findLLBYUserId(id);
		System.out.println(vt);
		if (vt == null) {
			return (ResponseEntity<VehicleTransfer>) Response.error("Transfer not exist with user_id :" + id);
		}
//				.orElseThrow(() -> new ResourceNotFoundException("DrivingLicence not exist with temp_ll_id :" + id));
		return ResponseEntity.ok(vt);
	}

	@PostMapping("/add_vehicleTransfer")
	public ResponseEntity<?> addRc(@RequestBody VehicleTransfer vehicleTransfer) {
		VehicleTransfer transfer = vehicleTransferServiceImpl.saveVehicleTransfer(vehicleTransfer);

//		transfer.setVehicleRegistration1(vehicleTransferServiceImpl.findVRegistrationByReg_no(vehicleTransfer.getRegistration_no()));
//		System.out.println(transfer.getVehicleRegistration1());
		if (transfer == null)
			return Response.error("vehicle_transfer  is not empty");
		return Response.success(transfer);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteVehicleTransfer(@PathVariable int id) {
		VehicleTransfer transfer = vehicleTransferServiceImpl.findById(id);
		if (transfer == null) {
			return (ResponseEntity<Map<String, Boolean>>) Response.error("Vehicle not  exist for transfer id :" + id);
		}
//				.orElseThrow(() -> new ResourceNotFoundException("Transfer not exist with id :" + id));

		transferDao.delete(transfer);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);

	}

	@PutMapping("/{id}")
	public ResponseEntity<VehicleTransfer> updateVehicleTransfer(@PathVariable int id,
			@RequestBody VehicleTransfer transferDetails) throws MessagingException {
		VehicleTransfer transfer = vehicleTransferServiceImpl.findById(id);
		if (transfer == null) {
			return (ResponseEntity<VehicleTransfer>) Response.error("vehicle transfer not exist with id :" + id);
		}
		User user = userServiceImpl.findUserFromdbById(transfer.getUser_id());
		System.out.println(user);
		transfer.setStatus(transferDetails.getStatus());

		vehicleTransferServiceImpl.updateVTransfer(transfer.getStatus(), transfer.getId());
		// EMAIL SERVICE
		if (transfer.getStatus().equalsIgnoreCase("Approved")) {
			// if approved then sends the mail to the applicant
			emailSenderService.sendSimpleEmail(user.getEmail(), "Dear " + user.getName() + ",\n\n"
					+ "Congratulations, Your Vehicle transfer is Approved  .\n"
					+ "You can Check status of it from RTO MANAGEMENT WEBSITE and also Your Transfer Certificate will be delivered within 15 workingdays at your registered Address.\n"
					+ "\n" + "Warm Regards,\n" + "RTO Info Group,\n" + "\n" + "Thank You for Using our services",
					"Your Vehicle Transfer request is approved");
//					 emailSenderService.sendSimpleEmail("shubhamja3333@gmail.com", "This is the mail from Spring boot app", "spring email testing");
		}
		return ResponseEntity.ok(transfer);
	}

}
