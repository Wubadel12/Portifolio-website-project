


function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-container">
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

        <div className="hero-visual" aria-label="Developer introduction">
          <div className="hero-glow"></div>

          <div className="hero-card">
            <div className="hero-card-top">
              <div className="hero-avatar">W.</div>
              <span className="hero-card-label">DEVELOPER PROFILE</span>
            </div>

            <div className="hero-card-body">
              <p className="hero-card-greeting">Hello, world!</p>
              <h2>Turning ideas into applications.</h2>
              <p className="hero-card-description">
                Learning, building, and improving one project at a time.
              </p>
            </div>

            <div className="hero-card-footer">
              <span className="hero-tech">React</span>
              <span className="hero-tech">JavaScript</span>
              <span className="hero-tech">Node.js</span>
            </div>

            <div className="hero-code-decoration" aria-hidden="true">
              {"</>"}
            </div>
          </div>

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

      <a href="#about" className="hero-scroll" aria-label="Scroll to About">
        <span></span>
        Scroll to explore
      </a>
    </section>
  );
}

export default Hero;
