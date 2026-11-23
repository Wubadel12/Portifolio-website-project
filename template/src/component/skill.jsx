import "../styles/skills.css";

const skills = [
  { name: "HTML", icon: "/images/html-logo.svg", group: "Frontend" },
  { name: "CSS", icon: "/images/css-logo.svg", group: "Frontend" },
  { name: "JavaScript", icon: "/images/javascript-logo.svg", group: "Frontend" },
  { name: "React", icon: "/images/react-logo.svg", group: "Frontend" },
  { name: "Tailwind CSS", icon: "/images/tailwind-css-logo.svg", group: "Frontend" },
  { name: "Node.js", icon: "/images/nodedotjs(1).svg", group: "Backend" },
  { name: "Express", icon: "/images/express.svg", group: "Backend" },
  { name: "PostgreSQL", icon: "/images/postgresql.svg", group: "Backend" },
  { name: "Git", mark: "⑂", group: "Tools" },
  { name: "GitHub", mark: "GH", group: "Tools" },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="skills-heading">
          <div>
            <p className="skills-eyebrow">MY TOOLKIT <span>— 03</span></p>
            <h2>Technologies I<br /><span>work with.</span></h2>
          </div>
          <p className="skills-intro">
            A practical, growing toolkit for designing and developing useful web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skills-card" key={skill.name}>
              <div className="skills-icon-wrap" aria-hidden="true">
                {skill.icon ? (
                  <img
                    className={`skills-icon skills-icon-${skill.name.toLowerCase().replace(/[^a-z]/g, "")}`}
                    src={skill.icon}
                    alt=""
                    loading="lazy"
                  />
                ) : (
                  <span className={`skills-mark skills-mark-${skill.name.toLowerCase()}`}>
                    {skill.mark}
                  </span>
                )}
              </div>
              <div className="skills-card-copy">
                <h3>{skill.name}</h3>
                <p>{skill.group}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="skills-footer">
          <span className="skills-footer-line" aria-hidden="true"></span>
          <p>I’m growing my toolkit through practical projects and a focus on how the pieces work together.</p>
          <span className="skills-footer-spacer" aria-hidden="true"></span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
