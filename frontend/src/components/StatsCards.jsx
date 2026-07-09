import {
  FiBriefcase,
  FiUsers,
  FiBell,
  FiTrendingUp,
  FiArrowUpRight,
} from "react-icons/fi";

import "../styles/stats.css";

const stats = [
  {
    title: "Active Deals",
    value: "24",
    change: "+12%",
    icon: <FiBriefcase />,
  },
  {
    title: "Creators",
    value: "142",
    change: "+8%",
    icon: <FiUsers />,
  },
  {
    title: "Notifications",
    value: "18",
    change: "+23%",
    icon: <FiBell />,
  },
  {
    title: "ROI",
    value: "124%",
    change: "+16%",
    icon: <FiTrendingUp />,
  },
];

function StatsCards() {
  return (
    <div className="stats-container">
      {stats.map((card, index) => (
        <div className="stat-card" key={index}>

          <div className="stat-top">

            <div className="icon-box">
              {card.icon}
            </div>

            <div className="growth">

              <FiArrowUpRight />

              {card.change}

            </div>

          </div>

          <h2>{card.value}</h2>

          <p>{card.title}</p>

          <div className="progress">
            <div className="progress-fill"></div>
          </div>

        </div>
      ))}
    </div>
  );
}

export default StatsCards;