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

@Entity
//@Table(name = "dl_table",uniqueConstraints = @UniqueConstraint(name= "ddl_no",columnNames = {"dl_no"} ))
@Table(name = "dl_table")
public class DrivingLicence {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "dl_id")
	private int id;
	private int dl_no;
	private  int payment_id=2;
	private String status="Pending..";
	private int user_id;
	private String L_category;
	private String rto;
	@OneToOne(cascade = CascadeType.MERGE)
	private  User user;
	@Temporal(TemporalType.DATE)
	private Date dl_issue_date;
	@Temporal(TemporalType.DATE)
	private Date dl_expiry_date;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "temp_LL_no")
	private LearningLicence learningLicence;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "payment_no")
	private Payment payment;

	public DrivingLicence() {
	}

	
	public DrivingLicence(int id, int dl_no, int payment_id, String status, int user_id, String l_category, String rto,
			User user, Date dl_issue_date, Date dl_expiry_date, LearningLicence learningLicence, Payment payment) {
		super();
		this.id = id;
		this.dl_no = dl_no;
		this.payment_id = payment_id;
		this.status = status;
		this.user_id = user_id;
		L_category = l_category;
		this.rto = rto;
		this.user = user;
		this.dl_issue_date = dl_issue_date;
		this.dl_expiry_date = dl_expiry_date;
		this.learningLicence = learningLicence;
		this.payment = payment;
	}


	public String getRto() {
		return rto;
	}


	public void setRto(String rto) {
		this.rto = rto;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getDl_no() {
		return dl_no;
	}

	public void setDl_no(int dl_no) {
		this.dl_no = dl_no;
	}

	public int getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getL_category() {
		return L_category;
	}

	public void setL_category(String l_category) {
		L_category = l_category;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Date getDl_issue_date() {
		return dl_issue_date;
	}

	public void setDl_issue_date(Date dl_issue_date) {
		this.dl_issue_date = dl_issue_date;
	}

	public Date getDl_expiry_date() {
		return dl_expiry_date;
	}

	public void setDl_expiry_date(Date dl_expiry_date) {
		this.dl_expiry_date = dl_expiry_date;
	}

	public LearningLicence getLearningLicence() {
		return learningLicence;
	}

	public void setLearningLicence(LearningLicence learningLicence) {
		this.learningLicence = learningLicence;
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
				"DrivingLicence [id=%s, dl_no=%s, payment_id=%s, status=%s, user_id=%s, L_category=%s, user=%s, dl_issue_date=%s, dl_expiry_date=%s, learningLicence=%s, payment=%s]",
				id, dl_no, payment_id, status, user_id, L_category, user, dl_issue_date, dl_expiry_date,
				learningLicence, payment);
	}

	

}
