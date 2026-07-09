import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import "../styles/chart.css";

const data = [
  { day: "Mon", value: 12 },
  { day: "Tue", value: 19 },
  { day: "Wed", value: 15 },
  { day: "Thu", value: 24 },
  { day: "Fri", value: 21 },
  { day: "Sat", value: 30 },
  { day: "Sun", value: 28 },
];

function AnalyticsChart() {
  return (
    <div className="chart-card">

      <div className="chart-header">

        <div>
          <h3>Notification Analytics</h3>
          <p>Weekly notification trend</p>
        </div>

        <button>Last 7 Days</button>

      </div>

      <ResponsiveContainer width="100%" height={320}>

        <AreaChart data={data}>

          <defs>

            <linearGradient id="colorData" x1="0" y1="0" x2="0" y2="1">

              <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.4}/>

              <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>

            </linearGradient>

          </defs>

          <CartesianGrid strokeDasharray="3 3"/>

          <XAxis dataKey="day"/>

          <YAxis/>

          <Tooltip/>

          <Area
            type="monotone"
            dataKey="value"
            stroke="#4F46E5"
            strokeWidth={4}
            fill="url(#colorData)"
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}

export default AnalyticsChart;