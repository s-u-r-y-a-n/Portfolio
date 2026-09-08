import { motion } from "framer-motion";

import { profile } from "../../constants";
import { ComputersCanvas } from "../canvas";
import "./Hero.scss";

const Hero = () => (
  <main id="home" className="hero-section page-width">
    <motion.div
      className="hero-copy"
      initial={{ opacity: 0, x: -35 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        <span className="status-dot" /> Available for full-stack opportunities
      </motion.p>
      <h1>
        Hi, I&apos;m <span>{profile.name}</span>.<br />
        <strong>Full Stack Developer.</strong>
      </h1>
      <p className="hero-lede">
        I build dependable web applications from interface to infrastructure,
        with React, Node.js, MongoDB, and modern cloud services.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects">
          View projects <span aria-hidden="true">↓</span>
        </a>
        <span className="button button-quiet resume-placeholder">
          Download resume <small>{profile.resume}</small>
        </span>
      </div>
      <div className="social-links" aria-label="Social links">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
        <a href={`mailto:${profile.email}`}>
          Email <span aria-hidden="true">↗</span>
        </a>
      </div>
    </motion.div>
    <motion.div
      className="hero-aside"
      aria-label="Developer focus"
      initial={{ opacity: 0, x: 35 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
    >
      {/* <div className="hero-3d-scene"><ComputersCanvas /></div> */}
      <motion.div
        className="code-window"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="window-bar">
          <span />
          <span />
          <span />
          <small>surya-stack.js</small>
        </div>
        <pre>
          <code>
            <i>const</i> developer = {"{"}
            {`\n`} name: <b>&quot;Surya N&quot;</b>,{`\n`} role:{" "}
            <b>&quot;full-stack&quot;</b>,{`\n`} frontend:{" "}
            <b>&quot;React&quot;</b>,{`\n`} backend: <b>&quot;Node.js&quot;</b>,
            {`\n`} ships: <b>true</b>
            {`\n`}
            {"}"}
          </code>
        </pre>
      </motion.div>
      <div className="hero-note">
        <span>01</span>
        <p>
          Thoughtful products
          <br />
          with a strong backend.
        </p>
      </div>
    </motion.div>
  </main>
);

export default Hero;
