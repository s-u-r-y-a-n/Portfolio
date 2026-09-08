import { experience } from "../../constants";
import Reveal from "../../components/Reveal";
import "./Experience.scss";

const ExperienceEntry = ({ item }) => (
  <article className="experience-card">
    <div className="experience-meta">
      <div className="duration-pill">
        <span className="status-dot" aria-hidden="true" />
        <span>{item.duration}</span>
      </div>
      <strong className="company-name">{item.company}</strong>
      <span className="employment-type">{item.type || "Full-time"}</span>
    </div>

    <div className="experience-body">
      <div className="role-header">
        <h3>{item.title}</h3>
        <p className="experience-role">
          {item.role || "Full Stack Developer · React / Node.js"}
        </p>
      </div>

      <ul className="experience-points" aria-label="Key accomplishments">
        {item.points.map((point) => (
          <li key={point}>
            <span className="point-bullet" aria-hidden="true">
              ↳
            </span>
            <span className="point-text">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </article>
);

const Experience = () => {
  // Support both single object and list of roles
  const entries = Array.isArray(experience) ? experience : [experience];

  return (
    <section id="experience" className="section page-width section-rule">
      <Reveal>
        <div className="section-heading heading-row">
          <div>
            <p className="eyebrow">05 / Experience</p>
            <h2>
              Professional context,
              <br />
              <em>without the noise.</em>
            </h2>
          </div>
          <p className="heading-aside">
            A concise view of the engineering contributions I bring to a Full
            Stack, React, or Node.js team.
          </p>
        </div>
      </Reveal>

      <div className="experience-list">
        {entries.map((item, index) => (
          <Reveal key={item.company || index} delay={0.1 + index * 0.08}>
            <ExperienceEntry item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
