import React, { useEffect, useState } from "react";
import "../../../styles/pages/manager/_monitor.scss";

const RealTimeMonitoring = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    // Simulate fetching real-time sensor data
    const interval = setInterval(() => {
      const mockData = [
        {
          houseName: "Villa Rose",
          rooms: [
            { name: "Kitchen", level: Math.random() * 100 },
            { name: "Living Room", level: Math.random() * 100 },
          ],
        },
        {
          houseName: "Sunset Apartment",
          rooms: [
            { name: "Bedroom", level: Math.random() * 100 },
            { name: "Bathroom", level: Math.random() * 100 },
          ],
        },
      ];
      setHouses(mockData);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatus = (level) => {
    return level > 50 ? "danger" : "safe";
  };

  return (
    <div className="real-time-monitoring">
      <h2>Real-Time Gas Monitoring</h2>

      <div className="houses-container">
        {houses.map((house, index) => (
          <div key={index} className="house-card">
            <h3>{house.houseName}</h3>

            <div className="rooms-container">
              {house.rooms.map((room, idx) => (
                <div
                  key={idx}
                  className={`room-card ${getStatus(room.level)}`}
                >
                  <h4>{room.name}</h4>
                  <p>{room.level.toFixed(2)} ppm</p>
                  <span className="status">
                    {getStatus(room.level).toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealTimeMonitoring;
