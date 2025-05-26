import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./pages/auth/LogIn/LoginForm";
import SignUpForm from "./pages/auth/SignUp/SignUpForm";
import ManagerLayout from "./Components/Layouts/ManagerLayout";

// manager Pages
import ManagerDashboard from "./pages/manager/ManagerDashboard/ManagerDashboard";
import RoomManagement from "./pages/manager/RoomManagement/RoomManagement";
import Monitoring from "./pages/manager/RealTimeMonitoring/RealTimeMonitoring";
import Announcements from "./pages/manager/Announcements/Announcements";
import Analytics from "./pages/manager/Analytics/Analytics";

// admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import HouseManagement from "./pages/admin/HouseManagement";
import SensorMonitoring from "./pages/admin/SensorMonitoring";
import UserManagement from "./pages/admin/UserManagment";

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
          <Route path="announcements" element={<Announcements />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
