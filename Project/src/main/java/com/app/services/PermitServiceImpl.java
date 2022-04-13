package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.PermitDao;
import com.app.entities.Permit;
import com.app.entities.Puc;
import com.app.entities.VehicleRegistration;

@Transactional
@Service
public class PermitServiceImpl {

	@Autowired
	PermitDao permitDao;
	@Autowired
	VehicleRegistrationServiceImpl vehicleRegistrationServiceImpl;

	public Permit findBYId(int permit_id) {
		Permit permit = permitDao.findByid(permit_id);
		return permit;
	}

	public List<Permit> findAllPermits() {
		List<Permit> permitList = permitDao.findAll();
		return permitList;
	}

	public Permit savePermit(Permit permit) {
		Permit newPermit = findBYId(permit.getId());
		if (newPermit != null)
			return null;
		Permit permit2 = permitDao.save(permit);
		return permit2;
	}

	public void updatePermit(String registration_no,String status,int id) {
		permitDao.updatePermit(registration_no, status, id);
	}
	
	public VehicleRegistration findVRegistrationByRegId(int regId) {
		
		return vehicleRegistrationServiceImpl.findBYId(regId);
	}
	public Permit findLLBYUserId(int user_id) {

		int pId = permitDao.findIdByUserId(user_id);

		Permit p =permitDao.findByid(pId);
		return p;
	
	}
	
}
