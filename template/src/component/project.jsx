

const projects = [
  {
    number: "01",
    name: "DevFlow",
    category: "Project Management Application",
    description:
      "A project management application designed to help users organize projects, manage tasks, track progress, and stay productive.",
    technologies: ["React", "JavaScript", "CSS", "Node.js", "Express"],
    status: "In Development",
    github: "#",
    demo: "#",
  },
  {
    number: "02",
    name: "EduCart",
    category: "E-commerce Application",
    description:
      "A course-shopping application where users can explore courses, view product details, manage their cart, and proceed through checkout.",
    technologies: ["React", "JavaScript", "CSS", "React Router"],
    status: "Personal Project",
    github: "#",
    demo: "#",
  },
  {
    number: "03",
    name: "Personal Portfolio",
    category: "Personal Website",
    description:
      "A personal portfolio website built to introduce myself, showcase my technical skills, and present my software development journey.",
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    status: "In Development",
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">

        {/* Heading */}
        <div className="projects-heading">
          <p className="projects-eyebrow">
            MY WORK <span>— 04</span>
          </p>

          <h2>
            Things I've
            <br />
            <span>been building.</span>
          </h2>

          <p className="projects-intro">
            A selection of projects where I turn ideas
            into practical applications and continue
            developing my engineering skills.
          </p>
        </div>

        {/* Project list */}
        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-item" key={project.number}>

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-details">
                <div className="project-top">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <span className="project-status">
                    {project.status}
                  </span>
                </div>

                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <span>↗</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <span>↗</span>
                  </a>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Footer */}
        <div className="projects-footer">
          <p>
            Every project is an opportunity to learn,
            experiment, and improve.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;