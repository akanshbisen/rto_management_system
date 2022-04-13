import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/RTOLOGO.png";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              style={{ width: "80px", height: "55px", borderRadius: "20%" }}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:'0px'}}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/complaint">
                  Complaint
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link " to="/UserTable">
                  UserTable
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link " to="/signup">
                  Sign up
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link " to="/rcTable">
                  rcTable
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link " to="/vtransferTable">
                  VtransferTable
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link " to="/vehicleRegistration">
                  VehicleRegistration
                </Link>
              </li> */}
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div className="d-flex ">
              <button
                type="button"
                className="btn btn-outline-secondary shadow-w-100"
                // className="btn btn-bg-primary shadow-w-100"
                onClick={() => navigate("/login")}
              >
                User Login
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="adminLogin">
                    Admin login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/register">
                    User registration
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
