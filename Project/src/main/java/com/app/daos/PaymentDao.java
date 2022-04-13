package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Payment;

public interface PaymentDao extends JpaRepository<Payment, Integer> {
	Payment findById(int id);
	
	 @Query ("select p.id from Payment p WHERE p.user_id = ?1")
	  int findIdByUserId(int id);
	  
}
