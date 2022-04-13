package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entities.VehicleRegistration;
@Repository
public interface VehicleRegistrationDao extends JpaRepository<VehicleRegistration,Integer> {
	
  VehicleRegistration findByid(int id);
  
  
  @Query ("select v.id from VehicleRegistration v WHERE v.registration_no = ?1")
  int findIdByregistration_no(String id);
  
  @Query ("select vr.id from VehicleRegistration vr WHERE vr.user_id = ?1")
  int findIdByUserId(int id);
  
  @Modifying
	@Query("UPDATE VehicleRegistration vr SET vr.registration_no=?1, vr.insurance_status=?2,vr.status=?3  WHERE vr.id=?4")
	public void updateRc(String registration_no, int insurance_status,String status,int id);
}
