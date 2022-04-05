import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Dshboard.css"

const Dshboard = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <div>
      <h1>Show our progress on chart</h1>
      <div className="cheart-container">
      <div className="line-chart">
        <LineChart className="chart" width={500} height={400} data={item}>
          <Line dataKey={"sell"}></Line>
          <Line dataKey={"revenue"}></Line>
          <Line dataKey={"investment"}></Line>
          <XAxis dataKey={"month"}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </LineChart>
      </div>
      <div>
        <AreaChart width={500} height={400} data={item}>
          <CartesianGrid />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sell"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="investment"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </div>
      </div>
    </div>
  );
};

export default Dshboard;
