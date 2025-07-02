import { BrowserRouter, Routes, Route } from "react-router-dom";

import OverviewPage from "./pages/manager/OverviewPage/OverviewPage";
import RoomManagement from "./pages/manager/RoomManagement/RoomManagement";
import HouseManagement from "./pages/manager/Housemanagement/HouseManagemet";
import UserManagement from "./pages/manager/UserManagement/UserManagement";
import RoomView from "./pages/manager/RoomManagement/ViewRooms";

import AuthPage from "./pages/auth/AuthPage";
import DashboardLayout from "./layouts/DashboardLayout";
import LandingPage from "./pages/landing/LandingPage";
import NotFoundPage from "./pages/NotFoundPage"; // <- create this component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />

        <Route path="/manager" element={<DashboardLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="houses" element={<HouseManagement />} />
          <Route path="rooms" element={<RoomManagement />} />
          <Route path="members" element={<UserManagement />} />
          <Route path="houses/:houseId" element={<RoomView />} />
        </Route>


        {/* Catch-all route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
