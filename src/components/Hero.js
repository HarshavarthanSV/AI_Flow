import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <span className="tag">
          🚀 AI Powered Automation
        </span>

        <h1>
          Automate Your Business <br />
          with <span className="gradient">Artificial Intelligence</span>
        </h1>

        <p>
          Transform repetitive workflows into intelligent,
          self-operating systems. Increase productivity,
          reduce costs and make smarter decisions using AI.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/dashboard")}
          >
            Get Started
          </button>

          <button className="secondary-btn">
            Watch Demo
          </button>
        </div>
      </div>

      <div className="dashboard-card">
        <div className="dashboard-top">
          <h3>AI Analytics</h3>
          <span className="live-dot"></span>
        </div>

        <div className="chart">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
          <div className="bar bar4"></div>
          <div className="bar bar5"></div>
          <div className="bar bar6"></div>
        </div>

        <div className="dashboard-stats">
          <div className="mini-card">
            <h2>124K</h2>
            <p>Users</p>
          </div>

          <div className="mini-card">
            <h2>98%</h2>
            <p>Accuracy</p>
          </div>

          <div className="mini-card">
            <h2>1.4M</h2>
            <p>Tasks</p>
          </div>

          <div className="mini-card">
            <h2>24/7</h2>
            <p>Automation</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;