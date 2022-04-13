import React from "react";
import "./RegistrationForm.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { URL } from "../../../config";
import { toast } from "react-toastify";
const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aadhar_no, setaadhar_no] = useState();
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [mobile_no, setmobile_no] = useState();
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [blood_group, setBlood_group] = useState("");

  // find about image

  const navigate = useNavigate();

  // ############################
  const registerUser = () => {
    // navigate("/");
    if (name.length == 0) {
      toast.warning("Please enter fullname as per aadhar card");
    } else if (email.length == 0) {
      toast.warning("Please enter email");
    } else if (password.length == 0) {
      toast.warning("Please enter password");
    } else if (dob.length == 0) {
      toast.warning("Please enter dob");
    } else if (address.length == 0) {
      toast.warning("Please enter address");
    } else if (mobile_no.length == 0) {
      toast.warning("Please enter mobile no");
    } else if (gender.length == 0) {
      toast.warning("Please select gender");
    } else if (role.length == 0) {
      toast.warning("Please select role");
    } else if (blood_group.length == 0) {
      toast.warning("Please enter blood group");
    }
    else {
      const body = {
        name,
        email,
        password,
        aadhar_no,
        dob,
        address,
        mobile_no,
        gender,
        role,
        blood_group,
      };

      const url = `${URL}/user/register`;

      // body: contains the data to be sent to the API
      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Successfully signed up new user");

          // navigate to the home page
          navigate("/login");
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
                  <h4>User Registration</h4>
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
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
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
                      placeholder="aadhar number"
                      aria-label="aadhar_no-number"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setaadhar_no(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setDob(e.target.value);
                      }}
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
                      placeholder="address"
                      aria-label="address1"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">Mobile Number</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-smartphone"></i>
                    </span>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="mobile number"
                      aria-label="mobile_no-number"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setmobile_no(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />
                  <label htmlFor="name">Gender</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="flexRadioDefault1"
                      value="male"
                      // defaultChecked
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    />
                    <label
                      className="form-check-label radiog"
                      htmlFor="flexRadioDefault1"
                    >
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="female"
                      id="flexRadioDefault2"
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    />
                    <label
                      className="form-check-label radiog"
                      htmlFor="flexRadioDefault2"
                    >
                      Female
                    </label>
                  </div>

                  {/* ############################ */}
                  <div>
                    <label htmlFor="name">Role</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="role"
                        id="exampleRadios1"
                        value="admin"
                        // defaultChecked
                        onChange={(e) => {
                          setRole(e.target.value);
                        }}
                      />
                      <label
                        className="form-check-label radiog"
                        htmlFor="exampleRadios1"
                      >
                        Admin
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="role"
                        value="user"
                        id="exampleRadios2"
                        onChange={(e) => {
                          setRole(e.target.value);
                        }}
                      />
                      <label
                        className="form-check-label radiog"
                        htmlFor="exampleRadios2"
                      >
                        User
                      </label>
                    </div>
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
                      onChange={(e) => {
                        setBlood_group(e.target.value);
                      }}
                    />
                  </div>
                  {/* <label htmlFor="name">Upload photo</label> */}

                  <div className="input-group mb-3">
                    {/* <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile02"
                      name="file"
                      onChange={(e) => upload(e)}
                    /> */}
                    {/* <label
                      className="input-group-text"
                      htmlFor="inputGroupFile02"
                    >
                      Upload
                    </label>
                  </div>
                  <p style={{ color: "red" }}>
                    *upload image of size less than 4 mb
                  </p>
                  <label htmlFor="name">Password</label>
                  <div className="input-group flex-nowrap ">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-lock"></i>
                    </span> */}
                    <label>Password</label>

                    <div className="input-group mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="password"
                        aria-label="password"
                        autoComplete="new-password"
                        // aria-describedby="addon-wrapping"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group py-3">
                    <button
                      className="btn btn-primary shadow w-100"
                      onClick={registerUser}
                    >
                      Register
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
export default RegistrationForm;
