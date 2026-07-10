import {
  FiBell,
  FiAlertCircle,
  FiCheckCircle,
  FiMessageSquare,
} from "react-icons/fi";

import "../styles/latestNotifications.css";

const notifications = [
  {
    icon: <FiBell />,
    title: "New Lead Assigned",
    time: "2 min ago",
    color: "#EEF2FF",
  },
  {
    icon: <FiAlertCircle />,
    title: "Campaign Deadline Tomorrow",
    time: "30 min ago",
    color: "#FEF3C7",
  },
  {
    icon: <FiCheckCircle />,
    title: "Deal Successfully Closed",
    time: "1 hour ago",
    color: "#ECFDF5",
  },
  {
    icon: <FiMessageSquare />,
    title: "5 New Customer Messages",
    time: "Today",
    color: "#F3F4F6",
  },
];

function LatestNotifications() {
  return (
    <div className="notification-card">

      <div className="card-header">

        <h3>Latest Notifications</h3>

        <button>View All</button>

      </div>

      {notifications.map((item, index) => (

        <div className="notification-item" key={index}>

          <div
            className="notification-icon"
            style={{ background: item.color }}
          >
            {item.icon}
          </div>

          <div className="notification-content">

            <h4>{item.title}</h4>

            <span>{item.time}</span>

          </div>

        </div>

      ))}

    </div>
  );
}

export default LatestNotifications;