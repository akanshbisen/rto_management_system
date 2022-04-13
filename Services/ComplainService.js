import axios from "axios";

const RTO_API_BASE_URL = "http://localhost:8080/demo";

class Complain {
  getComplain() {
    return axios.get(RTO_API_BASE_URL + "/complain/search");
  }

  getComplainById(complainId) {
    return axios.get(RTO_API_BASE_URL + "/complain/" + complainId);
  }

  updateComplain(complain, complainId) {
    return axios.put(RTO_API_BASE_URL + "/complain/" + complainId, complain);
  }

  deleteComplain(complainId) {
    return axios.delete(RTO_API_BASE_URL + "/complain/" + complainId);
  }
  getComplainByUserId(userId) {
    return axios.get(RTO_API_BASE_URL + "/complain/byUserId/" + userId);
  }
}

export default new Complain();
