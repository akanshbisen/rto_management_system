package com.app.entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "files")
public class DatabaseFile {
	
//	@GeneratedValue(generator = "uuid")
//	@GenericGenerator(name = "uuid", strategy = "uuid2")
//	private String id;
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
    private int id;
	private String fileName;

	private String fileType;
	
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	private User user;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
//		user.setDatabaseFile(this);
	}

	@Lob
	private byte[] data;

	public DatabaseFile() {

	}


	public DatabaseFile(String fileName, String fileType, byte[] data) {
		this.fileName = fileName;
		this.fileType = fileType;
		this.data = data;
	}
	

	public int getId() {
		return id;
	}


	public String getFileName() {
		return fileName;
	}

	public String getFileType() {
		return fileType;
	}

	public byte[] getData() {
		return data;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	public void setData(byte[] data) {
		this.data = data;
	}
	
	
}