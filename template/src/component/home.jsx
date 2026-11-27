
import "../styles/home.css";

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-container">
        {/* Left: Introduction */}
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span className="status-dot"></span>
            HI THERE!
          </p>

          <h1 className="hero-title">
            I am <span>Developer.</span>
          </h1>

          <p className="hero-description">
            I make the complex simple.
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

          <a
            className="hero-social-link"
            href="https://github.com/Wubadel12"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="hero-social-mark" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.2 3.15 1.56.1-.72.39-1.21.7-1.49-2.48-.28-5.08-1.24-5.08-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.14a10.6 10.6 0 0 1 5.57 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.28-2.61 5.22-5.1 5.5.4.34.75 1.01.75 2.04v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>
            Find me on GitHub <span aria-hidden="true">↗</span>
          </a>
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
