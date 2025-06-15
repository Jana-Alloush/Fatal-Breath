import {
  FaHome,
  FaDoorOpen,
  FaBell,
  FaExclamationTriangle,
  FaBullhorn,
} from "react-icons/fa";

const OverviewPage = () => {
  // Replace with API data
  const stats = {
    houses: 3,
    rooms: 9,
    alertsToday: 2,
    unsafeRooms: 1,
  };

  const recentAlerts = [
    { id: 1, room: "Kitchen", level: 85, time: "10:15 AM" },
    { id: 2, room: "Garage", level: 78, time: "08:45 AM" },
  ];

  const announcements = [
    { id: 1, title: "Sensor maintenance today", time: "Today - 9:00 AM" },
    { id: 2, title: "New CO threshold updated", time: "Yesterday - 3:00 PM" },
  ];

  return (
    <div className="overview-page">
      <h2>👁️‍🗨️ System Overview</h2>

      <div className="stats-grid">
        <div className="card">
          <FaHome className="icon" />
          <h3>{stats.houses}</h3>
          <p>Houses</p>
        </div>
        <div className="card">
          <FaDoorOpen className="icon" />
          <h3>{stats.rooms}</h3>
          <p>Rooms</p>
        </div>
        <div className="card">
          <FaExclamationTriangle className="icon warning" />
          <h3>{stats.unsafeRooms}</h3>
          <p>Unsafe Rooms</p>
        </div>
        <div className="card">
          <FaBell className="icon alert" />
          <h3>{stats.alertsToday}</h3>
          <p>Alerts Today</p>
        </div>
      </div>

      <div className="info-section">
        <div className="recent">
          <h3>
            <FaExclamationTriangle /> Recent Alerts
          </h3>
          {recentAlerts.length === 0 ? (
            <p>No recent alerts.</p>
          ) : (
            <ul>
              {recentAlerts.map((alert) => (
                <li key={alert.id}>
                  🚨 {alert.room} – {alert.level} ppm <span>{alert.time}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="recent">
          <h3>
            <FaBullhorn /> Announcements
          </h3>
          {announcements.length === 0 ? (
            <p>No announcements yet.</p>
          ) : (
            <ul>
              {announcements.map((ann) => (
                <li key={ann.id}>
                  📢 {ann.title} <span>{ann.time}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
