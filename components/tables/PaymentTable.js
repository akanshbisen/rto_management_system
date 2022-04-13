import React, { useState, useEffect } from "react";
import PaymentService from "../../Services/PaymentService";
import { useNavigate } from "react-router-dom";

const PaymentTable = (props) => {
  const [payment, setPayment] = useState([]);
  const [amount, setAmount] = useState([]);
  const [userid, setUserid] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    PaymentService.getPayment()
      .then((response) => {
        console.log(response.data);
        const result = response.data;
        setPayment(result["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(payment);
  const deletePayment = (id) => {
    PaymentService.deletePayment(id).then((res) => {
      setPayment(payment.filter((payment) => payment.id !== id));
    });
  };

  const viewPayment = (id) => {
    navigate(`/view-payment/${id}`);
  };
  const editPayment = (id) => {
    navigate(`/update-payment/${id}`);
  };

  console.log(payment);
  const paymentList = payment.map((obj) => {
    return (
      <div className="complainTable">
        <div className="container align-content-center">
          <div className="col-md-12 ">
            <h2 className="text-center mt-3">User Payment List</h2>
            <button
                style={{ marginLeft: "0px" }}
                onClick={() => navigate("/adminHome")}
                className="btn btn-outline-warning"
              >
                Dashbord
              </button>
            <br></br><br/>
            <div className="row">
              
              <table
                id="paymentTable"
                className="table table-striped table-bordered "
              >
                <thead className="table-dark text-center">
                  <tr className="text-center">
                    <th>Payment id</th>
                    <th>Amount</th>
                    <th>User id</th>
                    <th>To Date</th>
                    {/* <th>Status</th> */}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {payment.map((payment) => (
                    <tr className="text-center"  key={payment.id}>
                      <td> {payment.id}</td>
                      <td> {payment.amount} </td>
                      <td> {payment.user_id}</td>
                      <td> {payment.payment_date}</td>
                      {/* <td> {complain.status}</td> */}
                      <td>
                        {/* <button
                          onClick={() => editPayment(payment.id)}
                          className="btn btn-info"
                        >
                          Update{" "}
                        </button> */}
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => deletePayment(payment.id)}
                          className="btn btn-danger"
                        >
                          Delete{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => viewPayment(payment.id)}
                          className="btn btn-info"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      {paymentList[0]}
      {console.log(paymentList)}
    </div>
  );
};
export default PaymentTable;
