import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import UserService from "../../../Services/UserService";

const ViewUser = (props) => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log({ id });
    UserService.getUserById(id)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        // const result = response.data;
        // setUser(result["data"]);
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
                  <h4>User Details</h4>
                  <hr />
                  <label htmlFor="name">Name</label>
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
                      value={user.name}
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
                      value={user.aadhar_no}
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
                  <label htmlFor="name">Address</label>
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
                      value={user.address}
                    />
                  </div>
                  <label htmlFor="name">Email</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-email"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="email"
                      aria-label="email"
                      aria-describedby="addon-wrapping"
                      value={user.email}
                    />
                  </div>
                  <label htmlFor="name">mobile_no Number</label>
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
                      value={user.mobile_no}
                    />
                  </div>
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />
                  <label htmlFor="name">Gender</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-male-female"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder=""
                      aria-label="email"
                      aria-describedby="addon-wrapping"
                      value={user.gender}
                    />
                  </div>
                  {/* ############################ */}
                  <label htmlFor="name">Role</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-nature-people"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      aria-label="email"
                      aria-describedby="addon-wrapping"
                      value={user.role}
                    />
                  </div>

                  <label htmlFor="name">Blood Group</label>
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
                      value={user.blood_group}
                    />
                  </div>

                  <label htmlFor="name">Password</label>
                  <div className="input-group flex-nowrap ">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                      aria-label="password"
                      autoComplete="new-password"
                      value={user.name}
                    />
                  </div>
                  <div className="form-group py-3">
                    <button
                      className="btn btn-primary shadow w-100"
                      onClick={() => navigate("/userTable")}
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

export default ViewUser;
