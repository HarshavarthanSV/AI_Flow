function Stats() {
  const stats = [
    {
      number: "124K+",
      title: "Active Users",
      icon: "👥"
    },
    {
      number: "98%",
      title: "AI Accuracy",
      icon: "🎯"
    },
    {
      number: "1.4M",
      title: "Tasks Automated",
      icon: "⚡"
    },
    {
      number: "24/7",
      title: "Availability",
      icon: "🟢"
    }
  ];

  return (
    <section className="stats-section">

      <div className="stats-header">

        <h2>
          Trusted by Businesses Worldwide
        </h2>

        <p>
          AIFlow automates thousands of workflows every minute with
          enterprise-grade security and reliability.
        </p>

      </div>

      <div className="stats-grid">

        {stats.map((item, index) => (

          <div className="stat-card" key={index}>

            <div className="stat-icon">
              {item.icon}
            </div>

            <h1>{item.number}</h1>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Stats;