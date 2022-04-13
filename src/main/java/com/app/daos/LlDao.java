package com.app.daos;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.LearningLicence;

public interface LlDao extends JpaRepository<LearningLicence,Integer> {
	LearningLicence findByid(int id);
	
	LearningLicence findBytempLLNo(int tempLLNo);
	
	 @Query ("select ll.tempLLNo from LearningLicence ll WHERE ll.id = ?1")
	  int findIdByrllId(int id);
	 @Query ("select ll.id from LearningLicence ll WHERE ll.user_id = ?1")
	  int findIdByUserId(int id);
	@Modifying
	@Query("UPDATE LearningLicence ll SET ll.tempLLNo=?1, ll.issue_date=?2,ll.expiry_date=?3,ll.status=?4  WHERE ll.id=?5")
	public void updateLl(int  tempLLNo, Date issue_date,Date expiry_date,String status,int id);

}
