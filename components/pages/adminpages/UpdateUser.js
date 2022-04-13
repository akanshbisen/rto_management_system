import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import UserService from "../../../Services/UserService";

const UpdateRc = (props) => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [mobile_no, setmobile_no] = useState();
  const [aadhar_no, setAadhar_no] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    console.log({ id });
    UserService.getUserById(id)
      .then((response) => {
        console.log(response.data);
        // setUser(response.data);
        let user = response.data;
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
        setDob(user.dob);
        setAddress(user.address);
        setmobile_no(user.mobile_no);
        setAadhar_no(user.aadhar_no);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const UpdateUser = (e) => {
    e.preventDefault();
    let user = {
      name: name,
      email: email,
      password: password,
      dob: dob,
      address: address,
      mobile_no: mobile_no,
      aadhar_no: aadhar_no,
    };
    console.log("user => " + JSON.stringify(user));
    console.log("id => " + JSON.stringify(id));
    UserService.updateUser(user, id).then((res) => {
      navigate("/userTable");
    });
  };

  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const changeAddressHandler = (event) => {
    setAddress(event.target.value);
  };
  const changeMobileNoHandler = (event) => {
    setmobile_no(event.target.value);
  };

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
                      value={name}
                      readOnly
                    />
                  </div>

                  <label htmlFor="name">Email</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-email"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      readOnly
                      value={email}
                    />
                  </div>
                  <label htmlFor="name">Password</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={password}
                      onChange={changePasswordHandler}
                    />
                  </div>
                  <label htmlFor="name">Date Of Birth</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-calendar-check"></i>
                    </span>
                    <input
                      type="date"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      readOnly
                      value={dob}
                    />
                  </div>
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />
                  <label htmlFor="name">Aadhar no</label>
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
                      value={aadhar_no}
                    />
                  </div>{" "}
                  <label htmlFor="name">Address</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-pin"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={address}
                      onChange={changeAddressHandler}
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
                      aria-describedby="addon-wrapping"
                      value={mobile_no}
                      onChange={changeMobileNoHandler}
                    />
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
                      onClick={() => navigate("/userTable")}
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="btn btn-success"
                      style={{ borderRadius: "10px" }}
                      onClick={UpdateUser}
                    >
                      Update
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

export default UpdateRc;
