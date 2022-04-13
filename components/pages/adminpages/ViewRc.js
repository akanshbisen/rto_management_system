import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import RcService from "../../../Services/RcService";
const Viewrc = (props) => {
  const { id } = useParams();
  const [rc, setRc] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log({ id });
    RcService.getRcById(id)
      .then((response) => {
        console.log(response.data);
        setRc(response.data);
        // const result = response.data;
        // setrc(result["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 border-left">
                  <h4>RC Details</h4>
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
                      value={rc.owner}
                    />
                  </div>

                  <label htmlFor="name">Aadhar Number</label>
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
                      value={rc.aadhar_no}
                    />
                  </div>
                  <label htmlFor="name">Date of Purchase</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-calendar-check"></i>
                    </span>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="DOB"
                      aria-label="dob"
                      aria-describedby="addon-wrapping"
                      value={rc.purchase_date}
                    />
                  </div>
                  <label htmlFor="name">Chassis no.</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-pin"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="address1"
                      aria-label="address1"
                      aria-describedby="addon-wrapping"
                      value={rc.chassis_no}
                    />
                  </div>
                  <label htmlFor="name">Vehicle Class</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-car"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="email"
                      aria-label="email"
                      aria-describedby="addon-wrapping"
                      value={rc.vehicle_class}
                    />
                  </div>
                  <label htmlFor="name">Engine Number</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-smartphone"></i>
                    </span>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="mobile_no number"
                      aria-label="mobile_no-number"
                      aria-describedby="addon-wrapping"
                      value={rc.engine_no}
                    />
                  </div>
                  <label htmlFor="name">Registration No</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-n-1-square"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Pending"
                      aria-label="email"
                      aria-describedby="addon-wrapping"
                      value={rc.registration_no}
                    />
                  </div>
                  {/* ############################ */}
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />
                  <label htmlFor="name">Fuel Type</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-fire"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      aria-label="email"
                      aria-describedby="addon-wrapping"
                      value={rc.fuel_type}
                    />
                  </div>
                  <label htmlFor="name">Insurance Status</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-bookmark"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="blood group"
                      aria-label="blood-group"
                      // aria-describedby="addon-wrapping"
                      autoComplete="off"
                      value={rc.insurance_status}
                    />
                  </div>

                  <label htmlFor="name">PUC status</label>
                  <div className="input-group flex-nowrap ">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-lock"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="text"
                      aria-label="text"
                      autoComplete="new-text"
                      value={rc.puc_status}
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
                      placeholder="Nill"
                      aria-label="text"
                      autoComplete="new-text"
                      value={rc.hypothecated_to}
                    />
                  </div>
                  <label htmlFor="name">Wheels</label>
                  <div className="input-group flex-nowrap ">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-lock"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="text"
                      aria-label="text"
                      autoComplete="new-text"
                      value={rc.wheels}
                    />
                  </div>
                  <label htmlFor="name">Payment id</label>
                  <div className="input-group flex-nowrap ">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-lock"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="text"
                      aria-label="text"
                      autoComplete="new-text"
                      value={rc.payment_id}
                    />
                  </div>
                  <div className="form-group py-3">
                    <button
                      className="btn btn-primary shadow w-100"
                      onClick={() => navigate("/rcTable")}
                    >
                      Back
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

export default Viewrc;
