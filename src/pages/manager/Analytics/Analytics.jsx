import { useState, useEffect } from "react";
import { Line, Pie } from "react-chartjs-2";
import "chart.js/auto";

const mockData = [
  {
    room: "Living Room",
    latest: 45,
    data: [
      { timestamp: "2025-06-01T10:00:00Z", value: 35 },
      { timestamp: "2025-06-01T11:00:00Z", value: 40 },
      { timestamp: "2025-06-01T12:00:00Z", value: 45 },
    ],
  },
  {
    room: "Kitchen",
    latest: 80,
    data: [
      { timestamp: "2025-06-01T10:00:00Z", value: 60 },
      { timestamp: "2025-06-01T11:00:00Z", value: 65 },
      { timestamp: "2025-06-01T12:00:00Z", value: 80 },
    ],
  },
  {
    room: "Bedroom",
    latest: 50,
    data: [
      { timestamp: "2025-06-01T10:00:00Z", value: 40 },
      { timestamp: "2025-06-01T11:00:00Z", value: 45 },
      { timestamp: "2025-06-01T12:00:00Z", value: 50 },
    ],
  },
];

const GasAnalytics = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    // Replace with API call
    setSensorData(mockData);
  }, []);

  const lineChartData = {
    labels:
      sensorData[0]?.data.map((d) =>
        new Date(d.timestamp).toLocaleTimeString()
      ) || [],
    datasets: sensorData.map((room, index) => ({
      label: room.room,
      data: room.data.map((d) => d.value),
      borderColor: `hsl(${(index * 100) % 360}, 70%, 50%)`,
      fill: false,
      tension: 0.3,
    })),
  };

  const pieData = {
    labels: sensorData.map((room) => room.room),
    datasets: [
      {
        data: sensorData.map((room) => room.latest),
        backgroundColor: ["#f94144", "#f3722c", "#90be6d"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="gas-analytics-container">
      <h2>📊 Gas Analytics Dashboard</h2>

      <div className="cards-section">
        {sensorData.map((room) => (
          <div key={room.room} className="room-card">
            <h4>{room.room}</h4>
            <p>
              Current Level: <strong>{room.latest} ppm</strong>
            </p>
            <p className={room.latest > 70 ? "danger" : "safe"}>
              {room.latest > 70 ? "⚠️ Unsafe" : "✅ Safe"}
            </p>
          </div>
        ))}
      </div>

      <div className="charts-section">
        <div className="chart line-chart">
          <h3>Gas Levels Over Time</h3>
          <Line data={lineChartData} />
        </div>

        <div className="chart pie-chart">
          <h3>Current Gas Distribution</h3>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default GasAnalytics;
