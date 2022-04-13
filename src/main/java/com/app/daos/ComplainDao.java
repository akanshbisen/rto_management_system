package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Complain;

public interface ComplainDao extends JpaRepository<Complain, Integer> {
	Complain findById(int id);
	
	 @Query ("select c.id from Complain c WHERE c.user_id = ?1")
	  int findIdByUserId(int id);
	
	 @Modifying
		@Query("UPDATE Complain c SET c.complain_no=?1  WHERE c.id=?2")
		public void updateComplain(String complain_no,int id);
}
