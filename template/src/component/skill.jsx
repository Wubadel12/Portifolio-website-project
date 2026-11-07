
import "../styles/skills.css";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Creating interactive and responsive interfaces for the web.",
    skills: [
      { name: "HTML5", level: "Core knowledge" },
      { name: "CSS3", level: "Core knowledge" },
      { name: "JavaScript", level: "Core knowledge" },
      { name: "React", level: "Developing" },
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Learning how servers, APIs, and databases work together.",
    skills: [
      { name: "Node.js", level: "Learning" },
      { name: "Express.js", level: "Learning" },
      { name: "REST APIs", level: "Learning" },
      { name: "MySQL", level: "Learning" },
    ],
  },
  {
    number: "03",
    title: "Tools & Workflow",
    description:
      "Tools I use to develop, manage, and organize projects.",
    skills: [
      { name: "Git", level: "Using" },
      { name: "GitHub", level: "Using" },
      { name: "VS Code", level: "Using" },
      { name: "npm", level: "Using" },
    ],
  },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">

        {/* Heading */}
        <div className="skills-heading">
          <p className="skills-eyebrow">
            MY TOOLKIT <span>— 03</span>
          </p>

          <h2>
            Technologies I
            <br />
            <span>work with.</span>
          </h2>

          <p className="skills-intro">
            A growing collection of technologies and tools
            I'm learning and using to build web applications.
          </p>
        </div>

        {/* Skill groups */}
        <div className="skills-list">
          {skillGroups.map((group) => (
            <div className="skills-group" key={group.number}>

              <div className="skills-group-heading">
                <span className="skills-number">
                  {group.number}
                </span>

                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>

              <div className="skills-items">
                {group.skills.map((skill) => (
                  <div className="skills-item" key={skill.name}>
                    <span className="skills-name">
                      {skill.name}
                    </span>

                    <span className="skills-level">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="skills-footer">
          <p>
            I'm more interested in understanding how
            technologies work than simply collecting
            names of frameworks.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;
