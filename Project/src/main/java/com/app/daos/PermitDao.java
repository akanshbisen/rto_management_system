package com.app.daos;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Permit;

public interface PermitDao extends JpaRepository<Permit, Integer> {
	Permit findByid(int id);
	
	 @Query ("select p.id from Permit p WHERE p.user_id = ?1")
	  int findIdByUserId(int id);
	  
	
	 @Modifying
		@Query("UPDATE Permit p SET p.permit_no=?1, p.status=?2  WHERE p.id=?3")
		public void updatePermit(String registration_no,String status,int id);
	 
}
