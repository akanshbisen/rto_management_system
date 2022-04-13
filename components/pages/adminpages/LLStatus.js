import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import LLService from "../../../Services/LLService";
const ViewLL = (props) => {
  const { id } = useParams();
  const [ll, setLL] = useState([]);
  const [user, setUser] = useState([]);
  console.log(id);
  const navigate = useNavigate();

  useEffect(() => {
    console.log({ id });
    LLService.getLLById(id)
      .then((response) => {
        console.log(response.data);
        // console.log(response.data.user);
        setUser(response.data.user);
        setLL(response.data);
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
                  <h4>LL Details</h4>
                  <hr />
                  <label htmlFor="name">Name</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      aria-label="name"
                      aria-describedby="addon-wrapping"
                      value={user.name}
                    />
                  </div>

                  <label htmlFor="name">Address</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-account-box-mail"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      aria-label="aadhar_no-number"
                      aria-describedby="addon-wrapping"
                      value={user.address}
                    />
                  </div>
                  <label htmlFor="name">Date of Birth</label>
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
                      value={user.dob}
                    />
                  </div>
                  <label htmlFor="name">Blood group</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-pin"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Blood group"
                      aria-label="address1"
                      aria-describedby="addon-wrapping"
                      value={user.blood_group}
                    />
                  </div>
                  <label htmlFor="name">Class</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-car"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Class"
                      aria-label="email"
                      aria-describedby="addon-wrapping"
                      value={ll.l_category}
                    />
                  </div>
                  <label htmlFor="name">Gender</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-smartphone"></i>
                    </span>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Gender"
                      aria-label="Gender"
                      aria-describedby="addon-wrapping"
                      value={user.gender}
                    />
                  </div>
                  <label htmlFor="name">Learning Licence No</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-n-1-square"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Learning Licence No"
                      aria-label="registraLearning Licence Notion_no"
                      aria-describedby="addon-wrapping"
                      value={ll.tempLLNo}
                    />
                  </div>
                  {/* ############################ */}
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />
                  <label htmlFor="name">Issue Date</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-fire"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Issue Date"
                      aria-describedby="addon-wrapping"
                      value={ll.issue_date}
                    />
                  </div>
                  <label htmlFor="name">Expiry Date</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-bookmark"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Expiry Date "
                      aria-label="blood-group"
                      // aria-describedby="addon-wrapping"
                      autoComplete="off"
                      value={ll.expiry_date}
                    />
                  </div>

                  <label htmlFor="name">Payment Id</label>
                  <div className="input-group flex-nowrap ">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-lock"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Payment Id"
                      aria-label="text"
                      autoComplete="new-text"
                      value={ll.payment_id}
                    />
                  </div>
                  <label htmlFor="name">User id</label>
                  <div className="input-group flex-nowrap ">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-lock"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="User id"
                      aria-label="text"
                      autoComplete="new-text"
                      value={ll.user_id}
                    />
                  </div>
                  <label htmlFor="name">RTO</label>
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
                      value={ll.rto}
                    />
                  </div>
                  <label htmlFor="name">Status</label>
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
                      value={ll.status}
                    />
                  </div>
                  <div className="form-group py-3">
                    <button
                      className="btn btn-primary shadow w-100"
                      onClick={() => navigate("/llTable")}
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

export default ViewLL;
