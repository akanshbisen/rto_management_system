import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import LLService from "../../../Services/LLService";
const UpdateLL = (props) => {
  const { id } = useParams();
  const [ll, setLL] = useState([]);

  const [tempLLNo, setTempLLNo] = useState("");
  const [issue_date, setIssue_date] = useState("");
  const [expiry_date, setExpiry_date] = useState("");
  const [status, setStatus] = useState("");
  // const [registration_id, setRegistration_id] = useState("");
  // const [registration_no, setRegistration_no] = useState("");
  // const [vehicle_class, setVehicle_class] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    LLService.getLLById(id)
      .then((response) => {
        console.log(response.data);
        let ll = response.data;
        setTempLLNo(ll.tempLLNo);
        setIssue_date(ll.issue_date);
        setExpiry_date(ll.expiry_date);
        setStatus(ll.status);
        // setRegistration_no(puc.registration_no);
        // setRegistration_id(puc.registration_id);
        // setVehicle_class(vtransfer.vehicle_class);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const updateLL = (e) => {
    e.preventDefault();
    let ll = {
      tempLLNo: tempLLNo,
      issue_date: issue_date,
      expiry_date: expiry_date,
      status: status,
      // registration_id: registration_id,
      // registration_no: registration_no,
      // vehicle_class: vehicle_class,
    };
    console.log("ll => " + JSON.stringify(ll));
    console.log("id => " + JSON.stringify(id));
    LLService.updateLL(ll, id).then((res) => {
      navigate("/llTable");
    });
  };

  const changetempLLNoHandler = (event) => {
    setTempLLNo(event.target.value);
  };
  const changeIssue_dateHandler = (event) => {
    setIssue_date(event.target.value);
  };
  const changeExpiry_dateHandler = (event) => {
    setExpiry_date(event.target.value);
  };
  const changeStatusHandler = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 border-left">
                  <h4>LL Details</h4>
                  <hr />
                  <label htmlFor="name">LL No</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="LL_no"
                      aria-label="name"
                      aria-describedby="addon-wrapping"
                      value={tempLLNo}
                      onChange={changetempLLNoHandler}
                    />
                  </div>
                  <label htmlFor="name">Issue Date</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-email"></i>
                    </span>
                    <input
                      type="date"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={issue_date}
                      onChange={changeIssue_dateHandler}
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
                  <label htmlFor="name">Expiry Date</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-calendar-check"></i>
                    </span>
                    <input
                      type="date"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={expiry_date}
                      onChange={changeExpiry_dateHandler}
                    />
                  </div>
                  {/* <label htmlFor="name">To Date</label>
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
                  </div>{" "} */}
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />
                  {/* 
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
                  </div> */}
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
                      onClick={() => navigate("/llTable")}
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="btn btn-success"
                      style={{ borderRadius: "10px" }}
                      onClick={updateLL}
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

export default UpdateLL;
