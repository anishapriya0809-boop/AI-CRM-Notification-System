import "../styles/navbar.css";

function Navbar({ notifications }) {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <nav className="navbar">
      <div className="logo">
        AI CRM Notification System
      </div>

      <div className="notification-container">
        <span className="bell">🔔</span>

        {unreadCount > 0 && (
          <span className="badge">
            {unreadCount}
          </span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;