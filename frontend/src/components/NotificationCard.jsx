function NotificationCard({ notification, onRead }) {

  const Icon = notification.icon;

  return (
    <div
      className={`notification-card ${!notification.read ? "unread" : ""}`}
      onClick={() => onRead(notification.id)}
    >

      <div className="notification-icon">
        <Icon />
      </div>

      <div className="notification-info">

        <div className="notification-top">

          <h3>{notification.title}</h3>

          <span>{notification.time}</span>

        </div>

        <p>{notification.message}</p>

        <div className="notification-bottom">

          <span className="category">
            {notification.category}
          </span>

          {!notification.read && (
            <span className="new-tag">
              New
            </span>
          )}

        </div>

      </div>

    </div>
  );
}

export default NotificationCard;