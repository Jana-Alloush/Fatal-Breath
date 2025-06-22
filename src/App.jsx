import { BrowserRouter, Routes, Route } from "react-router-dom";


// manager Pages

import OverviewPage from "./pages/manager/OverviewPage/OverviewPage";
import RoomManagement from "./pages/manager/RoomManagement/RoomManagement";
import HouseManagement from "./pages/manager/Housemanagement/HouseManagemet";
import UserManagement from "./pages/manager/UserManagement/UserManagement";
import RoomView from "./pages/manager/RoomManagement/ViewRooms";

import AuthPage from "./pages/auth/AuthPage";
import DashboardLayout from "./layouts/DashboardLayout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />

        <Route path="/manager" element={<DashboardLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="houses" element={<HouseManagement />} />
          <Route path="rooms" element={<RoomManagement />} />
          <Route path="users" element={<UserManagement />} />
        </Route>

        <Route path="/houses/:houseId/rooms" element={<RoomView />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
