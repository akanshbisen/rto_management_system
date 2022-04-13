import React from "react";
import "../inc/RegistrationForm.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { URL } from "../../../config";
import { toast } from "react-toastify";

const ApplyLL = () => {
  const {id, name} = sessionStorage;
  const [user_id, setUser_id] = useState();
  const [rto, setRto] = useState("");
  const [l_category, setL_category] = useState("");
 

  const navigate = useNavigate();

  // ############################
  const applyLL = () => {
    // navigate("/");
    if (user_id.length == 0 || rto.length ==0) {
      toast.warning("Field Required");
    } else {
      const body = {
        user_id,
        rto,
        l_category,
       
      };

      const url = `${URL}/ll/add_ll`;

      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Applied For Learning Licence");

          // navigate to the home page
          navigate("/payment");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 border-left">
                  <h4>Learning Licence </h4>
                  <hr />
                  <label htmlFor="name">User Id </label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Again enter User Id"
                      aria-label="User_Id"
                      value={id}
                      readOnly
                      aria-describedby="addon-wrapping"
                      onMouseOver={(e) => {
                        setUser_id(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">Name</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Again enter User Id"
                      value={name}
                      aria-label="User_Id"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setUser_id(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">RTO</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-smartphone"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Passing RTO"
                      aria-label="rto"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setRto(e.target.value);
                      }}
                    />
                  </div>

                 
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />
                  <label htmlFor="name">Licence category</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-account-box-mail"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="l_category"
                      value="Learning"
                      readOnly
                      aria-label="l_category"
                      aria-describedby="addon-wrapping"
                      onMouseOver={(e) => {
                        setL_category(e.target.value);
                      }}
                    />
                  </div>
                  
                  {/* ############################ */}

                  <div className="form-group py-3">
                    <button
                      className="btn btn-primary shadow w-100"
                      onClick={applyLL}
                    >
                      Apply
                    </button>
                    <br/><br/>
                    <a href="/llstatus"
                      className="btn btn-danger shadow w-100"
                     
                    >
                      Back
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ApplyLL;
