import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import PucServices from "../../../Services/PucService";
const ViewPuc = (props) => {
  const { id } = useParams();
  const [puc, setPuc] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log({ id });
    PucServices.getPucById(id)
      .then((response) => {
        console.log(response.data);
        setPuc(response.data);
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
                  <h4>Puc Details</h4>
                  <hr />
                  <label htmlFor="name">Registration No</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Registration"
                      aria-label="name"
                      aria-describedby="addon-wrapping"
                      value={puc.registration_no}
                    />
                  </div>

                  <label htmlFor="name">Registration Id</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-account-box-mail"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Registration Id"
                      aria-label="Registration Id"
                      aria-describedby="addon-wrapping"
                      value={puc.registration_id}
                    />
                  </div>
                  <label htmlFor="name">From Date</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-calendar-check"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="from_date"
                      aria-label="from_date"
                      aria-describedby="addon-wrapping"
                      value={puc.from_date}
                    />
                  </div>
                  <label htmlFor="name">To Date</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-pin"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="to_date"
                      aria-label="to_date"
                      aria-describedby="addon-wrapping"
                      value={puc.to_date}
                    />
                  </div>

                  {/* ############################ */}
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />
                  <label htmlFor="name">Co2</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-car"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="co2"
                      aria-label="co2"
                      aria-describedby="addon-wrapping"
                      value={puc.co2}
                    />
                  </div>
                  <label htmlFor="name">hc</label>
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
                  </div>
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
                      onClick={() => navigate("/pucTable")}
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

export default ViewPuc;
