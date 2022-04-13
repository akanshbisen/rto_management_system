import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import DLService from "../../../Services/DLService";
const UpdateDL = (props) => {
  const { id } = useParams();
  const [dl, setDl] = useState([]);

  const [dl_no, setDl_no] = useState("");
  const [dl_issue_date, setDl_issue_date] = useState("");
  const [dl_expiry_date, setDl_expiry_date] = useState("");
  const [status, setStatus] = useState("");
 

  const navigate = useNavigate();

  useEffect(() => {
    DLService.getDLById(id)
      .then((response) => {
        console.log(response.data);
        let dl = response.data;
        setDl_no(dl.dl_no);
        setDl_issue_date(dl.dl_issue_date);
        setDl_expiry_date(dl.dl_expiry_date);
        setStatus(dl.status);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const updateDL = (e) => {
    e.preventDefault();
    let dl = {
      dl_no: dl_no,
      dl_issue_date: dl_issue_date,
      dl_expiry_date: dl_expiry_date,
      status: status,
      
    };
    console.log("ll => " + JSON.stringify(dl));
    console.log("id => " + JSON.stringify(id));
    DLService.updateDL(dl, id).then((res) => {
      navigate("/dlTable");
    });
  };

  const changeDl_noHandler = (event) => {
    setDl_no(event.target.value);
  };
  const changeIssue_dateHandler = (event) => {
    setDl_issue_date(event.target.value);
  };
  const changeExpiry_dateHandler = (event) => {
    setDl_expiry_date(event.target.value);
  };
  const changeStatusHandler = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 border-left">
                  <h4>DL Details</h4>
                  <hr />
                  <label htmlFor="name">DL No</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="DL_no"
                      aria-label="DL_no"
                      aria-describedby="addon-wrapping"
                      value={dl_no}
                      onChange={changeDl_noHandler}
                    />
                  </div>
                  <label htmlFor="name">Issue Date</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-email"></i>
                    </span>
                    <input
                      type="date"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={dl_issue_date}
                      onChange={changeIssue_dateHandler}
                    />
                  </div>
                  {/* <label htmlFor="name">Status</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-lock"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={status}
                      onChange={changeStatusHandler}
                    />
                  </div> */}
                  {/*  */}
                  {/*  */}
                  <label htmlFor="name">Expiry Date</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-calendar-check"></i>
                    </span>
                    <input
                      type="date"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={dl_expiry_date}
                      onChange={changeExpiry_dateHandler}
                    />
                  </div>
                  {/* <label htmlFor="name">To Date</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-bookmark"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      // aria-describedby="addon-wrapping"
                      autoComplete="off"
                      readOnly
                      value={to_date}
                    />
                  </div>{" "} */}
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />

                  <label htmlFor="name">Status</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="status"
                      id="flexRadioDefault1"
                      value="Pending"
                      // defaultChecked
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                    />
                    <label
                      className="form-check-label radiog"
                      htmlFor="flexRadioDefault1"
                    >
                      Pending
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="status"
                      value="Approved"
                      id="flexRadioDefault2"
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                    />
                    <label
                      className="form-check-label radiog"
                      htmlFor="flexRadioDefault2"
                    >
                      Approve
                    </label>
                  </div>
                  <div
                    className="btn-group mt-3"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button
                      type="button"
                      className="btn btn-danger "
                      style={{ marginRight: "20%", borderRadius: "10px" }}
                      onClick={() => navigate("/dlTable")}
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="btn btn-success"
                      style={{ borderRadius: "10px" }}
                      onClick={updateDL}
                    >
                      Approve
                    </button>
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

export default UpdateDL;
