import {
  FiUser,
  FiCheckCircle,
  FiClock,
  FiFileText,
} from "react-icons/fi";

import "../styles/activity.css";

const activities = [
  {
    icon: <FiUser />,
    title: "Sarah Johnson",
    description: "Updated Nike Campaign",
    time: "2 min ago",
    color: "#EEF2FF",
  },
  {
    icon: <FiCheckCircle />,
    title: "Campaign Approved",
    description: "Apple Collaboration",
    time: "15 min ago",
    color: "#ECFDF5",
  },
  {
    icon: <FiClock />,
    title: "Reminder",
    description: "Meeting with Marketing Team",
    time: "1 hour ago",
    color: "#FEF3C7",
  },
  {
    icon: <FiFileText />,
    title: "Monthly Report",
    description: "Generated Successfully",
    time: "Today",
    color: "#F3F4F6",
  },
];

function ActivityPanel() {
  return (
    <div className="activity-card">
      <div className="card-header">
        <h3>Recent Activity</h3>

        <button>View All</button>
      </div>

      {activities.map((item, index) => (
        <div className="activity-item" key={index}>
          <div
            className="activity-icon"
            style={{ background: item.color }}
          >
            {item.icon}
          </div>

          <div className="activity-content">
            <h4>{item.title}</h4>

            <p>{item.description}</p>
          </div>

          <span>{item.time}</span>
        </div>
      ))}
    </div>
  );
}

export default ActivityPanel;