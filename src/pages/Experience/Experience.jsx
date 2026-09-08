import { experience } from "../../constants";
import Reveal from "../../components/Reveal";
import "./Experience.scss";

const Experience = () => (
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
          A concise view of the work I bring to a Full Stack, MERN, or Node.js
          team.
        </p>
      </div>
    </Reveal>
    <Reveal delay={0.12}>
      <article className="experience-entry">
        <div className="experience-meta">
          <span>{experience.duration}</span>
          <strong>{experience.company}</strong>
        </div>
        <div className="experience-body">
          <div>
            <h3>{experience.title}</h3>
            <p className="experience-role">
              Full Stack Developer · React / Node.js
            </p>
          </div>
          <ul>
            {experience.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  </section>
);

export default Experience;
