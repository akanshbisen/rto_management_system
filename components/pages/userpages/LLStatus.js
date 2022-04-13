import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Home.css";
import Service1 from "../../../assets/v-learners-license-services.png";
import Service2 from "../../../assets/v-renewal-of-registration.png";
import Service3 from "../../../assets/v-transfer-ownership.png";
import Service4 from "../../../assets/v-permit-services.png";
import Service5 from "../../../assets/puc1.png";
import Service6 from "../../../assets/lidence services1.png";
import LLService from "../../../Services/LLService";
import { toast } from "react-toastify";
function LLStatus() {
  const { id, name } = sessionStorage;
  const [llId, setLlId] = useState();
  const [ll, setLL] = useState([]);
  const [status, setStatus] = useState("");

  // console.log(id);
  // console.log(name);
  const navigate = useNavigate();
  useEffect(() => {
    // console.log({ id });
    LLService.getLLByUserId(id)
      .then((response) => {
        // console.log(response.data);
        // console.log(response.data.user);
        //  setUser(response.data.user);
        setLL(response.data);
        console.log(ll);
        // setLlId(ll.id);
        // console.log(llId);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const viewDL = (id) => {
    navigate(`/view-ll/${id}`);
  };

  const renderStatus = () => {
    console.log("renderColled");
    console.log(ll.status);
    setStatus(ll.status);

    if (ll.status === "Approved") {
      toast.success("Congratulations Your Learning Licence is Approved");
    } else {
      toast.warning("Your LL status is pending");
    }
  };
  return (
    <div>
      {/* Our Services */}
      <section className="section  border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">Check LL Status </h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-3 mt-2"></div>
            <div className="col-md-3 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service1}
                  alt="services"
                  onClick={() => navigate("/applyLL")}
                />
                <div className="card-body">
                  <h6>Apply for Learners License</h6>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service1}
                  alt="services"
                  // onClick={() => viewDL(llId)}
                  onClick={renderStatus}
                />
                <div className="card-body">
                  <h6>Learning Licence status</h6>
                  <p style={{fontSize:"30px",color:"green"}}>{status}</p>

                  {/* <Link to="/applyDL" className="btn btn-info shadow">
                    More
                  </Link> */}
                </div>
              </div>
            </div>
            {/* <div className="col-md-4 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service2}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/vehicleRegistration")}
                />
                <div className="card-body">
                  <h6>Vehicle Registration</h6>
                  <p></p>
                  <Link
                    to="/vehicleRegistration"
                    className="btn btn-info shadow"
                  >
                    More
                  </Link>
                </div>
              </div>
            </div> */}
            {/* 
            <div className="col-md-4 mt-4">
              <div className="card shadow sevice-card">
                <img
                  src={Service4}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/applyPermit")}
                />
                <div className="card-body">
                  <h6>Vehicle Permit</h6>
                  <p></p>
                  <Link to="/applyPermit" className="btn btn-info shadow">
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
                  onClick={() => navigate("/applyPuc")}
                />
                <div className="card-body">
                  <h6>PUC</h6>
                  <p></p>
                  <Link to="/applyPuc" className="btn btn-info shadow">
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
                  onClick={() => navigate("/ownerShipTransfer")}
                />
                <div className="card-body">
                  <h6>Transfer Ownership</h6>
                  <p></p>
                  <Link
                    to="/ownerShipTransfer"
                    className="btn btn-info shadow "
                  >
                    More
                  </Link>
                </div>
              </div>
            </div> */}
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
export default LLStatus;
