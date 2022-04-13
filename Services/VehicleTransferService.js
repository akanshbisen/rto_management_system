import axios from "axios";

const RTO_API_BASE_URL = "http://localhost:8080/demo";

class VehicleTransfer {
  getVtransfer() {
    return axios.get(RTO_API_BASE_URL + "/vehicle_transfer/search");
  }

  getVtransferById(vtransferId) {
    return axios.get(RTO_API_BASE_URL + "/vehicle_transfer/" + vtransferId);
  }

  updateVehicleTransfer(vtransfer, vtransferId) {
    return axios.put(
      RTO_API_BASE_URL + "/vehicle_transfer/" + vtransferId,
      vtransfer
    );
  }

  deleteVehicleTransfer(vtransferId) {
    return axios.delete(RTO_API_BASE_URL + "/vehicle_transfer/" + vtransferId);
  }
  getVehicleTransferByUserId(userId) {
    return axios.get(RTO_API_BASE_URL + "/vehicle_transfer/byUserId/" + userId);
  }
}

export default new VehicleTransfer();
