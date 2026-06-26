function Features() {

  const features = [
    {
      title: "AI Assistant",
      desc: "Automate customer support with intelligent conversations.",
      icon: "🤖",
      className: "feature-card large"
    },

    {
      title: "Analytics",
      desc: "Real-time insights powered by AI.",
      icon: "📊",
      className: "feature-card"
    },

    {
      title: "Security",
      desc: "Enterprise-grade protection.",
      icon: "🛡️",
      className: "feature-card"
    },

    {
      title: "Automation",
      desc: "Build workflows without writing code.",
      icon: "⚡",
      className: "feature-card wide"
    },

    {
      title: "Cloud",
      desc: "Sync across every device instantly.",
      icon: "☁️",
      className: "feature-card"
    }

  ];

  return (

    <section className="features-section" id="features">

      <div className="section-title">

        <h2>Powerful AI Features</h2>

        <p>
          Everything you need to automate business workflows,
          analyze data and improve productivity.
        </p>

      </div>

      <div className="bento-grid">

        {features.map((item, index) => (

          <div className={item.className} key={index}>

            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Features;