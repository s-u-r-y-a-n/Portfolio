import { projects } from "../../constants";
import { motion } from "framer-motion";
import "./Works.scss";

const isPlaceholder = (value) => value.startsWith("[");

const ProjectLink = ({ href, children }) =>
  isPlaceholder(href) ? (
    <span className="project-link project-link-disabled">
      {children} <small>{href}</small>
    </span>
  ) : (
    <a className="project-link" href={href} target="_blank" rel="noreferrer">
      {children} <span aria-hidden="true">↗</span>
    </a>
  );

const ProjectCard = ({ project, featured, index }) => (
  <motion.article
    className={`project-card ${featured ? "project-featured" : ""}`}
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
  >
    <div className="project-visual">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.name} project preview`}
          loading="lazy"
        />
      ) : (
        <div className="case-study-visual">
          <span>CONFIDENTIAL</span>
          <strong>
            Engineering
            <br />
            case study
          </strong>
        </div>
      )}
      <span className="project-number">{project.number}</span>
    </div>
    <div className="project-content">
      <p className="project-label">{project.label}</p>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <ul>
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="tag-list">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="project-links">
        <ProjectLink href={project.source_code_link}>GitHub</ProjectLink>
        <ProjectLink href={project.live_link}>Live demo</ProjectLink>
      </div>
    </div>
  </motion.article>
);

const Works = () => (
  <section id="projects" className="section page-width section-rule">
    <div className="section-heading heading-row">
      <div>
        <p className="eyebrow">03 / Selected work</p>
        <h2>
          Projects that show
          <br />
          <em>the full picture.</em>
        </h2>
      </div>
      <p className="heading-aside">
        A closer look at application flows, backend decisions, and the systems
        thinking behind each build.
      </p>
    </div>
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.name}
          project={project}
          featured={index === 0}
          index={index}
        />
      ))}
    </div>
  </section>
);

export default Works;
