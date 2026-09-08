import { skillGroups } from "../constants";
import { featuredTech } from "../constants";
import { BallCanvas } from "./canvas";
import Reveal from "./Reveal";

const Tech = () => (
  <section id="skills" className="section page-width section-rule">
    <div className="section-heading heading-row"><div><p className="eyebrow">02 / Skills</p><h2>The stack behind<br /><em>the work.</em></h2></div><p className="heading-aside">A practical toolkit for shipping full-stack products, from accessible interfaces to APIs, data, and cloud services.</p></div>
    <div className="skill-grid">
      {skillGroups.map((group, groupIndex) => <Reveal key={group.title} delay={groupIndex * 0.08}><article className={`skill-group accent-${group.accent}`}><div className="skill-group-title"><span className="skill-index">{String(groupIndex + 1).padStart(2, "0")}</span><h3>{group.title}</h3></div><div className="skill-list">{group.skills.map((skill, index) => <span className={index < 3 ? "skill-primary" : ""} key={skill}>{skill}</span>)}</div></article></Reveal>)}
    </div>
    <div className="featured-tech" aria-label="Interactive core technologies">
      {featuredTech.map((technology, index) => <Reveal key={technology.name} delay={index * 0.1}><div className="featured-tech-item"><div className="featured-tech-canvas"><BallCanvas icon={technology.icon} /></div><span>{technology.name}</span></div></Reveal>)}
    </div>
  </section>
);

export default Tech;
