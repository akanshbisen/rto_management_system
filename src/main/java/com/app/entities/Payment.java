package com.app.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.Transient;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "payment_table")
public class Payment {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "transaction_no")
	private int id;
	private String payment_for;
	private String payment_mode;
	private double amount;
	private int user_id;
	@Temporal(TemporalType.DATE)
	private Date payment_date;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private User user;

//	@OneToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "registration_id")
//	private VehicleRegistration vehicleRegistration;

	public Payment() {
	}

	public Payment(int id, String payment_for, String payment_mode, double amount, int user_id, Date payment_date,
			User user) {
		super();
		this.id = id;
		this.payment_for = payment_for;
		this.payment_mode = payment_mode;
		this.amount = amount;
		this.user_id = user_id;
		this.payment_date = payment_date;
		this.user = user;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPayment_for() {
		return payment_for;
	}

	public void setPayment_for(String payment_for) {
		this.payment_for = payment_for;
	}

	public String getPayment_mode() {
		return payment_mode;
	}

	public void setPayment_mode(String payment_mode) {
		this.payment_mode = payment_mode;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public Date getPayment_date() {
		return payment_date;
	}

	public void setPayment_date(Date payment_date) {
		this.payment_date = payment_date;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return String.format(
				"Payment [id=%s, payment_for=%s, payment_mode=%s, amount=%s, user_id=%s, payment_date=%s, user=%s]", id,
				payment_for, payment_mode, amount, user_id, payment_date, user);
	}




	

}
