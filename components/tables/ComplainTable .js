import React, { useState, useEffect } from "react";
import ComplainService from "../../Services/ComplainService";
import { useNavigate } from "react-router-dom";

const ComplainTable = (props) => {
  const [complain, setComplain] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    ComplainService.getComplain()
      .then((response) => {
        console.log(response.data);
        const result = response.data;
        setComplain(result["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(complain);
  const deleteComplain = (id) => {
    ComplainService.deleteComplain(id).then((res) => {
      setComplain(complain.filter((complain) => complain.id !== id));
    });
  };

  const viewComplain = (id) => {
    navigate(`/view-complain/${id}`);
  };
  const editComplain = (id) => {
    navigate(`/update-complain/${id}`);
  };

  console.log(complain);
  const complainList = complain.map((obj) => {
    return (
      <div className="complainTable">
        <div className="container align-content-center">
          <div className="col-md-12 ">
            <h2 className="text-center mt-3">Complain List</h2>

            <br></br>
            <div className="row">
              <button
                style={{ marginLeft: "0px" }}
                onClick={() => navigate("/adminHome")}
                className="btn btn-outline-warning"
              >
                Dashbord
              </button>
              <table
                id="complainTable"
                className="table table-striped table-bordered "
              >
                <thead className="table-dark text-center">
                  <tr className="text-center">
                    <th>Aadhar No</th>
                    <th>User id</th>
                    <th>Complain No</th>
                    {/* <th>To Date</th> */}
                    {/* <th>Status</th> */}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {complain.map((complain) => (
                    <tr className="text-center" key={complain.id}>
                      <td> {complain.aadhar_no} </td>
                      <td> {complain.user_id}</td>
                      <td> {complain.complain_no}</td>
                      {/* <td> {complain.to_date}</td> */}
                      {/* <td> {complain.status}</td> */}
                      <td>
                        <button
                          onClick={() => editComplain(complain.id)}
                          className="btn btn-info"
                        >
                          Update{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => deleteComplain(complain.id)}
                          className="btn btn-danger"
                        >
                          Delete{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => viewComplain(complain.id)}
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
      {complainList[0]}
      {console.log(complainList)}
    </div>
  );
};
export default ComplainTable;
