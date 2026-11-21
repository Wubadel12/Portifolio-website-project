import "../styles/skills.css";

const skills = [
  { name: "HTML", mark: "5", group: "Frontend" },
  { name: "CSS", mark: "#", group: "Frontend" },
  { name: "JavaScript", mark: "JS", group: "Frontend" },
  { name: "React", mark: "⚛", group: "Frontend" },
  { name: "Node.js", mark: "⬡", group: "Backend" },
  { name: "Express", mark: "EX", group: "Backend" },
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
              <div className={`skills-mark skills-mark-${skill.name.toLowerCase().replace(/[^a-z]/g, "")}`} aria-hidden="true">{skill.mark}</div>
              <div className="skills-card-copy">
                <h3>{skill.name}</h3>
                <p>{skill.group}</p>
              </div>
              <span className="skills-card-arrow" aria-hidden="true">↗</span>
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
