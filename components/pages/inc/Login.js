import React, { useState } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { URL } from "../../../config";
import Footer from "../../Footer";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const validate = (event) => {
    event.preventDefault();

    if (email.length == 0) {
      toast.warning("please enter email");
    } else if (password.length == 0) {
      toast.warning("please enter password");
    } else {
      const body = {
        email,
        password,
        role,
      };

      // url to make signin api call
      const url = `${URL}/user/signin`;

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Welcome to the RTO Management system");

          // get the data sent by server
          const { id, name } = result["data"];

          // persist the logged in user's information for future use
          sessionStorage["id"] = id;
          sessionStorage["name"] = name;
          // sessionStorage["loginStatus"] = 1;
          console.log(name);
          console.log(id);
          // navigate to home component
          navigate("/userHome");
        } else {
          toast.error("Invalid user name or password");
        }
      });
    }
  };

  return (
    <div className="body">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h1>RTO Management System</h1>
          <p>
            RTO (Regional Transport Office) system is an application that is
            designed for the RTO for the process of registration of vehicles and
            issuing driving license process RTO Management System – License,
            LLR, Owner Ship Transfer based web Application. RTO Information
            System is an online information source developed for Road Transport
            Authority to facilitate the users in applying for various licenses
            and registrations.
          </p>
        </div>

        <div className="col-md-3" id="lf">
          <h2>Login</h2>
          <form onSubmit={validate}>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              // value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              className="form-control"
              // value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <input
              type="submit"
              className="btn btn-primary button form-control"
              value="Login"
            />
            <hr />
            <button
              className="btn btn-success button"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default Login;
