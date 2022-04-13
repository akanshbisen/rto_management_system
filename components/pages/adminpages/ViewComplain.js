import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import ComplainService from "../../../Services/ComplainService";
const ViewComplain = (props) => {
  const { id } = useParams();
  const [complain, setComplain] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log({ id });
    ComplainService.getComplainById(id)
      .then((response) => {
        console.log(response.data);
        setComplain(response.data);
        // const result = response.data;
        // setvtransfer(result["data"]);
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
                  <h4>Complain Details</h4>
                  <hr />
                  <label htmlFor="name">Complaint Id</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-pin"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Complaint"
                      aria-label="to_date"
                      aria-describedby="addon-wrapping"
                      value={complain.id}
                    />
                  </div>
                  <label htmlFor="name">Aadhar No</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Aadhar"
                      aria-label="name"
                      aria-describedby="addon-wrapping"
                      value={complain.aadhar_no}
                    />
                  </div>

                  <label htmlFor="name">User Id</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-account-box-mail"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="UserId "
                      aria-label="UserId Id"
                      aria-describedby="addon-wrapping"
                      value={complain.user_id}
                    />
                  </div>
                  <label htmlFor="name">Complain No</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-calendar-check"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Complain"
                      aria-label="Complain"
                      aria-describedby="addon-wrapping"
                      value={complain.complain_no}
                    />
                  </div>

                  {/* ############################ */}
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />

                  <div className="form-group">
                    <label className="mb-1">Description</label>

                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Complaint"
                      aria-label="co2"
                      aria-describedby="addon-wrapping"
                      value={complain.description}
                    ></textarea>
                  </div>

                  {/* <label htmlFor="name">hc</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-smartphone"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="hc "
                      aria-label="hc"
                      aria-describedby="addon-wrapping"
                      value={puc.hc}
                    />
                  </div>

                  <label htmlFor="name">Status</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-n-1-square"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pending"
                      aria-label="text"
                      aria-describedby="addon-wrapping"
                      value={puc.status}
                    />
                  </div> */}

                  {/* ##################### */}

                  {/* <label htmlFor="name">Fuel Type</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-fire"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="text"
                      aria-describedby="addon-wrapping"
                      // value={vtransfer.vehicleRegistration1.fuel_type}
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
                      value={vtransfer.insurance_status}
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
                      value={vtransfer.puc_status}
                    />
                  </div> */}
                  {/* <label htmlFor="name">Hypothecated to</label>
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
                      value={vtransfer.hypothecated_to}
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
                      value={vtransfer.wheels}
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
                      value={vtransfer.payment_id}
                    />
                  </div> */}
                  <div className="form-group py-3">
                    <button
                      className="btn btn-primary shadow w-100"
                      onClick={() => navigate("/complainTable")}
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

export default ViewComplain;
