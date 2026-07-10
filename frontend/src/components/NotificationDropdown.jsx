import { Link } from "react-router-dom";
import "../styles/topbar.css";

function NotificationDropdown({
  notifications,
  onRead,
  onClose,
}) {
  return (
    <div className="notification-dropdown">

      <div className="dropdown-header">

        <h3>Notifications</h3>

        <button onClick={onClose}>✕</button>

      </div>

      {notifications.slice(0,5).map((item)=>{

        const Icon = item.icon;

        return(

          <div
            key={item.id}
            className={`dropdown-item ${!item.read ? "dropdown-unread" : ""}`}
            onClick={()=>onRead(item.id)}
          >

            <div className="dropdown-icon">
              <Icon/>
            </div>

            <div className="dropdown-content">

              <h4>{item.title}</h4>

              <p>{item.message}</p>

              <small>{item.time}</small>

            </div>

          </div>

        )

      })}

      <Link
        to="/notifications"
        className="view-all-btn"
        onClick={onClose}
      >
        View All Notifications
      </Link>

    </div>
  );
}

export default NotificationDropdown;