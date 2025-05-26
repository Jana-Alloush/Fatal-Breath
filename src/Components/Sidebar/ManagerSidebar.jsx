import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import './ManagerSidebar.css';

const  ManagerSidebar = () => {
  const location = useLocation();

  // Helper function to check active route
  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="manager-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Gas Monitoring</h2>
        <nav>
          <div className="sidebar-section">
            <h3>Dashboard</h3>
            <Link 
              to="/manager" 
              className={isActive('/dashboard') ? 'active' : ''}
            >
              Overview
            </Link>
            <Link 
              to="/manager/houses" 
              className={isActive('/houses') ? 'active' : ''}
            >
              Houses
            </Link>
            <Link 
              to="/manager/rooms" 
              className={isActive('/rooms') ? 'active' : ''}
            >
              Rooms
            </Link>
            <Link 
              to="/manager/users" 
              className={isActive('/users') ? 'active' : ''}
            >
              Users
            </Link>
          </div>
          
          <div className="sidebar-section">
            <h3>Analytics</h3>
            <Link 
              to="/manager/analytics" 
              className={isActive('/analytics') ? 'active' : ''}
            >
              Trends
            </Link>
            <Link 
              to="/manager/announcements" 
              className={isActive('/announcements') ? 'active' : ''}
            >
              Announcements
            </Link>
          </div>
        </nav>
      </aside>

    
    </div>
  );
};

export default ManagerSidebar;
