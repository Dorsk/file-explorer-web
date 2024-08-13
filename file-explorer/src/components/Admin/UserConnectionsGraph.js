import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { date: "2024-08-01", connections: 20 },
  { date: "2024-08-02", connections: 30 },
  { date: "2024-08-03", connections: 25 },
  { date: "2024-08-04", connections: 50 },
  { date: "2024-08-05", connections: 40 },
  { date: "2024-08-06", connections: 70 },
  { date: "2024-08-07", connections: 90 },
];

const UserConnectionsGraph = () => {
  return (
    <div>
      <h2>User Connections Per Day</h2>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="connections" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default UserConnectionsGraph;
