import Reveal from "../../components/Reveal";
import "./About.scss";

const About = () => (
  <section id="about" className="about-section section page-width section-rule">
    <Reveal>
      <div className="section-heading">
        <p className="eyebrow about-kicker">01 / About</p>
        <h2>
          Building products with
          <br />
          <em>clarity and intent.</em>
        </h2>
      </div>
    </Reveal>

    <Reveal delay={0.12}>
      <div className="about-grid">
        <div className="about-lead">
          <p>
            I&apos;m Surya, a{" "}
            <span className="highlight-text">Full Stack Developer</span> with
            approximately 1.5 years of professional experience building modern,
            dependable web applications.
          </p>
        </div>
        <div className="about-copy">
          <p>
            My work sits at the intersection of a thoughtful React frontend and
            a resilient Node.js backend. I focus on translating business
            requirements into clean user flows, maintainable APIs, optimized
            database schemas, and secure application architectures.
          </p>
          <p>
            I&apos;m particularly drawn to cloud deployment, distributed
            workflows, and the deep debugging discipline required to keep
            systems fast, predictable, and robust in production.
          </p>
        </div>
      </div>
    </Reveal>

    <Reveal delay={0.2}>
      <div className="about-signals" role="list" aria-label="Key highlights">
        <div className="signal-card liquid-surface" role="listitem">
          <strong>1.5+ yrs</strong>
          <span>Professional Experience</span>
        </div>
        <div className="signal-card liquid-surface" role="listitem">
          <strong>React + Node</strong>
          <span>Primary Stack & Cloud</span>
        </div>
        <div className="signal-card liquid-surface" role="listitem">
          <strong>End-to-End</strong>
          <span>Architecture & Delivery</span>
        </div>
      </div>
    </Reveal>
  </section>
);

export default About;
