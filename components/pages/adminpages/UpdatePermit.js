import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import PermitService from "../../../Services/PermitService";
const UpdatePermit = (props) => {
  const { id } = useParams();
  const [permit, setPermit] = useState([]);

  const [permit_no, setPermit_no] = useState("");
  const [registration_no, setRegistration_no] = useState("");
  const [from_state, setFrom_state] = useState("");
  const [to_state, setTo_state] = useState("");
  const [to_date, setTo_date] = useState("");
  const [status, setStatus] = useState("");
  // const [vehicle_class, setVehicle_class] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    PermitService.getPermitById(id)
      .then((response) => {
        console.log(response.data);
        let permit = response.data;
        setPermit_no(permit.permit_no);
        setRegistration_no(permit.registration_no);
        setFrom_state(permit.from_state);
        setTo_state(permit.to_state);
        setTo_date(permit.to_date);
        setStatus(permit.status);
        // setVehicle_class(vtransfer.vehicle_class);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const UpdatePermit = (e) => {
    e.preventDefault();
    let permit = {
      permit_no: permit_no,
      registration_no: registration_no,
      from_state: from_state,
      to_state: to_state,
      to_date: to_date,
      status: status,
      // vehicle_class: vehicle_class,
    };
    console.log("permit => " + JSON.stringify(permit));
    console.log("id => " + JSON.stringify(id));
    PermitService.updatePermit(permit, id).then((res) => {
      navigate("/permitTable");
    });
  };

  const changepermit_noHandler = (event) => {
    setPermit_no(event.target.value);
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
                  <h4>Permit Details</h4>
                  <hr />
                  <label htmlFor="name">Permit No</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="permit_no"
                      aria-label="name"
                      aria-describedby="addon-wrapping"
                      value={permit_no}
                      onChange={changepermit_noHandler}
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
                  <label htmlFor="name">From state</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-calendar-check"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={from_state}
                      // onChange={changeInsurance_statusHandler}
                    />
                  </div>
                  <label htmlFor="name">To state</label>
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
                      value={to_state}
                    />
                  </div>{" "}
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />

                  <label htmlFor="name">To date</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-pin"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={to_date}
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
                      onClick={() => navigate("/permitTable")}
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="btn btn-success"
                      style={{ borderRadius: "10px" }}
                      onClick={UpdatePermit}
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

export default UpdatePermit;
