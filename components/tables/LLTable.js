import React, { useState, useEffect } from "react";
import LLService from "../../Services/LLService";
import { useNavigate } from "react-router-dom";

const LLTable = (props) => {
  const [ll, setLL] = useState([]);
  const [aadhar_no, setAadhar] = useState([]);
  const [status, setStatus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    LLService.getLL()
      .then((response) => {
        console.log(response.data);
        const result = response.data;
        setLL(result["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(ll);
  const deleteLL = (id) => {
    LLService.deleteLL(id).then((res) => {
      setLL(ll.filter((ll) => ll.id !== id));
    });
  };

  const viewLL = (id) => {
    navigate(`/view-ll/${id}`);
  };
  const editLL = (id) => {
    navigate(`/update-ll/${id}`);
  };

  console.log(ll);
  const llList = ll.map((obj) => {
    return (
      <div className="complainTable">
        <div className="container align-content-center">
          <div className="col-md-12 ">
            <h2 className="text-center mt-3">Learning Licence List</h2>
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
                id="llTable"
                className="table table-striped table-bordered "
              >
                <thead className="table-dark text-center">
                  <tr className="text-center">
                    <th>User id</th>
                    <th>Aadhar No</th>
                    <th>Licence Category</th>
                    {/* <th>To Date</th> */}
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {ll.map((ll) => (
                    <tr className="text-center"  key={ll.id}>
                      <td> {ll.user_id}</td>
                      <td> {ll.user.aadhar_no} </td>
                      <td> {ll.l_category}</td>
                      <td> {ll.status}</td>
                      {/* <td> {complain.status}</td> */}
                      <td>
                        <button
                          onClick={() => editLL(ll.id)}
                          className="btn btn-info"
                        >
                          Update{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => deleteLL(ll.id)}
                          className="btn btn-danger"
                        >
                          Delete{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => viewLL(ll.id)}
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
      {llList[0]}
      {console.log(llList)}
    </div>
  );
};
export default LLTable;
