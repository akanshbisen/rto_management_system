import React, { useState, useEffect } from "react";
import PucServices from "../../Services/PucService";
import { useNavigate } from "react-router-dom";

const PucTable = (props) => {
  const [puc, setPuc] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    PucServices.getPuc()
      .then((response) => {
        console.log(response.data);
        const result = response.data;
        setPuc(result["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(puc);
  const deletePuc = (id) => {
    PucServices.deletePuc(id).then((res) => {
      setPuc(puc.filter((permit) => permit.id !== id));
    });
  };

  const viewPuc = (id) => {
    navigate(`/view-puc/${id}`);
  };
  const editPuc = (id) => {
    navigate(`/update-puc/${id}`);
  };

  console.log(puc);
  const pucList = puc.map((obj) => {
    return (
      <div className="pucTable">
        <div className="container align-content-center">
          <div className="col-md-12 ">
            <h2 className="text-center mt-3">Puc List</h2>

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
                id="pucTable"
                className="table table-striped table-bordered "
              >
                <thead className="table-dark text-center">
                  <tr className="text-center">
                    <th>Registration No</th>
                    <th>Registration id</th>
                    <th>From Date</th>
                    <th>To Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {puc.map((puc) => (
                    <tr className="text-center"  key={puc.id}>
                      <td> {puc.registration_no} </td>
                      <td> {puc.registration_id}</td>
                      <td> {puc.from_date}</td>
                      <td> {puc.to_date}</td>
                      <td> {puc.status}</td>
                      <td>
                        <button
                          onClick={() => editPuc(puc.id)}
                          className="btn btn-info"
                        >
                          Update{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => deletePuc(puc.id)}
                          className="btn btn-danger"
                        >
                          Delete{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => viewPuc(puc.id)}
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
      {pucList[0]}
      {console.log(pucList)}
    </div>
  );
};
export default PucTable;
