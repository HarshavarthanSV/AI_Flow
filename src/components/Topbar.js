function Topbar() {
  return (
    <div className="topbar">

      <div>
        <h2>Dashboard</h2>
        <p>Welcome back, Harsha 👋</p>
      </div>

      <div className="topbar-right">

        <input
          type="text"
          placeholder="Search..."
        />

        <button className="notification-btn">
          🔔
        </button>

        <div className="profile">
          👤 Harsha
        </div>

      </div>

    </div>
  );
}

export default Topbar;