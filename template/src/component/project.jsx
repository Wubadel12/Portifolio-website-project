import "../styles/project.css";

const projects = [
  {
    number: "01",
    name: "Personal Portfolio",
    description:
      "A responsive portfolio introducing my work, skills, and journey as a software engineering student.",
    tools: "React · CSS",
    status: "In progress",
  },
  {
    number: "02",
    name: "Frontend Practice",
    description:
      "Small interface projects for practicing accessible layouts, responsive design, and interactive components.",
    tools: "HTML · CSS · JavaScript",
    status: "Ongoing",
  },
  {
    number: "03",
    name: "Backend Learning",
    description:
      "Practical exercises exploring APIs, server-side logic, and working with databases.",
    tools: "Node.js · Express · MySQL",
    status: "Learning",
  },
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects-heading">
          <div>
            <p className="projects-eyebrow">SELECTED WORK <span>— 04</span></p>
            <h2 className="projects-title">Things I’m building and learning.</h2>
          </div>
          <p className="projects-intro">
            A few steps in my journey toward building useful, reliable software.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span>{project.number}</span>
                <span>{project.status}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <span className="project-tools">{project.tools}</span>
            </article>
          ))}
        </div>

        <div className="projects-contact" id="contact">
          <p>Have an idea or want to connect?</p>
          <a href="mailto:hello@wubadel.dev">Let’s talk <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
