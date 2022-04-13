package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.VehicleRegistration;
import com.app.entities.VehicleTransfer;

public interface VehicleTransferDao extends JpaRepository<VehicleTransfer, Integer>{
	VehicleTransfer findByid(int id);
	
	 @Query ("select vt.id from VehicleTransfer vt WHERE vt.user_id = ?1")
	  int findIdByUserId(int id);
	
	
	
	 	@Modifying
		@Query("UPDATE VehicleTransfer vt SET vt.status=?1  WHERE vt.id=?2")
		public void updateVTransfer(String status,int id);
}
