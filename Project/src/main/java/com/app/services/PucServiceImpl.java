package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.PucDao;
import com.app.entities.Puc;
import com.app.entities.VehicleRegistration;

@Transactional
@Service
public class PucServiceImpl {

	@Autowired
	PucDao pucDao;
	
	@Autowired
	VehicleRegistrationServiceImpl vehicleRegistrationServiceImpl;

	public Puc findBYId(int puc_id) {
		Puc puc = pucDao.findById(puc_id);
		return puc;
	}

	public List<Puc> findAllPucs() {
		List<Puc> pucList = pucDao.findAll();
		return pucList;
	}

	public Puc savePuc(Puc puc) {
		Puc newPuc = findBYId(puc.getId());
		if (newPuc != null)
			return null;
		Puc puc2 = pucDao.save(puc);
		return puc;
	}
	
	public void updatePuc(String registration_no,String status,int id) {
		pucDao.updatePuc(registration_no, status, id);
	}
	
public VehicleRegistration findVRegistrationByRegId(int regId) {
		
		return vehicleRegistrationServiceImpl.findBYId(regId);
	}

public Puc findLLBYUserId(int user_id) {

	int pId = pucDao.findIdByUserId(user_id);

	Puc p =pucDao.findById(pId);

	return p;
}

}
