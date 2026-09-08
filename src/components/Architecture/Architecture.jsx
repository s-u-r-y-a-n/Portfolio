const layers = [
  ["01", "React application", "Interfaces · state · routing"],
  ["02", "API layer", "REST · GraphQL · validation"],
  ["03", "Security", "JWT · RBAC · middleware"],
  ["04", "Node.js services", "Express · integrations · WebSockets"],
  ["05", "Data & cloud", "MongoDB · AWS · serverless"],
];

import Reveal from "../Reveal";
import "./Architecture.scss";

const Architecture = () => (
  <section id="architecture" className="section architecture-section">
    <div className="page-width architecture-grid">
      <Reveal direction="left">
        <div className="section-heading">
          <p className="eyebrow">04 / Backend thinking</p>
          <h2>
            More than a<br />
            <em>pretty frontend.</em>
          </h2>
          <p className="section-intro">
            I think in flows and boundaries: how a request is validated,
            authorized, persisted, observed, and returned to a user with useful
            feedback.
          </p>
        </div>
      </Reveal>
      <Reveal direction="right" delay={0.12}>
        <div className="architecture-stack">
          {layers.map(([number, title, detail], index) => (
            <div className="architecture-layer" key={title}>
              <span>{number}</span>
              <div>
                <strong>{title}</strong>
                <small>{detail}</small>
              </div>
              {index < layers.length - 1 && <i aria-hidden="true">↓</i>}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Architecture;
