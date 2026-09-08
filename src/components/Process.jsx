const steps = [
  ["01", "Understand", "Requirements → user flows → technical requirements"],
  ["02", "Design", "Application structure → database → API architecture"],
  ["03", "Develop", "Frontend → backend → integrations"],
  ["04", "Secure", "Authentication → authorization → validation"],
  ["05", "Test", "API testing → debugging → edge cases"],
  ["06", "Deploy", "Environment configuration → deployment → monitoring"],
];

import Reveal from "./Reveal";

const Process = () => (
  <section className="section page-width section-rule"><Reveal><div className="section-heading heading-row"><div><p className="eyebrow">06 / How I build</p><h2>A reliable path from<br /><em>idea to release.</em></h2></div><p className="heading-aside">Good engineering is a sequence of small, legible decisions. I keep the whole lifecycle in view.</p></div></Reveal><div className="process-grid">{steps.map(([number, title, detail], index) => <Reveal key={number} delay={index * 0.06}><div className="process-step"><span>{number}</span><h3>{title}</h3><p>{detail}</p></div></Reveal>)}</div><Reveal delay={0.15}><div className="ai-note"><span>AI-assisted development</span><p>I use AI tools for research, debugging, learning, code exploration, documentation, and productivity, while validating and understanding suggestions before integrating them.</p></div></Reveal></section>
);

export default Process;
