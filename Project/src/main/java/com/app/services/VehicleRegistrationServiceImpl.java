package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.app.daos.VehicleRegistrationDao;
import com.app.entities.VehicleRegistration;
import com.app.entities.VehicleTransfer;

@Transactional
@Service
public class VehicleRegistrationServiceImpl {
	
	@Autowired
	VehicleRegistrationDao vehicleRegistrationDao;
	
	public VehicleRegistration findBYId(int reg_id) {
		VehicleRegistration vehicleRegistration=vehicleRegistrationDao.findByid(reg_id);
		return vehicleRegistration;
	}
	
	public List<VehicleRegistration> findAllVehicleReg(){
		List<VehicleRegistration>vehicleRegList=vehicleRegistrationDao.findAll();
		return vehicleRegList;
	}
	
	public VehicleRegistration saveVehicleReg(VehicleRegistration vehicleRegistration) {
		VehicleRegistration newVehicleReg=findBYId(vehicleRegistration.getId());
		if(newVehicleReg != null) {
			
//				if(findByregistration_no(vehicleRegistration.getRegistration_no())!=null) {
//					return null;
//				}
			return null;
		}
		VehicleRegistration vehicleRegistration2=vehicleRegistrationDao.save(vehicleRegistration);
		return vehicleRegistration;
	}
	
	
	
	public void updateRc(String registration_no, int insurance_status,String status,int id)
	{
		vehicleRegistrationDao.updateRc(registration_no, insurance_status, status, id);
	}
	
	
	
	
	
	public void deleteRC(VehicleRegistration RC) {
		
		vehicleRegistrationDao.delete(RC);
	}
	
	public VehicleRegistration findByregistration_no(String reg_no) {
		int vehicle_id=0;
		try {
			
		 vehicle_id= vehicleRegistrationDao.findIdByregistration_no(reg_no);
		}
		catch(DataIntegrityViolationException e) {
			
		}
		VehicleRegistration vehiclereg=vehicleRegistrationDao.findByid(vehicle_id);
		
		return vehiclereg;
	}
	
	
	public VehicleRegistration findLLBYUserId(int user_id) {

		int vrId = vehicleRegistrationDao.findIdByUserId(user_id);

		VehicleRegistration vr =vehicleRegistrationDao.findByid(vrId);

		return vr;
	}
}
