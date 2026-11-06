import "../styles/about.css";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">

        {/* Heading */}
        <div className="about-heading">
          <span className="about-eyebrow">
            ABOUT ME <span>— 01</span>
          </span>

          <h2>
            More than just
            <br />
            <span>writing code.</span>
          </h2>

          <p className="about-intro">
            I'm interested in understanding technology,
            solving problems, and building things that
            make a difference.
          </p>
        </div>

        {/* Main content */}
        <div className="about-content">

          <div className="about-label">
            <span>01</span>
            <span>MY JOURNEY</span>
          </div>

          <div className="about-story">
            <h3>
              Hello, I'm Wubadel.
              <span> A Software Engineering student with a passion for building useful software.</span>
            </h3>

            <p>
              I'm currently studying Software Engineering
              at Arba Minch University, Ethiopia. My interest
              in technology comes from the opportunity to
              solve problems and turn ideas into working
              applications.
            </p>

            <p>
              I enjoy understanding how software works
              behind the scenes. I'm particularly interested
              in the logic, architecture, and engineering
              principles that make applications reliable
              and maintainable.
            </p>

            <p>
              At the moment, I'm strengthening my React
              skills and learning backend development
              through practical projects. I believe in
              learning by building, making mistakes, and
              understanding why things work.
            </p>

            <p>
              My long-term ambition is to become a
              professional software engineer and build
              products that solve meaningful problems.
            </p>
          </div>
        </div>

        {/* Personal information */}
        <div className="about-bottom">
          <div className="about-bottom-heading">
            <span>02</span>
            <span>AT A GLANCE</span>
          </div>

          <div className="about-info">
            <div className="about-info-item">
              <span>EDUCATION</span>
              <h4>Software Engineering</h4>
              <p>Arba Minch University</p>
            </div>

            <div className="about-info-item">
              <span>CURRENT FOCUS</span>
              <h4>React & Backend</h4>
              <p>Learning through practical projects</p>
            </div>

            <div className="about-info-item">
              <span>LONG-TERM GOAL</span>
              <h4>Build meaningful products</h4>
              <p>Grow as a software engineer</p>
            </div>
          </div>
        </div>

        {/* Closing link */}
        <div className="about-footer">
          <p>Interested in what I'm building?</p>

          <a href="#projects" className="about-link">
            Explore my projects
            <span aria-hidden="true">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;