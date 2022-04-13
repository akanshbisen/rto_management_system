import React from "react";
import Vmc from "./inc/Vmc";
import Footer from "../Footer";
function About() {
  return (
    <div>
      {/* banner Design */}
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>About Us</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end"> Home/ About Us</h6>
            </div>
          </div>
        </div>
      </section>
      {/* ########## */}
      <section className="section border-bottom">
        <div className="container">
          <h5 className="main-heading">RTO Management System</h5>
          <div className="underline"></div>
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
      </section>
      {/* Our vison, mission and values */}
      {<Vmc />}
      {/* <Footer /> */}
    </div>
  );
}
export default About;
