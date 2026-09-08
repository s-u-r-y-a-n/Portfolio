import { projects } from "../../constants";
import { motion } from "framer-motion";
import "./Projects.scss";

const isPlaceholder = (value) => !value || value.startsWith("[");

const ProjectLink = ({ href, children, isSecondary }) =>
  isPlaceholder(href) ? (
    <span className="project-action-btn action-disabled">
      <span>{children}</span>
      <small className="placeholder-tag">In progress</small>
    </span>
  ) : (
    <a
      className={`project-action-btn ${isSecondary ? "action-secondary" : "action-primary"}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span>{children}</span>
      <span className="action-arrow" aria-hidden="true">
        ↗
      </span>
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
        <div className="image-wrapper">
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="case-study-visual">
          <span className="case-badge">Confidential</span>
          <strong>
            System Architecture
            <br />
            Case Study
          </strong>
        </div>
      )}
      <span className="project-number">
        {project.number || `0${index + 1}`}
      </span>
    </div>

    <div className="project-content">
      <p className="project-label">{project.label}</p>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>

      {project.features && project.features.length > 0 && (
        <ul className="feature-list" aria-label="Key highlights">
          {project.features.map((feature) => (
            <li key={feature}>
              <span className="feature-bullet" aria-hidden="true">
                ↳
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="tag-list" aria-label="Technologies used">
        {project.tags.map((tag) => (
          <span key={tag} className="tech-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="project-links">
        <ProjectLink href={project.live_link}>Live Demo</ProjectLink>
        <ProjectLink href={project.source_code_link} isSecondary>
          GitHub
        </ProjectLink>
      </div>
    </div>
  </motion.article>
);

const Projects = () => (
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

export default Projects;
