package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Puc;

public interface PucDao extends JpaRepository<Puc,Integer> {
	Puc findById(int id);

	 @Query ("select p.id from Puc p WHERE p.user_id = ?1")
	  int findIdByUserId(int id);
	  
	
	 @Modifying
		@Query("UPDATE Puc p SET p.puc_no=?1, p.status=?2  WHERE p.id=?3")
		public void updatePuc(String registration_no,String status,int id);
}
