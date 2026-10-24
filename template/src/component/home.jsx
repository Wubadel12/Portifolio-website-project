
import "../styles/home.css";

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-container">
        {/* Left: Introduction */}
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span className="status-dot"></span>
            SOFTWARE ENGINEERING STUDENT
          </p>

          <h1 className="hero-title">
            Hi, I'm <span>Wubadel</span>.
            <br />
            I build things for the web.
          </h1>

          <p className="hero-description">
            I'm a software engineering student passionate about
            building useful, reliable applications and solving
            real-world problems through code. I'm currently
            developing my skills in React and backend development.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore My Work
              <span aria-hidden="true">↗</span>
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-meta">
            <span>Based in Ethiopia</span>
            <span className="hero-meta-divider"></span>
            <span>Open to learning and collaboration</span>
          </div>
        </div>

        {/* Right: Your portrait */}
        <div className="hero-visual">
          <div className="hero-photo-frame">
            <div className="hero-photo-glow"></div>

            <img
              className="hero-photo"
              src="./public/images/profile.jpg"
              alt="Portrait of Wubadel Derbe"
              fetchPriority="high"
            />

            <div className="hero-floating-tag hero-tag-top">
              <span className="hero-tag-icon">{"{"}</span>
              Problem solving
            </div>

            <div className="hero-floating-tag hero-tag-bottom">
              <span className="hero-tag-icon">✓</span>
              Always learning
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to About">
        <span></span>
        Scroll to explore
      </a>
    </section>
  );
}

export default Hero;
