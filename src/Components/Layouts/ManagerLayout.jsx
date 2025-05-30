// src/components/ManagerLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import ManagerSidebar from '../Sidebar/ManagerSidebar';
import '../../styles/components/sidebar/_managersidebar.scss';

const ManagerLayout = () => {
  return (
    <div className="manager-container">
      <ManagerSidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default ManagerLayout;
