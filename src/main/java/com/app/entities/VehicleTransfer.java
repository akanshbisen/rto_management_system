package com.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "vehicle_transfer")
public class VehicleTransfer {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "transfer_id")
	private int id;
	private String transfer_no;
	private String new_owner;
	private long new_owner_aadhar;

	private String new_owner_email;
	private long new_owner_mobile;
	private String status="pending..";
	private  int payment_id=4;
	private String registration_id;
	private String registration_no;
	private int user_id;
	public String getTransfer_no() {
		return transfer_no;
	}

	public void setTransfer_no(String transfer_no) {
		this.transfer_no = transfer_no;
	}

	
//	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL)
	private VehicleRegistration vehicleRegistration1;
	
//	@JsonIgnore
	@OneToOne
	@JoinColumn(name = "payment_no",insertable = false)
	private Payment payment;
//	@Column(insertable = false)
	
	public VehicleTransfer() {
	}



public VehicleTransfer(int id, String transfer_no, String new_owner, long new_owner_aadhar, String new_owner_email,
			long new_owner_mobile, String status, int payment_id, String registration_id, String registration_no,
			int user_id, VehicleRegistration vehicleRegistration1, Payment payment) {
		super();
		this.id = id;
		this.transfer_no = transfer_no;
		this.new_owner = new_owner;
		this.new_owner_aadhar = new_owner_aadhar;
		this.new_owner_email = new_owner_email;
		this.new_owner_mobile = new_owner_mobile;
		this.status = status;
		this.payment_id = payment_id;
		this.registration_id = registration_id;
		this.registration_no = registration_no;
		this.user_id = user_id;
		this.vehicleRegistration1 = vehicleRegistration1;
		this.payment = payment;
	}





public String getRegistration_no() {
	return registration_no;
}

public void setRegistration_no(String registration_no) {
	this.registration_no = registration_no;
}

public String getRegistration_id() {
	return registration_id;
}

public void setRegistration_id(String registration_id) {
	this.registration_id = registration_id;
}

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getNew_owner() {
	return new_owner;
}

public void setNew_owner(String new_owner) {
	this.new_owner = new_owner;
}

public long getNew_owner_aadhar() {
	return new_owner_aadhar;
}

public void setNew_owner_aadhar(long new_owner_aadhar) {
	this.new_owner_aadhar = new_owner_aadhar;
}

public String getNew_owner_email() {
	return new_owner_email;
}

public void setNew_owner_email(String new_owner_email) {
	this.new_owner_email = new_owner_email;
}

public long getNew_owner_mobile() {
	return new_owner_mobile;
}

public void setNew_owner_mobile(long new_owner_mobile) {
	this.new_owner_mobile = new_owner_mobile;
}

public String getStatus() {
	return status;
}

public void setStatus(String status) {
	this.status = status;
}

public int getPayment_id() {
	return payment_id;
}

public void setPayment_id(int payment_id) {
	this.payment_id = payment_id;
}

public VehicleRegistration getVehicleRegistration1() {
	return vehicleRegistration1;
}

public void setVehicleRegistration1(VehicleRegistration vehicleRegistration1) {
	this.vehicleRegistration1 = vehicleRegistration1;
}

public Payment getPayment() {
	return payment;
}

public void setPayment(Payment payment) {
	this.payment = payment;
}



public int getUser_id() {
	return user_id;
}

public void setUser_id(int user_id) {
	this.user_id = user_id;
}

@Override
public String toString() {
	return String.format(
			"VehicleTransfer [id=%s, transfer_no=%s, new_owner=%s, new_owner_aadhar=%s, new_owner_email=%s, new_owner_mobile=%s, status=%s, payment_id=%s, registration_id=%s, registration_no=%s, user_id=%s, vehicleRegistration1=%s, payment=%s]",
			id, transfer_no, new_owner, new_owner_aadhar, new_owner_email, new_owner_mobile, status, payment_id,
			registration_id, registration_no, user_id, vehicleRegistration1, payment);
}



	
}
