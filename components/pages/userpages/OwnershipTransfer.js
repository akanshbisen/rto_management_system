import React from "react";
import "../inc/RegistrationForm.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { URL } from "../../../config";
import { toast } from "react-toastify";
const OwnershipTransfer = () => {
  const { id, name } = sessionStorage;
  const [user_id, setUser_id] = useState();
  const [registration_no, setRegistration_no] = useState("");
  const [transfer_no, setTransfer_no] = useState();
  const [new_owner, setNew_owner] = useState("");
  const [new_owner_aadhar, setNew_owner_aadhar] = useState("");
  const [new_owner_email, setNew_owner_email] = useState("");
  const [new_owner_mobile, setNew_owner_mobile] = useState("");
  const [payment_no, setPayment_no] = useState();
  const [registration_id, setRegistration_id] = useState("");
  

  const navigate = useNavigate();

  // ############################
  const transferVehicle = () => {
    // navigate("/");
    if (registration_no.length == 0 || new_owner.length==0 || new_owner_aadhar.length==0 || new_owner_email.length==0 || new_owner_mobile.length==0 || registration_id.length==0) {
      toast.warning("Field Required");
    } else {
      const body = {
        user_id,
        registration_no,
       // transfer_no,
        new_owner,
        new_owner_aadhar,
        new_owner_email,
        new_owner_mobile,
        //payment_no,
        registration_id,
        
      };

      const url = `${URL}/vehicle_transfer/add_vehicleTransfer`;

      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Ownership Transfer requested");

          // navigate to the home page
          navigate("/payment");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 border-left">
                  <h4>Vehicle Transfer</h4>
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
                  <label htmlFor="name">Registration No</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Registration Number"
                      aria-label="name"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setRegistration_no(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">Registration id</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Registration Id"
                      aria-label="registration_id"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setRegistration_id(e.target.value);
                      }}
                    />
                  </div>
                  {/* <label htmlFor="name">Transfer No</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-account-box-mail"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="transfer_no"
                      aria-label="transfer_no"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setTransfer_no(e.target.value);
                      }}
                    /> 
                  </div>*/}
                  <label htmlFor="name">New Owner</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter New Owner Name"
                      aria-label="new_owner"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setNew_owner(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">New Owner Aadhar</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-smartphone"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter new owner aadhar"
                      aria-label="new_owner_aadhar"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setNew_owner_aadhar(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />
                  
                  <label htmlFor="name">New Owner Email</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-email"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter new owner email"
                      aria-label="new_owner_email"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setNew_owner_email(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">New Owner mobile</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-smartphone"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter new owner mobile"
                      aria-label="new_owner_mobile"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setNew_owner_mobile(e.target.value);
                      }}
                    />
                  </div>
                  {/* <label htmlFor="name">Payment No</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-smartphone"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="payment_no"
                      aria-label="payment_no"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setPayment_no(e.target.value);
                      }}
                    />
                  </div> */}
                  {/* ############################ */}

                  <div className="form-group py-3">
                    <button
                      className="btn btn-primary shadow w-100"
                      onClick={transferVehicle}
                    >
                      Register
                    </button>
                    <br/><br/>
                    <a href="/transferstatus"
                      className="btn btn-danger shadow w-100"
                     
                    >
                      Back
                    </a>
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
export default OwnershipTransfer;
