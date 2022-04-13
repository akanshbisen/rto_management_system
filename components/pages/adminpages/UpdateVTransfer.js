import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import VehicleTransferService from "../../../Services/VehicleTransferService";
const UpdateVTransfer = (props) => {
  const { id } = useParams();
  const [vtransfer, setVtransfer] = useState([]);

  const [owner, setOwner] = useState("");
  const [registration_no, setRegistration_no] = useState("");
  const [new_owner_aadhar, setNew_owner_aadhar] = useState("");
  const [new_owner_email, setNew_owner_email] = useState("");
  const [new_owner_mobile, setNew_owner_mobile] = useState("");
  const [status, setStatus] = useState("");
  // const [vehicle_class, setVehicle_class] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    VehicleTransferService.getVtransferById(id)
      .then((response) => {
        console.log(response.data);
        // setvtransfer(response.data);
        let vtransfer = response.data;
        setOwner(vtransfer.new_owner);
        setRegistration_no(vtransfer.registration_no);
        setNew_owner_aadhar(vtransfer.new_owner_aadhar);
        setNew_owner_email(vtransfer.new_owner_email);
        setNew_owner_mobile(vtransfer.new_owner_mobile);
        // setVehicle_class(vtransfer.vehicle_class);
        setStatus(vtransfer.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const Updatevtransfer = (e) => {
    e.preventDefault();
    let vtransfer = {
      owner: owner,
      registration_no: registration_no,
      new_owner_aadhar: new_owner_aadhar,
      new_owner_email: new_owner_email,
      new_owner_mobile: new_owner_mobile,
      status: status,
      // vehicle_class: vehicle_class,
    };
    console.log("vtransfer => " + JSON.stringify(vtransfer));
    console.log("id => " + JSON.stringify(id));
    VehicleTransferService.updateVehicleTransfer(vtransfer, id).then((res) => {
      navigate("/vtransferTable");
    });
  };

  const changeregistrationIdHandler = (event) => {
    setRegistration_no(event.target.value);
  };

  const changeStatusHandler = (event) => {
    setStatus(event.target.value);
  };
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
                  <h4>Vehicle Transfer Details</h4>
                  <hr />
                  <label htmlFor="name">Owner</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter name middle-name last-name"
                      aria-label="name"
                      aria-describedby="addon-wrapping"
                      value={owner}
                      readOnly
                    />
                  </div>
                  <label htmlFor="name">registration_no</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-email"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={registration_no}
                      onChange={changeregistrationIdHandler}
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
                  <label htmlFor="name">Aadhar</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-calendar-check"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={new_owner_aadhar}
                      // onChange={changeInsurance_statusHandler}
                    />
                  </div>
                  <label htmlFor="name">Mobile</label>
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
                      value={new_owner_mobile}
                    />
                  </div>{" "}
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />

                  <label htmlFor="name">Email</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-pin"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={new_owner_email}
                      readOnly
                    />
                  </div>
                  <label htmlFor="name">Status</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
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
                      name="gender"
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
                  </div>
                  <div
                    className="btn-group mt-3"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button
                      type="button"
                      className="btn btn-danger "
                      style={{ marginRight: "20%", borderRadius: "10px" }}
                      onClick={() => navigate("/vtransferTable")}
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="btn btn-success"
                      style={{ borderRadius: "10px" }}
                      onClick={Updatevtransfer}
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

export default UpdateVTransfer;
