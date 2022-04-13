import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Home.css";
import Service1 from "../../../assets/v-learners-license-services.png";
import Service2 from "../../../assets/v-renewal-of-registration.png";
import Service3 from "../../../assets/v-transfer-ownership.png";
import Service4 from "../../../assets/v-permit-services.png";
import Service5 from "../../../assets/puc1.png";
import Service6 from "../../../assets/v-road-tax.png";

function AdminHome() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Our Services */}
      <section className="section  border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">Admin Dashboard</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-3 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service1}
                  alt="services"
                  onClick={() => navigate("/dlTable")}
                />
                <div className="card-body">
                  <h6>Drivers License Control </h6>
                  <p></p>
                  <Link to="/dlTable" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service2}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/rcTable")}
                />
                <div className="card-body">
                  <h6>Vehicle Registration Control</h6>
                  <p></p>
                  <Link to="/rcTable" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service3}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/vtransferTable")}
                />
                <div className="card-body">
                  <h6>Ownership Transfer Control</h6>
                  <p></p>
                  <Link to="/vtransferTable" className="btn btn-info shadow ">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service4}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/permitTable")}
                />
                <div className="card-body">
                  <h6>Vehicle Permit Control</h6>
                  <p></p>
                  <Link to="/permitTable" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-4">
              <div className="card shadow sevice-card">
                <img
                  src={Service1}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/LLTable")}
                />
                <div className="card-body">
                  <h6>Learning Licence Control</h6>
                  <p></p>
                  <Link to="/LLTable" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-4">
              <div className="card shadow sevice-card">
                <img
                  src={Service6}
                  alt="services"
                  onClick={() => navigate("/paymentTable")}
                />
                <div className="card-body">
                  <h6>Payments</h6>
                  <p></p>
                  <Link to="/paymentTable" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-4">
              <div className="card shadow sevice-card">
                <img
                  src={Service5}
                  alt="services"
                  onClick={() => navigate("/pucTable")}
                />
                <div className="card-body">
                  <h6>PUC Control</h6>
                  <p></p>
                  <Link to="/pucTable" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="col-md-3 mt-4"></div> */}

            <div className="col-md-3 mt-4">
              <div className="card shadow sevice-card">
                <img
                  src={Service4}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/userTable")}
                />
                <div className="card-body">
                  <h6>Users Control</h6>
                  <p></p>
                  <Link to="/complainTable" className="btn btn-info shadow">
                    Complaints
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AdminHome;
