import React from "react";
import "../inc/RegistrationForm.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { URL } from "../../../config";
import { toast } from "react-toastify";

const Payment = () => {
  const { id, name } = sessionStorage;
  const [user_id, setUser_id] = useState("");
  const [payment_for, setPayment_for] = useState("");
  const [payment_mode, setPayment_mode] = useState();
  const [amount, setAmount] = useState("");
  const [payment_date, setPayment_date] = useState("");
 
  const navigate = useNavigate();

  // ############################
  const pay = () => {
    // navigate("/");
    if (user_id.length == 0 || payment_for.length == 0 || payment_mode==0 || payment_date.length == 0 || amount.length ==0) {
      toast.warning("Field Required");
    } else {
      const body = {
        user_id,
        payment_for,
        payment_mode,
        amount,
        payment_date,
        
      };

      const url = `${URL}/payment/add_payment`;

      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Payment Successfull");

          // navigate to the home page
          navigate("/userHome");
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
                  <h4>Payment</h4>
                  <hr />
                  <label htmlFor="name">User id </label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Again enter user id"
                      aria-label="name"
                      value={id}
                      readOnly
                      aria-describedby="addon-wrapping"
                      onMouseOver={(e) => {
                        setUser_id(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">Payment for</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-directions-car"></i>
                    </span>
                    {/* <input
                      type="text"
                      className="form-control"
                      placeholder="Payment_for"
                      aria-label="Payment_for"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setPayment_for(e.target.value);
                      }}
                    /> */}
                    <select onChange={(e) => {
                        setPayment_for(e.target.value);
                      }} >
                    
                      <option defaultValue >Please select </option>
                      <option value="Driving License">Driving License</option>
                      <option value="Learning License">Learning License</option>
                      <option value="Vehicle Permit">Vehicle Permit </option>
                      <option value="Vehicle Puc">Vehicle Puc</option>
                      <option value="Vehicle Transfer">Vehicle Transfer</option>
                    </select>
                  </div>

                  <label htmlFor="name">Payment mode</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-card"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Payment_mode"
                      aria-label="from_date"
                      value="Online"
                      readOnly
                      aria-describedby="addon-wrapping"
                      onMouseOver={(e) => {
                        setPayment_mode("Online");
                      }}
                    />
                  </div>
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />
                  <label htmlFor="name">Amount</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-money"></i>
                    </span>
                    {/* <input
                      type="number"
                      className="form-control"
                      placeholder="Enter specific Amount"
                      aria-label="to_date"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setAmount(e.target.value);
                      }}
                    /> */}
                    <select onChange={(e) => {
                        setAmount(e.target.value);
                      }}>
                    
                      <option defaultValue >Please select amount</option>
                      <option value="3000">Vehicle Transfer : 3000</option>
                      <option value="1000">Driving : 1000</option>
                      <option value="800">Learning : 800</option>
                      <option value="200">Permit : 200</option>
                      <option value="100">Puc : 100</option>
                    </select>



                  </div>
                  <label htmlFor="name">Payment Date</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-calendar-check"></i>
                    </span>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="payment_date"
                      aria-label="co2"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setPayment_date(e.target.value);
                      }}
                    />
                  </div>
                  {/* <label htmlFor="name">hc</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-smartphone"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="hc"
                      aria-label="hc"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setHc(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">Aadhar No</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-smartphone"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Aadhar_no"
                      aria-label="Aadhar_no"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setAadhar_no(e.target.value);
                      }}
                    />
                  </div> */}
                  {/* ############################ */}

                  <div className="form-group py-3">
                    <button
                      className="btn btn-primary shadow w-100"
                      onClick={pay}
                    >
                      Apply
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
export default Payment;
