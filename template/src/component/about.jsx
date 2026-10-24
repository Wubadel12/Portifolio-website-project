
import '../styles/about.css'

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-heading">
          <p className="about-eyebrow">GET TO KNOW ME</p>

          <h2 className="section-title">
            About <span className="about-highlight">Me</span>
          </h2>

          <p className="section-description">
            A little about my journey, what I value, and what I'm working toward.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <h3>
              Building my future, <span>one project at a time.</span>
            </h3>

            <p>
              I'm a Software Engineering student at Arba Minch University,
              Ethiopia, with a growing passion for web development and
              problem-solving.
            </p>

            <p>
              I enjoy understanding how software works behind the scenes,
              turning ideas into useful applications, and learning the
              engineering principles that make software reliable and
              maintainable.
            </p>

            <p>
              Currently, I'm developing my skills with React and exploring
              backend development. My goal is to become a capable software
              engineer who can build practical products that solve real
              problems.
            </p>

            <a href="#projects" className="about-link">
              Explore my projects <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="about-details">
            <article className="about-card">
              <div className="about-card-icon" aria-hidden="true">
                {"</>"}
              </div>
              <div>
                <h4>What I Do</h4>
                <p>
                  Build web interfaces and develop my understanding of
                  full-stack application development.
                </p>
              </div>
            </article>

            <article className="about-card">
              <div className="about-card-icon" aria-hidden="true">
                {"{" + "}"}
              </div>
              <div>
                <h4>How I Think</h4>
                <p>
                  Focus on problem-solving, understanding systems, and
                  writing code that is easier to maintain.
                </p>
              </div>
            </article>

            <article className="about-card">
              <div className="about-card-icon" aria-hidden="true">
                ↗
              </div>
              <div>
                <h4>Where I'm Going</h4>
                <p>
                  Grow into a professional software engineer and eventually
                  create useful software products of my own.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="about-stats">
          <div className="about-stat">
            <span className="about-stat-number">02</span>
            <span className="about-stat-label">Year of University</span>
          </div>

          <div className="about-stat">
            <span className="about-stat-number">01</span>
            <span className="about-stat-label">Step at a Time</span>
          </div>

          <div className="about-stat">
            <span className="about-stat-number">∞</span>
            <span className="about-stat-label">Curiosity to Learn</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
