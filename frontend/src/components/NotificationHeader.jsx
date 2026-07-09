function NotificationHeader({ onMarkAllRead }) {
  return (
    <div className="notification-header">

      <div>
        <h1>Notifications</h1>
        <p>
          Stay updated with campaigns, creators and CRM activities.
        </p>
      </div>

      <button
        className="mark-btn"
        onClick={onMarkAllRead}
      >
        ✓ Mark All Read
      </button>

    </div>
  );
}

export default NotificationHeader;