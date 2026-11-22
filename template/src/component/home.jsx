
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
