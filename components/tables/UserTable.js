import React, { useState, useEffect } from "react";
import UserService from "../../Services/UserService";
import { useNavigate } from "react-router-dom";

const UserTable = (props) => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    UserService.getUser()
      .then((response) => {
        console.log(response.data);
        const result = response.data;
        setUser(result["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(user);
  const deleteUser = (id) => {
    UserService.deleteUser(id).then((res) => {
      setUser(user.filter((user) => user.id !== id));
    });
  };

  const viewUser = (id) => {
    navigate(`/view-user/${id}`);
  };

  const editUser = (id) => {
    navigate(`/update-user/${id}`);
  };

  console.log(user);
  const userList = user.map((obj) => {
    return (
      <div className="utable">
        <div className="container align-content-center">
          <div className="col-md-12 ">
            <h2 className="text-center mt-3">Users List</h2>
            <button
                style={{ marginLeft: "0px" }}
                onClick={() => navigate("/adminHome")}
                className="btn btn-outline-warning"
              >
                Dashbord
              </button>
            <br></br><br></br>
            <div className="row">
              
              <table
                id="usertable"
                className="table table-striped table-bordered "
              >
                <thead className="table-dark text-center">
                  <tr className="text-center">
                    <th>Aadhar No.</th>
                    <th> Email</th>
                    <th> Name</th>
                    <th> Address</th>
                    <th> Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((user) => (
                    <tr className="text-center"  key={user.id}>
                      <td> {user.aadhar_no} </td>
                      <td> {user.email}</td>
                      <td> {user.name}</td>
                      <td> {user.address}</td>
                      <td>
                        <button
                          onClick={() => editUser(user.id)}
                          className="btn btn-info"
                        >
                          Update{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => deleteUser(user.id)}
                          className="btn btn-danger"
                        >
                          Delete{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => viewUser(user.id)}
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
      {userList[0]}
      {console.log(userList)}
    </div>
  );
};
export default UserTable;
