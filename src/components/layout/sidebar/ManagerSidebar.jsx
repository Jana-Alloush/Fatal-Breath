import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  AiFillDashboard,
  AiFillHome,
  AiOutlineUser,
  AiOutlineAreaChart,
  AiOutlineNotification,
  AiOutlineMonitor,
} from "react-icons/ai";

const ManagerSidebar = ({ isOpen, closeSidebar }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname.includes(path);

  const handleLinkClick = () => {
    // Close sidebar on mobile when a link is clicked
    if (window.innerWidth <= 768) {
      closeSidebar();
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <h1 className="sidebar-logo">Fatal Breath</h1>
      <nav>
        <div className="sidebar-section">
          <h3>Dashboard</h3>
          <Link
            to="/manager"
            className={
              isActive("/manager") && location.pathname === "/manager"
                ? "active"
                : ""
            }
            onClick={handleLinkClick}
          >
            <AiFillDashboard className="icon" />
            Overview
          </Link>
          <Link
            to="/manager/houses"
            className={isActive("/houses") ? "active" : ""}
            onClick={handleLinkClick}
          >
            <AiFillHome className="icon" />
            Houses
          </Link>
          <Link
            to="/manager/users"
            className={isActive("/users") ? "active" : ""}
            onClick={handleLinkClick}
          >
            <AiOutlineUser className="icon" />
            Users
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default ManagerSidebar;
