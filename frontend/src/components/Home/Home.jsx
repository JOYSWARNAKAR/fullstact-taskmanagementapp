import "./Home.css";
import { Link } from "react-router-dom";
import heroImage from "../../assets/task-manager-hero.png";

function Home() {
  return (
    <section className="home">
      <div className="home-hero">
        <div className="home-content">
          <span className="home-badge">Simple &amp; focused</span>
          <h1>Organize your work, one task at a time</h1>
          <p>
            Task Manager helps you capture what matters, stay on track, and
            finish what you start — without the clutter.
          </p>
          <div className="home-actions">
            <Link to="/register" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/docs" className="btn btn-outline">
              Docs
            </Link>
          </div>
        </div>

        <div className="home-visual">
          <img
            src={heroImage}
            alt="Task Manager illustration showing a checklist and task board"
            className="home-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
