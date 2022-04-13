package com.app.services;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.app.daos.LlDao;
import com.app.entities.LearningLicence;

@Transactional
@Service
public class LlServiceImpl {

	@Autowired
	LlDao llDao;

	@Autowired
	private UserServiceImpl userServiceImpl;
	
	public LearningLicence findBYId(int temp_ll_id) {
		LearningLicence ll = llDao.findByid(temp_ll_id);
		return ll;
	}

	public List<LearningLicence> findAllLls() {
		List<LearningLicence> llList = llDao.findAll();
		return llList;
	}

	public LearningLicence saveLl(LearningLicence ll) {
		LearningLicence newLl = findBYId(ll.getId());
		if (newLl != null)
			return null;
		ll.setUser(userServiceImpl.findUserFromdbById(ll.getUser_id()));
		LearningLicence ll2 = llDao.save(ll);
		return ll;
	}
	public LearningLicence findBytempLLNo(int tempLLNo) {
		
		return llDao.findBytempLLNo(tempLLNo);
		
	}
	
	public void updateLl(int  tempLLNo, Date issue_date,Date expiry_date,String status,int id) {
		try {
			
		llDao.updateLl(tempLLNo, issue_date, expiry_date, status, id);
		
		}catch(DataIntegrityViolationException e) 
		{
			
		}
	}
	
//	 int findIdByUserId(int id)
//	 {
//		 int lId=llDao.findIdByUserId(id);
//		 return lId;
//	 }
	 
	 public LearningLicence findLLBYUserId(int user_id) {
		 
		 int lId=llDao.findIdByUserId(user_id);
		 
		 LearningLicence ll = llDao.findByid(lId);
		 
		 return ll;
	 }

}