import { useState } from "react";

import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";
import NotificationList from "../components/NotificationList";

import "../styles/dashboard.css";

function Dashboard() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: "🟢",
      title: "Deal Approved",
      message: "Nike collaboration moved to Approved stage.",
      time: "2 min ago",
      read: false,
    },
    {
      id: 2,
      icon: "🔵",
      title: "Creator Replied",
      message: "Alex replied to your outreach message.",
      time: "10 min ago",
      read: false,
    },
    {
      id: 3,
      icon: "🟡",
      title: "Weekly Report",
      message: "Your analytics report is ready.",
      time: "Yesterday",
      read: true,
    },
  ]);

  return (
    <div>
      <Navbar notifications={notifications} />

      <div className="dashboard">
        <h1 className="heading">AI CRM Notification Dashboard</h1>

        <p className="subtitle">
          👋 Welcome back, Anisha! Here's what happened while you were away.
        </p>

        <StatsCards notifications={notifications} />

        <NotificationList
          notifications={notifications}
          setNotifications={setNotifications}
        />
      </div>
    </div>
  );
}

export default Dashboard;