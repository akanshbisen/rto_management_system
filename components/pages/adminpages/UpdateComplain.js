import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import ComplainService from "../../../Services/ComplainService";
const UpdateComplain = (props) => {
  const { id } = useParams();
  const [complain, setComplain] = useState([]);

  const [complain_no, setComplain_no] = useState("");
  const [aadhar_no, setAadhar_no] = useState("");
  const [user_id, setUser_id] = useState("");
  const [description, setDescription] = useState("");
  // const [status, setStatus] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    ComplainService.getComplainById(id)
      .then((response) => {
        console.log(response.data);
        let complain = response.data;
        setComplain_no(complain.complain_no);
        setAadhar_no(complain.aadhar_no);
        setUser_id(complain.user_id);
        setDescription(complain.description);
        // setTo_date(complain.to_date);
        // setRegistration_id(complain.registration_id);
        // setStatus(complain.status);
        // setVehicle_class(vtransfer.vehicle_class);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const updateComplain = (e) => {
    e.preventDefault();
    let complain = {
      complain_no: complain_no,
      aadhar_no: aadhar_no,
      user_id: user_id,
      description: description,
      // registration_no: registration_no,
      // registration_id: registration_id,
      // status: status,
      // vehicle_class: vehicle_class,
    };
    console.log("complain => " + JSON.stringify(complain));
    console.log("id => " + JSON.stringify(id));
    ComplainService.updateComplain(complain, id).then((res) => {
      navigate("/complainTable");
    });
  };

  const changecomplain_noHandler = (event) => {
    setComplain_no(event.target.value);
  };

  // const changeStatusHandler = (event) => {
  //   setStatus(event.target.value);
  // };
  // const changeInsurance_statusHandler = (event) => {
  //   setInsurance_status(event.target.value);
  // };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 border-left">
                  <h4>Complaint Details</h4>
                  <hr />
                  <label htmlFor="name">Complaint No</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="complain_no"
                      aria-label="name"
                      aria-describedby="addon-wrapping"
                      value={complain_no}
                      onChange={changecomplain_noHandler}
                    />
                  </div>
                  <label htmlFor="name">Aadhar No</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-email"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={aadhar_no}
                      // onChange={changeregistrationIdHandler}
                    />
                  </div>
                  {/* <label htmlFor="name">Status</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-lock"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={status}
                      onChange={changeStatusHandler}
                    />
                  </div> */}
                  {/*  */}
                  {/*  */}
                  <label htmlFor="name">User Id</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-calendar-check"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={user_id}
                      // onChange={changeInsurance_statusHandler}
                    />
                  </div>
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />
                  <label htmlFor="name">Complain</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-bookmark"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      // aria-describedby="addon-wrapping"
                      autoComplete="off"
                      readOnly
                      value={description}
                    />
                  </div>{" "}
                  {/* <label htmlFor="name">Registration id</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-pin"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={registration_id}
                      readOnly
                    />
                  </div>
                  <label htmlFor="name">Status</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="status"
                      id="flexRadioDefault1"
                      value="Pending"
                      // defaultChecked
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                    />
                    <label
                      className="form-check-label radiog"
                      htmlFor="flexRadioDefault1"
                    >
                      Pending
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="status"
                      value="Approved"
                      id="flexRadioDefault2"
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                    />
                    <label
                      className="form-check-label radiog"
                      htmlFor="flexRadioDefault2"
                    >
                      Approve
                    </label>
                  </div> */}
                  <div
                    className="btn-group mt-3"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button
                      type="button"
                      className="btn btn-danger "
                      style={{ marginRight: "20%", borderRadius: "10px" }}
                      onClick={() => navigate("/complainTable")}
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="btn btn-success"
                      style={{ borderRadius: "10px" }}
                      onClick={updateComplain}
                    >
                      Approve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateComplain;
