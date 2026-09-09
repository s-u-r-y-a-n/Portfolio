import Reveal from "../../components/Reveal";
import "./Architecture.scss";

const layers = [
  {
    number: "01",
    title: "React Application",
    detail: "Responsive interfaces · Client state · Declarative routing",
  },
  {
    number: "02",
    title: "API Gateway & Router",
    detail: "REST & GraphQL endpoints · Strict DTO validation · Rate limiting",
  },
  {
    number: "03",
    title: "Security & Guardrails",
    detail: "JWT verification · RBAC access control · Security middleware",
  },
  {
    number: "04",
    title: "Node.js Core Services",
    detail: "Express controllers · Async business logic · WebSocket channels",
  },
  {
    number: "05",
    title: "Data & Cloud Infrastructure",
    detail: "MongoDB schema indexing · AWS Lambda serverless · S3 & logs",
  },
];

const Architecture = () => (
  <section
    id="architecture"
    className="section architecture-section section-rule"
  >
    <div className="page-width architecture-grid">
      <Reveal direction="left">
        <div className="section-heading">
          <p className="eyebrow architecture-kicker">04 / Backend thinking</p>
          <h2>
            More than a<br />
            <em>pretty frontend.</em>
          </h2>
          <p className="section-intro">
            I think in flows and boundaries: how a request is validated,
            authorized, persisted, observed, and returned to a user with clean,
            predictable feedback.
          </p>
        </div>
      </Reveal>

      <Reveal direction="right" delay={0.12}>
        <div
          className="architecture-stack"
          role="list"
          aria-label="Backend architecture flow"
        >
          {layers.map((layer, index) => (
            <div className="layer-wrapper" key={layer.title}>
              <div className="architecture-layer liquid-surface" role="listitem">
                <span className="layer-number">{layer.number}</span>
                <div className="layer-info">
                  <strong>{layer.title}</strong>
                  <small>{layer.detail}</small>
                </div>
                <span className="layer-status-pill liquid-surface">Active</span>
              </div>
              {index < layers.length - 1 && (
                <div className="layer-connector" aria-hidden="true">
                  <span className="connector-line" />
                  <span className="connector-arrow">↓</span>
                  <span className="connector-line" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Architecture;
