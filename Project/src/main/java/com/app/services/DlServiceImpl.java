package com.app.services;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.app.daos.DlDao;
import com.app.entities.DrivingLicence;
import com.app.entities.LearningLicence;

@Transactional
@Service
public class DlServiceImpl {

	@Autowired
	DlDao dlDao;

	@Autowired
	private UserServiceImpl userServiceImpl;

	public DrivingLicence findBYId(int dl_id) {
		DrivingLicence dl = dlDao.findByid(dl_id);
		return dl;
	}

	public List<DrivingLicence> findAllDls() {
		List<DrivingLicence> dlList = dlDao.findAll();
		return dlList;
	}

	public DrivingLicence saveDl(DrivingLicence dl) {
		DrivingLicence newDl = findBYId(dl.getId());
		if (newDl != null)
			return null;
		dl.setUser(userServiceImpl.findUserFromdbById(dl.getUser_id()));
		DrivingLicence dl2 = dlDao.save(dl);
		return dl;
	}

	public void updateDl(int tempLLNo, Date issue_date, Date expiry_date, String status, int id) {
		try {

			dlDao.updateDl(tempLLNo, issue_date, expiry_date, status, id);
		} catch (DataIntegrityViolationException e) {

		}
	}

	public DrivingLicence findLLBYUserId(int user_id) {

		int dId = dlDao.findIdByUserId(user_id);

		DrivingLicence dl = dlDao.findByid(dId);

		return dl;
	}

}
