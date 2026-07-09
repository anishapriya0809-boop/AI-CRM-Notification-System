import notifications from "../data/notifications";

function NotificationStats() {

  const total = notifications.length;

  const unread = notifications.filter(
    n => n.status === "Unread"
  ).length;

  const read = notifications.filter(
    n => n.status === "Read"
  ).length;

  const today = notifications.filter(
    n => n.date === "Today"
  ).length;

  return (

    <div className="notification-stats">

      <div className="stat-box">

        <h3>Total</h3>

        <h2>{total}</h2>

      </div>

      <div className="stat-box">

        <h3>Unread</h3>

        <h2>{unread}</h2>

      </div>

      <div className="stat-box">

        <h3>Today</h3>

        <h2>{today}</h2>

      </div>

      <div className="stat-box">

        <h3>Read</h3>

        <h2>{read}</h2>

      </div>

    </div>

  );
}

export default NotificationStats;