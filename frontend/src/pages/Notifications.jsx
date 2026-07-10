import { useState } from "react";

import NotificationHeader from "../components/NotificationHeader";
import NotificationToolbar from "../components/NotificationToolbar";
import NotificationList from "../components/NotificationList";

import notificationsData from "../data/notifications";

import "../styles/notifications.css";

function Notifications() {
  const [notifications, setNotifications] = useState(notificationsData);
  const [search, setSearch] = useState("");

  // Mark a single notification as read
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, read: true }
          : item
      )
    );
  };

  // Mark all notifications as read
  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({
        ...item,
        read: true,
      }))
    );
  };

  // Search notifications
  const filteredNotifications = notifications.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.message.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  // Statistics
  const total = notifications.length;

  const unread = notifications.filter(
    (item) => !item.read
  ).length;

  const read = notifications.filter(
    (item) => item.read
  ).length;

  const today = notifications.filter((item) =>
    item.time.includes("h")
  ).length;

  return (
    <div className="notifications-page">

      <NotificationHeader
        onMarkAllRead={markAllRead}
      />

      <div className="stats-grid">

        <div className="stat-card">
          <h4>Total Notifications</h4>
          <h2>{total}</h2>
          <p>All notifications</p>
        </div>

        <div className="stat-card">
          <h4>Unread</h4>
          <h2>{unread}</h2>
          <p>Needs attention</p>
        </div>

        <div className="stat-card">
          <h4>Read</h4>
          <h2>{read}</h2>
          <p>Already viewed</p>
        </div>

        <div className="stat-card">
          <h4>Today</h4>
          <h2>{today}</h2>
          <p>Latest activity</p>
        </div>

      </div>

      <NotificationToolbar
        search={search}
        setSearch={setSearch}
      />

      <NotificationList
        notifications={filteredNotifications}
        onRead={markAsRead}
      />

    </div>
  );
}

export default Notifications;