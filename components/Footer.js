import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  let footerStyle = {
    position: "relative",
    // top: "55vh",
    top: "100%",
    width: "100%",
    backgroundColor: "black",
  };

  return (
    <div className="yellow" style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col" style={{ color: "white", paddingTop: "18px" }}>
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li>Department</li>
              <li>Functions</li>
              <li>Power and Duties</li>
            </ul>
          </div>
          <div
            className="col-md-3"
            style={{ color: "white", paddingTop: "18px" }}
          >
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li>Driving Licence</li>
              <li>Vehicle Registration</li>
              <li>Permit</li>
              <li>Payment</li>
            </ul>
          </div>
          <div
            className="col-md-3"
            style={{ color: "white", paddingTop: "18px" }}
          >
            <h5>Policy</h5>
            <ul className="list-unstyled">
              <li>Acts and Rules</li>
              <li>Notification and Circulars</li>
            </ul>
          </div>
          <div
            className="col-md-3"
            style={{ color: "white", paddingTop: "18px" }}
          >
            <h5>
              <u>Citizen Corner</u>
            </h5>
            <ul className="list-unstyled">
              <Link to="/login">
                <li>LL status</li>
              </Link>
              <Link to="/login">
                <li>DL status</li>
              </Link>
              <Link to="/login">
                <li>Vehicle Transfer Status</li>
              </Link>
              <Link to="/login">
                <li>Permit Status</li>
              </Link>
            </ul>
          </div>
          <div className="col-md-3" style={{ paddingBottom: "1px" }}></div>
          <div
            style={{
              borderTop: "1px solid #fff ",
              // marginLeft: '20px',
              // marginRight: '20px',
              justifyContent: "center",
            }}
          ></div>
          <p
            className="col-md-9+"
            style={{ paddingTop: "15px", color: "white" }}
          >
            Copyright
            {/* &copy;2021&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Terms and
            Conditions&emsp; | &emsp;Privacy Policy&emsp; |&emsp; Help&emsp; |
            &emsp;Guidelines &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; */}
            &copy;2021 &emsp;&emsp;&emsp;&emsp;Terms and Conditions 
            &emsp;&emsp;&emsp;Privacy Policy &emsp; &emsp;&emsp;&emsp;Help 
            &emsp;&emsp;&emsp;&emsp;Guidelines&emsp;&emsp;&emsp;&emsp;&emsp;
            <span>
              <Link to="#" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </Link>
              &emsp;
              <a
                href=""
                className="facebook social"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              &emsp;
              <Link to="#" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Link>
              &emsp;
              <Link to="#" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
