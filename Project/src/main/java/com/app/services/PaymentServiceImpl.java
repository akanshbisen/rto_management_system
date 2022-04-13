package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.PaymentDao;
import com.app.entities.Payment;
import com.app.entities.Permit;

@Transactional
@Service
public class PaymentServiceImpl {

	@Autowired
	PaymentDao paymentDao;

	public Payment findBYId(int transaction_no) {
		Payment payment = paymentDao.findById(transaction_no);
		return payment;
	}

	public List<Payment> findAllPayments() {
		List<Payment> paymentList = paymentDao.findAll();
		return paymentList;
	}

	public Payment savePayment(Payment payment) {
		Payment newPayment = findBYId(payment.getId());
//		Payment newPayment = paymentDao.save(payment);
//		if (payment == null)
//			return null;
		if (newPayment != null)
			return null;

		Payment payment2 = paymentDao.save(payment);
		return payment2;

	}

	public Payment findLLBYUserId(int user_id) {

		int pId = paymentDao.findIdByUserId(user_id);

		Payment p = paymentDao.findById(pId);
		return p;

	}

}
