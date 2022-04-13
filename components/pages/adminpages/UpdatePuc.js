import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import PucServices from "../../../Services/PucService";
const UpdatePuc = (props) => {
  const { id } = useParams();
  const [puc, setPuc] = useState([]);

  const [puc_no, setPuc_no] = useState("");
  const [registration_no, setRegistration_no] = useState("");
  const [from_date, setFrom_date] = useState("");
  const [to_date, setTo_date] = useState("");
  const [registration_id, setRegistration_id] = useState("");
  const [status, setStatus] = useState("");
  // const [vehicle_class, setVehicle_class] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    PucServices.getPucById(id)
      .then((response) => {
        console.log(response.data);
        let puc = response.data;
        setPuc_no(puc.puc_no);
        setRegistration_no(puc.registration_no);
        setFrom_date(puc.from_date);
        setTo_date(puc.to_date);
        setRegistration_id(puc.registration_id);
        setStatus(puc.status);
        // setVehicle_class(vtransfer.vehicle_class);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const updatePuc = (e) => {
    e.preventDefault();
    let puc = {
      puc_no: puc_no,
      registration_no: registration_no,
      from_date: from_date,
      to_date: to_date,
      registration_id: registration_id,
      status: status,
      // vehicle_class: vehicle_class,
    };
    console.log("puc => " + JSON.stringify(puc));
    console.log("id => " + JSON.stringify(id));
    PucServices.updatePuc(puc, id).then((res) => {
      navigate("/pucTable");
    });
  };

  const changepuc_noHandler = (event) => {
    setPuc_no(event.target.value);
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
                  <h4>Puc Details</h4>
                  <hr />
                  <label htmlFor="name">Puc No</label>
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
                      value={puc_no}
                      onChange={changepuc_noHandler}
                    />
                  </div>
                  <label htmlFor="name">Registration No</label>
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
                  <label htmlFor="name">From Date</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-calendar-check"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={from_date}
                      // onChange={changeInsurance_statusHandler}
                    />
                  </div>
                  <label htmlFor="name">To Date</label>
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
                      value={to_date}
                    />
                  </div>{" "}
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />

                  <label htmlFor="name">Registration id</label>
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
                      onClick={() => navigate("/pucTable")}
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="btn btn-success"
                      style={{ borderRadius: "10px" }}
                      onClick={updatePuc}
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

export default UpdatePuc;
