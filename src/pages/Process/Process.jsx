import Reveal from "../../components/Reveal";
import "./Process.scss";

const steps = [
  {
    number: "01",
    title: "Understand",
    items: ["Requirements", "User flows", "Technical specs"],
  },
  {
    number: "02",
    title: "Design",
    items: ["Application architecture", "Database schema", "API contracts"],
  },
  {
    number: "03",
    title: "Develop",
    items: ["Modular UI", "Robust backend", "Third-party APIs"],
  },
  {
    number: "04",
    title: "Secure",
    items: ["Authentication", "Role permissions", "Input validation"],
  },
  {
    number: "05",
    title: "Test",
    items: ["Endpoint testing", "Error boundaries", "Edge case coverage"],
  },
  {
    number: "06",
    title: "Deploy",
    items: ["CI/CD pipelines", "Cloud hosting", "Uptime & logging"],
  },
];

const Process = () => (
  <section id="process" className="section page-width section-rule">
    <Reveal>
      <div className="section-heading heading-row">
        <div>
          <p className="eyebrow">06 / How I build</p>
          <h2>
            A reliable path from
            <br />
            <em>idea to release.</em>
          </h2>
        </div>
        <p className="heading-aside">
          Good engineering is a sequence of small, legible decisions. I keep the
          whole lifecycle in view.
        </p>
      </div>
    </Reveal>

    {/* 6-Step Process Cards */}
    <div className="process-grid">
      {steps.map((step, index) => (
        <Reveal key={step.number} delay={index * 0.06}>
          <article className="process-step">
            <div className="step-header">
              <span className="step-number">{step.number}</span>
              <span className="step-dot" aria-hidden="true" />
            </div>

            <h3>{step.title}</h3>

            <p className="step-detail">
              {step.items.map((item, itemIdx) => (
                <span key={item} className="detail-item">
                  {item}
                  {itemIdx < step.items.length - 1 && (
                    <span className="step-arrow" aria-hidden="true">
                      {" "}
                      →{" "}
                    </span>
                  )}
                </span>
              ))}
            </p>
          </article>
        </Reveal>
      ))}
    </div>

    {/* AI Workflow Note */}
    <Reveal delay={0.15}>
      <aside
        className="ai-banner"
        aria-label="AI-assisted development philosophy"
      >
        <div className="ai-badge">
          <span className="ai-indicator" />
          <span>AI-Assisted Workflow</span>
        </div>
        <p>
          I leverage AI tools for deep research, debugging edge cases, code
          exploration, and documentation, while strictly reviewing, testing, and
          understanding every solution before integrating it into production.
        </p>
      </aside>
    </Reveal>
  </section>
);

export default Process;
