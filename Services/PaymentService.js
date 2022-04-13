import axios from "axios";

const RTO_API_BASE_URL = "http://localhost:8080/demo";

class Payment {
  getPayment() {
    return axios.get(RTO_API_BASE_URL + "/payment/search");
  }

  getPaymentById(paymentId) {
    return axios.get(RTO_API_BASE_URL + "/payment/" + paymentId);
  }

  updatePayment(payment, paymentId) {
    return axios.put(RTO_API_BASE_URL + "/payment/" + paymentId, payment);
  }

  deletePayment(paymentId) {
    return axios.delete(RTO_API_BASE_URL + "/payment/" + paymentId);
  }
  getPaymentByUserId(userId) {
    return axios.get(RTO_API_BASE_URL + "/payment/byUserId/" + userId);
  }
}

export default new Payment();
