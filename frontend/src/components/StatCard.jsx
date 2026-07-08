import "../styles/stats.css";

function StatsCards({ notifications }) {
  const total = notifications.length;

  const unread = notifications.filter((n) => !n.read).length;

  const read = notifications.filter((n) => n.read).length;

  return (
    <div className="stats-container">
      <div className="stat-card">
        <h3>Total Notifications</h3>
        <h1>{total}</h1>
      </div>

      <div className="stat-card">
        <h3>Unread</h3>
        <h1>{unread}</h1>
      </div>

      <div className="stat-card">
        <h3>Read</h3>
        <h1>{read}</h1>
      </div>
    </div>
  );
}

export default StatsCards;