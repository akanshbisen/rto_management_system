import axios from "axios";

const RTO_API_BASE_URL = "http://localhost:8080/demo";

class DL {
  getDL() {
    return axios.get(RTO_API_BASE_URL + "/dl/search");
  }

  getDLById(dlId) {
    return axios.get(RTO_API_BASE_URL + "/dl/" + dlId);
  }

  updateDL(dl, dlId) {
    return axios.put(RTO_API_BASE_URL + "/dl/" + dlId, dl);
  }

  deleteDL(dlId) {
    return axios.delete(RTO_API_BASE_URL + "/dl/" + dlId);
  }
  getDLByUserId(userId) {
    return axios.get(RTO_API_BASE_URL + "/dl/byUserId/" + userId);
  }
}

export default new DL();
