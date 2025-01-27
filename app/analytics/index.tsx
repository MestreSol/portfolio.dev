import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const Analytics = () => {
  const [userActivity, setUserActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user activity data from an API or database
    const fetchData = async () => {
      try {
        const response = await fetch("/api/user-activity");
        const data = await response.json();
        setUserActivity(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user activity data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const chartData = [
    ["Date", "Activity"],
    ...userActivity.map((activity) => [activity.date, activity.count]),
  ];

  const chartOptions = {
    title: "User Activity",
    hAxis: { title: "Date" },
    vAxis: { title: "Activity" },
    legend: "none",
  };

  return (
    <div>
      <h1>Analytics</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={chartData}
          options={chartOptions}
        />
      )}
    </div>
  );
};

export default Analytics;
