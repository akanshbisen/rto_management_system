import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Home.css";
import Service1 from "../../../assets/v-learners-license-services.png";
import Service2 from "../../../assets/v-renewal-of-registration.png";
import Service3 from "../../../assets/v-transfer-ownership.png";
import Service4 from "../../../assets/v-permit-services.png";
import Service5 from "../../../assets/puc1.png";
import Service6 from "../../../assets/lidence services1.png";
import DLService from "../../../Services/DLService";
import { toast } from "react-toastify";
function DLStatus() {
  const { id, name } = sessionStorage;
  const [dlId, setDlId] = useState("");
  const [dl, setDL] = useState([]);
  const [status, setStatus] = useState("");

  const [dl_no, setDl_no] = useState("");
  const [dl_issue_date, setDl_issue_date] = useState("");
  const [dl_expiry_date, setDl_expiry_date] = useState("");
  const [gender, setGender] = useState("");
  const [blood_group, setBlood_group] = useState("");
  const [l_category, setL_category] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  // const canvas = useRef(null);
  const [user, setUser] = useState([]);
  const [dlphoto, setDlphoto] = useState("");

  // console.log(id);
  // console.log(name);
  const navigate = useNavigate();
  useEffect(() => {
    // console.log({ id });
    DLService.getDLByUserId(id)
      .then((response) => {
        console.log(response.data);

        setDL(response.data);
        console.log(dl);
        setUser(response.data.user);
        setBlood_group(user.blood_group);
        setAddress(user.address);
        setDob(user.dob);
        setGender(user.gender);
        setDl_issue_date(dl.dl_issue_date);
        setDl_expiry_date(dl.dl_expiry_date);
        setL_category(dl.l_category);
        setDl_no(dl.dl_no);
        
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
    console.log(dl.status);
    setStatus(dl.status);
    console.log(dl);

    if (dl.status === "Approved") {
      toast.success("Congratulations Your Driving Licence is Approved");
      setDlId(
        
        <a href="/dldownload">show licence</a>
      );
    } else {
      toast.warning("Your dl status is pending");
    }
  };
  return (
    <div>
      {/* Our Services */}
      <section className="section  border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">Check DL Status </h3>
              <div className="underline mx-auto"></div>
            </div>
             
            <div className="col-md-3 mt-2"></div>
            <div className="col-md-3 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service1}
                  alt="services"
                  onClick={() => navigate("/applyDL")}
                />
                <div className="card-body">
                  <h6>Apply for Driving License</h6>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service1}
                  alt="services"
                  
                  onClick={renderStatus}
                />
                <div className="card-body">
                  <h6>Driving Licence status</h6>
                  <p style={{ fontSize: "30px", color: "green" }}>{status}</p>
                  {dlId}
                  
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
export default DLStatus;
