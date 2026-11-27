import "../styles/project.css";

const projects = [
  {
    number: "01",
    name: "DevFlow",
    category: "Productivity",
    description: "A workspace for planning projects, organizing tasks, and keeping progress in view.",
    art: "flow",
    image: "/images/images.jpeg",
  },
  {
    number: "02",
    name: "Hotel Management",
    category: "Hospitality",
    description: "A hotel operations experience for keeping rooms, guest details, and reservations organized.",
    art: "hotel",
    image: "/images/hotel.jpeg",
  },
  {
    number: "03",
    name: "Birthday Bloom",
    category: "Interactive Web",
    description: "A playful birthday experience with story scenes, music, photos, and little surprises.",
    art: "bloom",
    image: "/images/birthday.jpeg",
  },
  {
    number: "04",
    name: "Ecommerce",
    category: "Online Store",
    description: "A storefront experience for exploring products and moving smoothly from browsing to cart.",
    art: "commerce",
    image: "/images/eccomerce.jpeg",
  },
  {
    number: "05",
    name: "Personal Portfolio",
    category: "Portfolio",
    description: "A personal site for introducing my work, sharing my skills, and documenting my growth.",
    art: "portfolio",
    image: "/images/portifolio.jpeg",
  },
  {
    number: "06",
    name: "Expense Tracker",
    category: "Finance",
    description: "A clear way to record everyday spending and see where a monthly budget is going.",
    art: "expense",
    image: "/images/expense.jpeg",
  },
];
const githubProjectsUrl = "https://github.com/Wubadel12?tab=repositories";

function ProjectPreview({ project }) {
  return (
    <div className={`project-cover project-cover-${project.art}`} aria-hidden="true">
      <img className="project-image" src={project.image} alt="" loading="lazy" />
      <div className="project-cover-top">
        <span>PROJECT {project.number}</span>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <header className="projects-heading">
          <p className="projects-eyebrow">PROJECTS <span>— 03</span></p>
          <h2>Projects I’ve <span>built</span></h2>
          <p className="projects-intro">
            Six projects from my time learning to build for the web. Browse the repository list for source code and project details.
          </p>
          <a className="projects-all-link" href={githubProjectsUrl} target="_blank" rel="noreferrer">
            Browse all repositories <span aria-hidden="true">↗</span>
          </a>
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
