import Footer from "./components/Footer";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Complain from "./components/pages/userpages/Complain";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useHistory,
} from "react-router-dom";
import Login from "./components/pages/inc/Login";
import Signup from "./components/pages/inc/Signup";
import RegistrationForm from "./components/pages/inc/RegistrationForm";
import UserHome from "./components/pages/userpages/UserHome";
import AdminHome from "./components/pages/adminpages/AdminHome";
import UserTable from "./components/tables/UserTable";
import AdminLogin from "./components/pages/adminpages/Login";
import ViewUser from "./components/pages/adminpages/ViewUsers";
import UpdateUser from "./components/pages/adminpages/UpdateUser";
import RcTable from "./components/tables/RcTable";
import ViewRc from "./components/pages/adminpages/ViewRc";
import UpdateRc from "./components/pages/adminpages/UpdateRc";
import VtransferTable from "./components/tables/VtransferTable ";
import ViewVehicleTransfer from "./components/pages/adminpages/ViewVehicleTransfer";
import UpdateVTransfer from "./components/pages/adminpages/UpdateVTransfer";
import VehicleRegistration from "./components/pages/userpages/VehicleRegistration";
import OwnershipTransfer from "./components/pages/userpages/OwnershipTransfer";
import ApplyPermit from "./components/pages/userpages/ApplyPermit";
import ApplyPuc from "./components/pages/userpages/ApplyPuc";
import ApplyLL from "./components/pages/userpages/ApplyLL";
import ApplyDL from "./components/pages/userpages/ApplyDL";
import PermitTable from "./components/tables/PermitTable";
import ViewPermit from "./components/pages/adminpages/ViewPermit";
import UpdatePermit from "./components/pages/adminpages/UpdatePermit";
import PucTable from "./components/tables/PucTable";
import ViewPuc from "./components/pages/adminpages/ViewPuc";
import UpdatePuc from "./components/pages/adminpages/UpdatePuc";
import ComplainTable from "./components/tables/ComplainTable ";
import ViewComplain from "./components/pages/adminpages/ViewComplain";
import UpdateComplain from "./components/pages/adminpages/UpdateComplain";
import LLTable from "./components/tables/LLTable";
import DLTable from "./components/tables/DLTable";
import ViewLL from "./components/pages/adminpages/ViewLL";
import ViewDL from "./components/pages/adminpages/ViewDL";
import UpdateLL from "./components/pages/adminpages/UpdateLL";
import UpdateDL from "./components/pages/adminpages/UpdateDL";
import LLStatus from "./components/pages/userpages/LLStatus";
import ViewUsersProfile from "./components/pages/adminpages/ViewUsersProfile";
import DLStatus from "./components/pages/userpages/DLStatus";
import DLDownload from "./components/pages/inc/CertificateGenerator/testCertificate";
import RcStatus from "./components/pages/userpages/RcStatus";
import VehicleTransferStatus from "./components/pages/userpages/VehicleTransferStatus";
import PermitStatus from "./components/pages/userpages/PermitStatus";
import PucStatus from "./components/pages/userpages/PucStatus";
import ViewPayment from "./components/pages/adminpages/ViewPayment";
import PaymentTable from "./components/tables/PaymentTable";
import Payment from "./components/pages/userpages/Payment";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/complaint" element={<Complain />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<RegistrationForm />} />
          {/* <Route path="/table" element={<UserTable />} /> */}
          <Route path="/userHome" element={<UserHome />} />
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/userTable" element={<UserTable />} />
          <Route path="/view-user/:id" element={<ViewUser />} />
          <Route path="/view-userProfile/:id" element={<ViewUsersProfile />} />
          <Route path="/update-user/:id" element={<UpdateUser />} />
          <Route path="/rcTable" element={<RcTable />} />
          <Route path="/view-rc/:id" element={<ViewRc />} />
          <Route path="/update-rc/:id" element={<UpdateRc />} />
          <Route path="/vtransferTable" element={<VtransferTable />} />
          <Route path="/view-vtransfer/:id" element={<ViewVehicleTransfer />} />
          <Route path="/update-vtransfer/:id" element={<UpdateVTransfer />} />
          <Route
            path="/vehicleRegistration"
            element={<VehicleRegistration />}
          />
          <Route path="/ownerShipTransfer" element={<OwnershipTransfer />} />
          <Route path="/applyPermit" element={<ApplyPermit />} />
          <Route path="/applyPuc" element={<ApplyPuc />} />
          <Route path="/applyLL" element={<ApplyLL />} />
          <Route path="/applyDL" element={<ApplyDL />} />
          <Route path="/permitTable" element={<PermitTable />} />
          <Route path="/view-permit/:id" element={<ViewPermit />} />
          <Route path="/update-permit/:id" element={<UpdatePermit />} />
          <Route path="/pucTable" element={<PucTable />} />
          <Route path="/view-puc/:id" element={<ViewPuc />} />
          <Route path="/update-puc/:id" element={<UpdatePuc />} />
          <Route path="/complainTable" element={<ComplainTable />} />
          <Route path="/view-complain/:id" element={<ViewComplain />} />
          <Route path="/update-complain/:id" element={<UpdateComplain />} />
          <Route path="/llTable" element={<LLTable />} />
          <Route path="/view-ll/:id" element={<ViewLL />} />
          <Route path="/update-ll/:id" element={<UpdateLL />} />
          <Route path="/dlTable" element={<DLTable />} />
          <Route path="/view-dl/:id" element={<ViewDL />} />
          <Route path="/update-dl/:id" element={<UpdateDL />} />
          <Route path="/llstatus" element={<LLStatus />} />
          <Route path="/dlstatus" element={<DLStatus />} />
          <Route path="/dldownload" element={<DLDownload />} />
          <Route path="/rcstatus" element={<RcStatus />} />
          <Route path="/transferstatus" element={<VehicleTransferStatus />} />
          <Route path="/permitstatus" element={<PermitStatus />} />
          <Route path="/pucstatus" element={<PucStatus />} />
          {/* <Route path="/rcstatus" element={<RcStatus />} /> */}
          <Route path="/view-payment/:id" element={<ViewPayment />} />
          <Route path="/paymentTable" element={<PaymentTable />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>

        <Footer />
      </Router>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
