import React, { useState } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "../inc/Login.css";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { URL } from "../../../config";

const AdminLogin = () => {
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
      const url = `${URL}/user/signin1`;

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Welcome to the application");

          const { id, name, role } = result["data"];
          console.log("role " + role);
          if (role === "user") {
            console.log("inside if");
            navigate("/userHome");
          } else {
            console.log("admin login");
            navigate("/adminHome");

            // persist the logged in user's information for future use
            sessionStorage["id"] = id;
            sessionStorage["name"] = name;
            sessionStorage["role"] = role;
            sessionStorage["loginStatus"] = 1;
            // if ("role" == "admin") {
            //   navigate("/adminHome");
            // } else {
            //   navigate("/");
            //   toast.warning("invalid credentials");
            // }
            // navigate to home component
          }
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
          <h2>Admin Login</h2>
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
    </div>
  );
};
export default AdminLogin;
