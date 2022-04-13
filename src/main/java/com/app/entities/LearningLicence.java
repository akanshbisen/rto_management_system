package com.app.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

import org.springframework.beans.factory.annotation.Autowired;

import com.app.services.UserServiceImpl;

@Entity
//@Table(name = "ll_table",uniqueConstraints = @UniqueConstraint(name= "ltempLLNo",columnNames = {"tempLLNo"} ))
@Table(name = "ll_table")
public class LearningLicence {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "temp_ll_id")
	private int id;
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int tempLLNo;
	private String rto;
	@Temporal(TemporalType.DATE)
	private Date issue_date;
	@Temporal(TemporalType.DATE)
	private Date expiry_date;
	private String L_category;
	private  int payment_id=1;
	private int user_id;
	
	private String status="Pending..";
	@OneToOne(cascade = CascadeType.MERGE)
	private User user ;
	@OneToOne(cascade = CascadeType.MERGE)
//	@JoinColumn(name = "payment_no")
	private Payment payment;
	
	
	


	public LearningLicence() {
		
	}

	public LearningLicence(int id, int tempLLNo, String rto, Date issue_date, Date expiry_date, String l_category,
			int payment_id, int user_id, String status, User user, Payment payment) {
		super();
		this.id = id;
		this.tempLLNo = tempLLNo;
		this.rto = rto;
		this.issue_date = issue_date;
		this.expiry_date = expiry_date;
		this.L_category = l_category;
		this.payment_id = payment_id;
		this.user_id = user_id;
		this.status = status;
		this.user = user;
		this.payment = payment;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getTempLLNo() {
		return tempLLNo;
	}

	public void setTempLLNo(int tempLLNo) {
		this.tempLLNo = tempLLNo;
	}

	public String getRto() {
		return rto;
	}

	public void setRto(String rto) {
		this.rto = rto;
	}

	public Date getIssue_date() {
		return issue_date;
	}

	public void setIssue_date(Date issue_date) {
		this.issue_date = issue_date;
	}

	public Date getExpiry_date() {
		return expiry_date;
	}

	public void setExpiry_date(Date expiry_date) {
		this.expiry_date = expiry_date;
	}

	public String getL_category() {
		return L_category;
	}

	public void setL_category(String l_category) {
		L_category = l_category;
	}

	public int getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(int payment_id) {
		
		this.payment_id = payment_id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user=user;
		
	}

	public Payment getPayment() {
		return payment;
	}

	public void setPayment(Payment payment) {
		this.payment = payment;
	}

	@Override
	public String toString() {
		return String.format(
				"LearningLicence [id=%s, tempLLNo=%s, rto=%s, issue_date=%s, expiry_date=%s, L_category=%s, payment_id=%s, user_id=%s, status=%s, user=%s, payment=%s]",
				id, tempLLNo, rto, issue_date, expiry_date, L_category, payment_id, user_id, status, user, payment);
	}

	
		
}
