import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiBell,
  FiBarChart2,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

import "../styles/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div>

        <div className="logo">
          <div className="logo-icon">AI</div>

          <div>
            <h2>AI CRM</h2>
            <small>Notification System</small>
          </div>
        </div>

        <div className="menu-title">
          MAIN
        </div>

        <nav className="menu">

          <NavLink to="/" className="menu-item">
            <FiGrid />
            Dashboard
          </NavLink>

          <NavLink to="/notifications" className="menu-item">
            <FiBell />
            Notifications
          </NavLink>

          <NavLink to="/analytics" className="menu-item">
            <FiBarChart2 />
            Analytics
          </NavLink>

          <NavLink to="/settings" className="menu-item">
            <FiSettings />
            Settings
          </NavLink>

        </nav>

      </div>

      <div>

        <div className="profile">

          <div className="avatar">
            AP
          </div>

          <div>

            <h4>Anisha Priya</h4>

            <p>Frontend Developer</p>

          </div>

        </div>

        <button className="logout-btn">

          <FiLogOut />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;