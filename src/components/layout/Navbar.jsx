import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ isOpen, toggleSidebar }) => {
  return (
    <nav className="manager-navbar">
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
      </button>

      <div className="navbar-content">
        <h2 className="page-title">Dashboard</h2>

        <div className="navbar-actions">
          {/* Add any additional navbar items here */}
          <div className="user-profile">
            <span>Manager</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
