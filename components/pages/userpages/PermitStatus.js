import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Home.css";
import Service1 from "../../../assets/v-learners-license-services.png";
import Service2 from "../../../assets/v-renewal-of-registration.png";
import Service3 from "../../../assets/v-transfer-ownership.png";
import Service4 from "../../../assets/v-permit-services.png";
import Service5 from "../../../assets/puc1.png";
import Service6 from "../../../assets/lidence services1.png";
import PermitService from "../../../Services/PermitService";
import { toast } from "react-toastify";
function PermitStatus() {
  const { id, name } = sessionStorage;
  const [permit, setPermit] = useState([]);
  const [user, setUser] = useState([]);
  const [status, setStatus] = useState("");

  console.log(id);
  console.log(name);
  const navigate = useNavigate();
  useEffect(() => {
    // console.log({ id });
    PermitService.getPermitByUserId(id)
      .then((response) => {
        // console.log(response.data);
        console.log(response.data.user);
        setUser(response.data.user);
        setPermit(response.data);
        console.log(permit);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderStatus = () => {
    console.log("renderColled");
    console.log(permit.status);
    setStatus(permit.status);

    if (permit.status === "Approved") {
      toast.success("Congratulations Your Vehicle Permit  is Approved");
    } else {
      toast.warning("Your vehicle permit status is pending");
    }
  };
  return (
    <div>
      {/* Our Services */}
      <section className="section  border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">Check Permit Status </h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-3 mt-2"></div>
            <div className="col-md-3 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service4}
                  alt="services"
                  onClick={() => navigate("/applyPermit")}
                />
                <div className="card-body">
                  <h6>Apply for Permit</h6>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service4}
                  alt="services"
                  // onClick={() => viewDL(llId)}
                  onClick={renderStatus}
                />
                <div className="card-body">
                  <h6>View Permit status</h6>
                  <p style={{ fontSize: "30px", color: "green" }}>{status}</p>

                  {/* <Link to="/applyDL" className="btn btn-info shadow">
                    More
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center">
      <a href="/userhome" className="btn btn-primary">Back</a>
      </div>
     <br></br><br></br>
    </div>
  );
}
export default PermitStatus;
