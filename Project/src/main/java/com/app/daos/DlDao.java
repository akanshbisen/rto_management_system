package com.app.daos;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.DrivingLicence;

public interface DlDao extends JpaRepository<DrivingLicence,Integer> {
	
	DrivingLicence findByid(int id);
	
	 @Query ("select dl.id from DrivingLicence dl WHERE dl.user_id = ?1")
	  int findIdByUserId(int id);
	
	@Modifying
	@Query("UPDATE DrivingLicence dl SET dl.dl_no=?1, dl.dl_issue_date=?2,dl.dl_expiry_date=?3,dl.status=?4  WHERE dl.id=?5")
	public void updateDl(int  tempLLNo, Date issue_date,Date expiry_date,String status,int id);

}
