import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { URL } from "../../../config";
import { toast } from "react-toastify";
import Footer from "../../Footer";
// import CarAnimation from "./caranimation/CarAnimation";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // used to navigate from one component to another
  const navigate = useNavigate();
  const signupUser = () => {
    if (name.length == 0) {
      toast.warning("Please enter fullname as per Aadhar card");
    } else if (email.length == 0) {
      toast.warning("Please enter email");
    } else if (password.length == 0) {
      toast.warning("Please enter password");
    } else if (confirmPassword.length == 0) {
      toast.warning("Please confirm your password");
    } else if (password != confirmPassword) {
      toast.warning("Password does not match");
    } else {
      const body = {
        name,
        email,
        password,
      };
      console.log(body);

      // url to call the api
      const url = `${URL}/user/signup`;

      // http method: post
      // body: contains the data to be sent to the API
      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Successfully signed up new user");

          // navigate to the signin page
          navigate("/login");
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
                <div className="col-md-4 border-left">
                  <h4>Sign up</h4>
                  <hr />
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" name"
                      aria-label="name"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>

                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-email"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="email id"
                      aria-label="email-id"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-lock-outline"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                      aria-label="password"
                      autoComplete="new-password"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="confirm password"
                      aria-label="password"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group py-3">
                    <button
                      className="btn btn-primary shadow w-100"
                      onClick={signupUser}
                    >
                      Sign up
                    </button>
                  </div>
                </div>
                <div className="col-md-8 border-start text-center">
                  <iframe
                    className="col-md-8"
                    frameBorder={0}
                    muted
                    autoPlay
                    width="100%"
                    height="320"
                    allow="autoplay"
                    loop
                    src="https://drive.google.com/file/d/1lAsyAwznGFNrHvh9cYeoli0Bncs25L00/preview"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};
export default Signup;
