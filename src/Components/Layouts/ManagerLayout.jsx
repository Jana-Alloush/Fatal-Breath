import { Outlet } from "react-router-dom";
import ManagerSidebar from "../Sidebar/ManagerSidebar";

const ManagerLayout = () => {
  return (
    <div className="manager-container">
      <ManagerSidebar />
      <main className="main-content">
        <div className="main-inner">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default ManagerLayout;
