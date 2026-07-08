import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiBell,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";

import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-box">N</div>
        <h2>AI CRM</h2>
      </div>

      <nav className="menu">
        <NavLink to="/" className="menu-item">
          <FiGrid />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/notifications" className="menu-item">
          <FiBell />
          <span>Notifications</span>
        </NavLink>

        <NavLink to="/analytics" className="menu-item">
          <FiBarChart2 />
          <span>Analytics</span>
        </NavLink>

        <NavLink to="/settings" className="menu-item">
          <FiSettings />
          <span>Settings</span>
        </NavLink>
      </nav>

      <div className="profile">
        <div className="avatar">A</div>
        <div>
          <h4>Anisha</h4>
          <p>Frontend Dev</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;