import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./pages/auth/LogIn/LoginForm";
import SignUpForm from "./pages/auth/SignUp/SignUpForm";
import ManagerLayout from "./Components/Layouts/ManagerLayout";

// manager Pages
import ManagerDashboard from "./pages/manager/ManagerDashboard/ManagerDashboard";
import RoomManagement from "./pages/manager/RoomManagement/RoomManagement";
import Monitoring from "./pages/manager/RealTimeMonitoring/RealTimeMonitoring";
import Analytics from "./pages/manager/Analytics/Analytics";
import HouseManagement from "./pages/manager/Housemanagement/HouseManagemet";
import UserManagement from "./pages/manager/UserManagement/UserManagement";
import AnnouncementCenter from "./pages/manager/AnnouncementCenter/AnnouncementCenter";
// admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminHouseManagement from "./pages/admin/Adminhousemanagement";
import SensorMonitoring from "./pages/admin/SensorMonitoring";
import AdminUserManagement from "./pages/admin/AminUserManagment";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<SignUpForm />} />

        <Route path="/manager" element={<ManagerLayout />}>
          <Route index element={<ManagerDashboard />} />
          <Route path="houses" element={<HouseManagement />} />
          <Route path="rooms" element={<RoomManagement />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="monitoring" element={<Monitoring />} />
          <Route path="announcements" element={<AnnouncementCenter />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
