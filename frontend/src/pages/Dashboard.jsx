import StatsCards from "../components/StatsCards";
import AnalyticsChart from "../components/AnalyticsChart";
import PipelineTable from "../components/PipelineTable";
import ActivityPanel from "../components/ActivityPanel";
import LatestNotifications from "../components/LatestNotifications";

import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Dashboard Header */}
      <div className="dashboard-header">

        <div>
          <h1>Dashboard</h1>

          <p>
            Monitor notifications, campaigns and CRM performance in one place.
          </p>
        </div>

        <button className="new-btn">
          + New Notification
        </button>

      </div>

      {/* Statistics Cards */}
      <StatsCards />

      {/* Main Dashboard Grid */}
      <div className="dashboard-grid">

        {/* Left Side */}
        <div className="left-panel">

          <AnalyticsChart />

          <div style={{ marginTop: "25px" }}>
            <PipelineTable />
          </div>

        </div>

        {/* Right Side */}
        <div className="right-panel">

          <LatestNotifications />

          <div style={{ marginTop: "25px" }}>
            <ActivityPanel />
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;