import "../styles/about.css";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-heading">
          <p className="about-eyebrow">ABOUT ME <span>— 01</span></p>
          <h2>Curious by nature.<br /><span>Engineer in progress.</span></h2>
          <p className="about-intro">
            I enjoy understanding how things work, then turning that understanding
            into useful software.
          </p>
        </div>

        <div className="about-profile">
          <div className="about-portrait-wrap">
            <img
              className="about-portrait"
              src="/images/hero-background.jpg"
              alt="Portrait of Wubadel Derbe"
              loading="lazy"
            />
            <span className="about-portrait-caption">BASED IN ETHIOPIA</span>
          </div>

          <div className="about-story">
            <p className="about-kicker">A LITTLE ABOUT ME</p>
            <h3>Hello, I’m Wubadel.<br /><span>A Software Engineering student who loves building for the web.</span></h3>
            <p>
              I’m studying Software Engineering at Arba Minch University. I’m
              drawn to the way thoughtful code can turn an idea into something
              people can use.
            </p>
            <p>
              Right now, I’m growing my React skills and learning backend
              development through hands-on projects. I’m especially curious
              about the logic and architecture that make software reliable.
            </p>

            <div className="about-details">
              <div><span>EDUCATION</span><strong>Software Engineering</strong><small>Arba Minch University</small></div>
              <div><span>CURRENT FOCUS</span><strong>React &amp; Backend</strong><small>Learning by building</small></div>
            </div>

            <a href="#projects" className="about-link">See what I’m building <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
