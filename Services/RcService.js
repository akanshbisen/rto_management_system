import axios from "axios";

const RTO_API_BASE_URL = "http://localhost:8080/demo";

class Rc {
  getRc() {
    return axios.get(RTO_API_BASE_URL + "/rc/search");
  }

  getRcById(rcId) {
    return axios.get(RTO_API_BASE_URL + "/rc/" + rcId);
  }

  updateRc(rc, rcId) {
    return axios.put(RTO_API_BASE_URL + "/rc/" + rcId, rc);
  }

  deleteRc(rcId) {
    return axios.delete(RTO_API_BASE_URL + "/rc/" + rcId);
  }
  getRcByUserId(userId) {
    return axios.get(RTO_API_BASE_URL + "/rc/byUserId/" + userId);
  }
}

export default new Rc();
