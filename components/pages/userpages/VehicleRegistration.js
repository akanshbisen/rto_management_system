import React from "react";
import "../inc/RegistrationForm.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { URL } from "../../../config";
import { toast } from "react-toastify";
const VehicleRegistration = () => {
  const {id} = sessionStorage;
  const [user_id, setUser_id] = useState();
  const [owner, setOwner] = useState("");
  const [aadhar_no, setAadhar_no] = useState();
  const [make, setMake] = useState("");
  const [chassis_no, setChassis_no] = useState("");
  const [purchase_date, setPurchase_date] = useState("");
  const [vehicle_class, setVehicle_class] = useState("");
  const [fuel_type, setFuel_type] = useState();
  const [engine_no, setEngine_no] = useState("");
  const [engine_capacity, setEngine_capacity] = useState("");
  const [insurance_status, setIsurance_status] = useState("");
  const [puc_status, setPuc_status] = useState("");
  const [hypothecated_to, setHypothecated_to] = useState("");
  const [wheels, setWheels] = useState("");
  const [seat_capacity, setSeat_capacity] = useState("");

  // find about image

  const navigate = useNavigate();

  // ############################
  const registerVehicle = () => {
    // navigate("/");
    if (owner.length == 0) {
      toast.warning("Please enter fullname as per aadhar card");
    } else {
      const body = {
        user_id,
        owner,
        aadhar_no,
        make,
        chassis_no,
        purchase_date,
        vehicle_class,
        fuel_type,
        engine_no,
        engine_capacity,
        insurance_status,
        puc_status,
        hypothecated_to,
        wheels,
        seat_capacity,
      };

      const url = `${URL}/rc/add_rc`;

      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Vehicle Registered Successfully");

          // navigate to the home page
          navigate("/payment");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  //##########################
  //code for upload photo

  // const upload = (e) => {
  //   console.warn(e.target.files);
  //   const files = e.target.files;
  //   const formData = new FormData();
  //   formData.append("file", files[0]);
  //   fetch("http://localhost:8080/user/uploadFile", {
  //     method: "POST",
  //     body: formData,
  //   }).then((response) => {
  //     response.json().then((result) => {
  //       console.warn("result", result);
  //     });
  //   });
  // };

  // ############################

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 border-left">
                  <h4>Vehicle Registration</h4>

                  <hr />
                  <label htmlFor="name">User Id </label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Again enter User_Id"
                      value={id}
                      readOnly
                      aria-label="User_Id"
                      aria-describedby="addon-wrapping"
                      onMouseOver={(e) => {
                        setUser_id(e.target.value);
                      }}
                    />
                  </div>


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
                      onChange={(e) => {
                        setOwner(e.target.value);
                      }}
                    />
                  </div>

                  <label htmlFor="name">Aadhar No.</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-account-box-mail"></i>
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="aadhar_no number"
                      aria-label="aadhar_no-number"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setAadhar_no(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">Purchase Date</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-calendar-check"></i>
                    </span>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="purchase date"
                      aria-label="dob"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setPurchase_date(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">Make</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-pin"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="make"
                      aria-label="make"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setMake(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">chassis_no</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-email"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="chassis_no"
                      aria-label="email"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setChassis_no(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">Vehicle class</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-smartphone"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="vehicle_class"
                      aria-label="mobile_no-number"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setVehicle_class(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">Fuel type</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-smartphone"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="fuel_type"
                      aria-label="mobile_no-number"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setFuel_type(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />
                  <label htmlFor="name">Engine No</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-smartphone"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="engine_no"
                      aria-label="mobile_no-number"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setEngine_no(e.target.value);
                      }}
                    />
                  </div>
                  {/* ############################ */}
                  <label htmlFor="name">Engine capacity</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-smartphone"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="engine_capacity"
                      aria-label="mobile_no-number"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setEngine_capacity(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">Insurance status</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-smartphone"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="insurance_status"
                      aria-label="insurance_status"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setIsurance_status(e.target.value);
                      }}
                    />
                  </div>

                  <label htmlFor="name">Puc status</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-bookmark"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="puc_status"
                      aria-label="puc_status"
                      // aria-describedby="addon-wrapping"
                      autoComplete="off"
                      onChange={(e) => {
                        setPuc_status(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">Hypothecated to</label>

                  <div className="input-group flex-nowrap ">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-lock"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="hypothecated_to"
                      aria-label="hypothecated_to"
                      autoComplete="new-password"
                      // aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setHypothecated_to(e.target.value);
                      }}
                    />
                  </div>

                  <label htmlFor="name">wheels</label>
                  <div className="input-group flex-nowrap ">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-lock"></i>
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="wheels"
                      aria-label="wheels"
                      autoComplete="new-password"
                      // aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setWheels(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">Seat capacity</label>
                  <div className="input-group flex-nowrap ">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-lock"></i>
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="seat_capacity"
                      aria-label="seat_capacity"
                      autoComplete="new-password"
                      // aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setSeat_capacity(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group py-3">
                    <button
                      className="btn btn-primary shadow w-100"
                      onClick={registerVehicle}
                    >
                      Register
                    </button>
                    <br/><br/>
                    <a href="/rcstatus" className="btn btn-danger shadow w-100">Back</a>
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
export default VehicleRegistration;
