import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  AiFillDashboard,
  AiFillHome,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";

const ManagerSidebar = ({ isOpen, closeSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname.includes(path);

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      closeSidebar();
    }
  };

  const handleLogout = () => {
    // TODO: Add real logout logic (e.g., clearing tokens, calling API, etc.)
    console.log("Logging out...");

    localStorage.clear();
    navigate("/");
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <h1 className="sidebar-logo">Fatal Breath</h1>

      <div className="sidebar-section">
        <nav className="sidebar-content">
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
            to="/manager/members"
            className={isActive("/members") ? "active" : ""}
            onClick={handleLinkClick}
          >
            <AiOutlineUser className="icon" />
            Members
          </Link>
        </nav>

        <div className="sidebar-footer">
          <Link className="logout-link" onClick={handleLogout}>
            <AiOutlineLogout className="icon" />
            Logout
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default ManagerSidebar;
