import "../styles/notification.css";

function NotificationCard({ icon, title, message, time, read }) {
  return (
    <div className={`notification-card ${read ? "read" : ""}`}>
      <div className="card-header">
        <h3 className="notification-title">
          {icon} {title}
        </h3>

        <span className="notification-time">
          {time}
        </span>
      </div>

      <p className="notification-message">
        {message}
      </p>

      {!read && (
        <span className="unread">
          ● Unread
        </span>
      )}
    </div>
  );
}

export default NotificationCard;