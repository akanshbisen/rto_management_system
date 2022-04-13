import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../Home.css";
import Service1 from "../../../assets/v-learners-license-services.png";
import Service2 from "../../../assets/v-renewal-of-registration.png";
import Service3 from "../../../assets/v-transfer-ownership.png";
import Service4 from "../../../assets/v-permit-services.png";
import Service5 from "../../../assets/puc1.png";
import Service6 from "../../../assets/lidence services1.png";
function UserHome() {
  const { id, name } = sessionStorage;
  console.log(id);
  console.log(name);
  const navigate = useNavigate();
  const viewUser = (id) => {
    navigate(`/view-userProfile/${id}`);
  };

  return (
    <div>
      {/* Our Services */}

      <section className="section  border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">
                {" "}
                <div className="col">
                  <div className="float-end">
                    <div className="btn-group " role="group">
                      <button
                        id="btnGroupDrop1"
                        type="button"
                        className="btn btn-primary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Welcome {name} your user id: {id}
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="btnGroupDrop1"
                      >
                        <li>
                          {/* <Link to="/create-blog" className="dropdown-item">
                            Profile
                          </Link> */}
                        </li>
                        <li>
                          {/* <a className="dropdown-item">Profile</a> */}
                        </li>
                        <li>
                          <button
                            onClick={() => viewUser(id)}
                            className="dropdown-item"
                          >
                            Profile
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
              </h3>
              {/* <div className="underline mx-auto"></div> */}
            </div>
            <div className="col-md-4 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service1}
                  alt="services"
                  onClick={() => navigate("/llstatus")}
                />
                <div className="card-body">
                  <h6>Learners License</h6>
                  <p></p>
                  <Link to="/llstatus" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service1}
                  alt="services"
                  onClick={() => navigate("/dlstatus")}
                />
                <div className="card-body">
                  <h6> Drivers License</h6>
                  <p></p>
                  <Link to="/dlstatus" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service2}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/rcstatus")}
                />
                <div className="card-body">
                  <h6>Vehicle Registration</h6>
                  <p></p>
                  <Link to="/rcstatus" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4">
              <div className="card shadow sevice-card">
                <img
                  src={Service4}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/permitstatus")}
                />
                <div className="card-body">
                  <h6>Vehicle Permit</h6>
                  <p></p>
                  <Link to="/permitstatus" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card shadow sevice-card">
                <img
                  src={Service5}
                  alt="services"
                  onClick={() => navigate("/pucstatus")}
                />
                <div className="card-body">
                  <h6>PUC</h6>
                  <p></p>
                  <Link to="/pucstatus" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card shadow sevice-card">
                <img
                  src={Service3}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/transferstatus")}
                />
                <div className="card-body">
                  <h6>Transfer Ownership</h6>
                  <p></p>
                  <Link to="/transferstatus" className="btn btn-info shadow ">
                    More
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
export default UserHome;
