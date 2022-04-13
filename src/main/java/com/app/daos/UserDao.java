package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.User;

public interface UserDao extends JpaRepository<User,Integer>{
	
	User findById(int id);
	
	User findByEmail(String email);
	
//	User findByuaadhar_no(String a);
	  @Query ("select u.id from User u WHERE u.aadhar_no = ?1")
	  int findIdByaadhar_no(String aadhar);
	  
//	  @Query ("select u.address,u.mobile_no,u.password from User u WHERE u.id = ?1")
//	  int findIdByUserId(String aadhar,String aadhar,int id);
	  
		@Modifying
		@Query("UPDATE User u SET u.address=?1,u.mobile_no=?2,u.password=?3  WHERE u.id=?4")
		public void updateUser(String address, long mobile_no,String password,int id);

}
