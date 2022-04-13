import React, { useState, useEffect } from "react";
import PermitService from "../../Services/PermitService";
import { useNavigate } from "react-router-dom";

const PermitTable = (props) => {
  const [permit, setPermit] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    PermitService.getPermit()
      .then((response) => {
        console.log(response.data);
        const result = response.data;
        setPermit(result["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(permit);
  const deletePermit = (id) => {
    PermitService.deletePermit(id).then((res) => {
      setPermit(permit.filter((permit) => permit.id !== id));
    });
  };

  const viewPermit = (id) => {
    navigate(`/view-permit/${id}`);
  };
  const editPermit = (id) => {
    navigate(`/update-permit/${id}`);
  };

  console.log(permit);
  const permitList = permit.map((obj) => {
    return (
      <div className="permitTable">
        <div className="container align-content-center">
          <div className="col-md-12 ">
            <h2 className="text-center mt-3">Permit List</h2>
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
                id="permitTable"
                className="table table-striped table-bordered "
              >
                <thead className="table-dark text-center">
                  <tr className="text-center">
                    <th>Registration No</th>
                    <th>Registration id</th>
                    <th>From state</th>
                    <th>To State</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {permit.map((permit) => (
                    <tr className="text-center"  key={permit.id}>
                      <td> {permit.registration_no} </td>
                      <td> {permit.registration_id}</td>
                      <td> {permit.from_state}</td>
                      <td> {permit.to_state}</td>
                      <td> {permit.status}</td>
                      <td>
                        <button
                          onClick={() => editPermit(permit.id)}
                          className="btn btn-info"
                        >
                          Update{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => deletePermit(permit.id)}
                          className="btn btn-danger"
                        >
                          Delete{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => viewPermit(permit.id)}
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
      {permitList[0]}
      {console.log(permitList)}
    </div>
  );
};
export default PermitTable;
