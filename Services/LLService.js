import axios from "axios";

const RTO_API_BASE_URL = "http://localhost:8080/demo";

class LL {
  getLL() {
    return axios.get(RTO_API_BASE_URL + "/ll/search");
  }

  getLLById(llId) {
    return axios.get(RTO_API_BASE_URL + "/ll/" + llId);
  }

  updateLL(ll, llId) {
    return axios.put(RTO_API_BASE_URL + "/ll/" + llId, ll);
  }

  deleteLL(llId) {
    return axios.delete(RTO_API_BASE_URL + "/ll/" + llId);
  }
  getLLByUserId(userId) {
    return axios.get(RTO_API_BASE_URL + "/ll/byUserId/" + userId);
  }
}

export default new LL();
