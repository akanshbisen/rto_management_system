package com.app.dtos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
//import org.springframework.web.multipart.MultipartException;

import com.app.entities.DatabaseFile;
import com.app.entities.User;
import com.app.services.DatabaseFileService;

@Component
public class DtoEntityConverter {
	DatabaseFile databaseFile;
	@Autowired
	DatabaseFileService databaseFileService;
	public UserDTO toUserDto(User entity) {
		UserDTO dto = new UserDTO();
		dto.setId(entity.getId());
		dto.setName(entity.getName());
		dto.setEmail(entity.getEmail());
		dto.setPassword(entity.getPassword());
		dto.setAadhar_no(entity.getAadhar_no());
		dto.setAddress(entity.getAddress());
		dto.setBlood_group(entity.getBlood_group());
		dto.setDob(entity.getDob());
		dto.setGender(entity.getGender());
		dto.setMobile_no(entity.getMobile_no());
		dto.setRole(entity.getRole());
//		dto.setPhoto_id(entity.getDatabaseFile().getId());
		return dto;
	}

	public User toUserEntity(UserDTO dto) {
		User entity = new User();
		entity.setId(dto.getId());
		entity.setName(dto.getName());
		entity.setEmail(dto.getEmail());
		entity.setPassword(dto.getPassword());
		entity.setPassword(dto.getPassword());
		entity.setAadhar_no(dto.getAadhar_no());
		entity.setAddress(dto.getAddress());
		entity.setBlood_group(dto.getBlood_group());
		entity.setDob(dto.getDob());
		entity.setGender(dto.getGender());
		entity.setMobile_no(dto.getMobile_no());
		entity.setRole(dto.getRole());
		entity.setPhoto_id(dto.getPhoto_id());
		return entity;		
	}

}
