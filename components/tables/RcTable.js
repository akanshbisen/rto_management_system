import React, { useState, useEffect } from "react";
import RcService from "../../Services/RcService";
import { useNavigate } from "react-router-dom";

const RcTable = (props) => {
  const [rc, setRc] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    RcService.getRc()
      .then((response) => {
        console.log(response.data);
        const result = response.data;
        setRc(result["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(rc);
  const deleteRc = (id) => {
    RcService.deleteRc(id).then((res) => {
      setRc(rc.filter((rc) => rc.id !== id));
    });
  };

  const viewRc = (id) => {
    navigate(`/view-rc/${id}`);
  };
  const editRc = (id) => {
    navigate(`/update-rc/${id}`);
  };

  console.log(rc);
  const rcList = rc.map((obj) => {
    return (
      <div className="rctable">
        <div className="container align-content-center">
          <div className="col-md-12 ">
            <h2 className="text-center mt-3">RC List</h2>
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
                id="RcTable"
                className="table table-striped table-bordered "
              >
                <thead className="table-dark text-center">
                  <tr className="text-center">
                    <th>Aadhar No.</th>
                    <th> Owner</th>
                    <th> Make</th>
                    <th> Vehicle Class</th>
                    <th> Status</th>
                    <th> Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rc.map((rc) => (
                    <tr className="text-center"  key={rc.id}>
                      <td> {rc.aadhar_no} </td>
                      <td> {rc.owner}</td>
                      <td> {rc.make}</td>
                      <td> {rc.vehicle_class}</td>
                      <td> {rc.status}</td>
                      <td>
                        <button
                          onClick={() => editRc(rc.id)}
                          className="btn btn-info"
                        >
                          Update{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => deleteRc(rc.id)}
                          className="btn btn-danger"
                        >
                          Delete{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => viewRc(rc.id)}
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
      {rcList[0]}
      {console.log(rcList)}
    </div>
  );
};
export default RcTable;
