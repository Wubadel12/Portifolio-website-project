


const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Building interactive user interfaces for the web.",
    skills: [
      { name: "HTML5", level: "Core" },
      { name: "CSS3", level: "Core" },
      { name: "JavaScript", level: "Core" },
      { name: "React", level: "Learning" },
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description: "Learning how servers, APIs, and data work together.",
    skills: [
      { name: "Node.js", level: "Learning" },
      { name: "REST APIs", level: "Learning" },
      { name: "HTTP", level: "Learning" },
    ],
  },
  {
    number: "03",
    title: "Tools & Workflow",
    description: "Tools for building, testing, and managing projects.",
    skills: [
      { name: "Git", level: "Learning" },
      { name: "GitHub", level: "Learning" },
      { name: "VS Code", level: "Using" },
      { name: "npm", level: "Learning" },
    ],
  },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="skills-heading">
          <p className="skills-eyebrow">WHAT I'M LEARNING</p>

          <h2 className="section-title">
            My <span className="skills-highlight">Skills</span>
          </h2>

          <p className="section-description">
            The technologies and tools I'm using to grow as a software
            engineer and build useful applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.number}>
              <div className="skill-card-header">
                <span className="skill-number">{group.number}</span>
                <span className="skill-card-symbol" aria-hidden="true">
                  {"</>"}
                </span>
              </div>

              <h3>{group.title}</h3>
              <p className="skill-card-description">
                {group.description}
              </p>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <span className="skill-name">{skill.name}</span>
                    <span
                      className={`skill-level skill-level-${skill.level
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-note">
          <span className="skills-note-icon" aria-hidden="true">↗</span>
          <p>
            <strong>Always improving.</strong> I'm continuously practicing,
            building projects, and strengthening my understanding of
            software development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
