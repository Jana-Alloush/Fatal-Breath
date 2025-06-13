import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiFillDashboard,
  AiFillHome,
  AiFillShop,
  AiOutlineUser,
  AiOutlineAreaChart,
  AiOutlineNotification,
  AiOutlineMonitor,
  AiFillNotification,
} from "react-icons/ai";

const ManagerSidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="manager-container">
      <aside className="sidebar">
        <h1 className="sidebar-logo">Fatal Breath</h1>
        <nav>
          <div className="sidebar-section">
            <h3>Dashboard</h3>
            <Link
              to="/manager"
              className={isActive("/dashboard") ? "active" : ""}
            >
              <AiFillDashboard className="icon" />
              Overview
            </Link>
            <Link
              to="/manager/houses"
              className={isActive("/houses") ? "active" : ""}
            >
              <AiFillHome className="icon" />
              Houses
            </Link>
            {/* <Link
              to="/manager/rooms"
              className={isActive("/rooms") ? "active" : ""}
            >
              <AiFillShop className="icon" />
              Rooms
            </Link> */}
            <Link
              to="/manager/users"
              className={isActive("/users") ? "active" : ""}
            >
              <AiOutlineUser className="icon" />
              Users
            </Link>
          </div>

          <div className="sidebar-section">
            <h3>Reports & Updates</h3>
            <Link
              to="/manager/analytics"
              className={isActive("/analytics") ? "active" : ""}
            >
              <AiOutlineAreaChart className="icon" />
              Analytics
            </Link>
            <Link
              to="/manager/announcements"
              className={isActive("/announcements") ? "active" : ""}
            >
              <AiOutlineNotification  className="icon" />
              Announcements
            </Link>

            <Link
              to="/manager/monitoring"
              className={isActive("/monitoring") ? "active" : ""}
            >
              <AiOutlineMonitor className="icon" />
              Real-Time Monitoring
            </Link>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default ManagerSidebar;
