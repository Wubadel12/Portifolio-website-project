import "../styles/project.css";

const projects = [
  {
    number: "01",
    name: "Dev Flow",
    category: "Productivity",
    description: "A workspace for planning projects, organizing tasks, and keeping progress in view.",
    art: "flow",
    mark: "DF",
    preview: "Team workspace",
  },
  {
    number: "02",
    name: "Hotel Management",
    category: "Hospitality",
    description: "A hotel operations experience for keeping rooms, guest details, and reservations organized.",
    art: "hotel",
    mark: "HM",
    preview: "Hotel overview",
  },
  {
    number: "03",
    name: "Birthday Bloom",
    category: "Interactive Web",
    description: "A playful birthday experience with story scenes, music, photos, and little surprises.",
    art: "bloom",
    mark: "✿",
    preview: "A little surprise",
  },
  {
    number: "04",
    name: "Ecommerce",
    category: "Online Store",
    description: "A storefront experience for exploring products and moving smoothly from browsing to cart.",
    art: "commerce",
    mark: "EC",
    preview: "Featured products",
  },
  {
    number: "05",
    name: "Personal Portfolio",
    category: "Portfolio",
    description: "A personal site for introducing my work, sharing my skills, and documenting my growth.",
    art: "portfolio",
    mark: "W.",
    preview: "Hello, I’m Wubadel",
  },
  {
    number: "06",
    name: "Expense Tracker",
    category: "Finance",
    description: "A clear way to record everyday spending and see where a monthly budget is going.",
    art: "expense",
    mark: "↗",
    preview: "Monthly summary",
  },
];

function ProjectPreview({ project }) {
  return (
    <div className={`project-cover project-cover-${project.art}`} aria-hidden="true">
      <div className="project-cover-top">
        <span>PROJECT {project.number}</span>
        <span className="project-cover-status"><i></i> SELECTED WORK</span>
      </div>

      <div className={`project-mock project-mock-${project.art}`}>
        <div className="project-mock-bar">
          <span className="project-mock-mark">{project.mark}</span>
          <span className="project-mock-dots"><i></i><i></i><i></i></span>
        </div>
        <div className="project-mock-body">
          <div className="project-mock-sidebar"><i></i><i></i><i></i><i></i></div>
          <div className="project-mock-content">
            <strong>{project.preview}</strong>
            <div className="project-mock-stats"><i></i><i></i><i></i></div>
            <div className="project-mock-chart"><i></i><i></i><i></i><i></i><i></i><i></i></div>
          </div>
        </div>
      </div>

      <span className="project-cover-mark">{project.mark}</span>
    </div>
  );
}

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <header className="projects-heading">
          <p className="projects-eyebrow">SELECTED WORK <span>— 04</span></p>
          <h2>Featured <span>Projects</span></h2>
          <p className="projects-intro">
            A collection of things I’m building and exploring, shaped by curiosity and a love of solving problems.
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className={`project-card project-card-${project.art}`} key={project.number}>
              <ProjectPreview project={project} />
              <div className="project-card-content">
                <div className="project-card-meta">
                  <span>{project.category}</span>
                  <span>{project.number} / 06</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
