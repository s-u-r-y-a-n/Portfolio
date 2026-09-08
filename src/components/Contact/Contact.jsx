import { profile } from "../../constants";
import "./Contact.scss";

const Contact = () => (
  <footer id="contact" className="contact-section">
    <div className="page-width">
      <div className="contact-top">
        <div>
          <p className="eyebrow">08 / Contact</p>
          <h2>
            Let&apos;s build
            <br />
            <em>something useful.</em>
          </h2>
        </div>
        <p className="contact-lede">
          Interested in my experience? Download my resume or reach out through
          the channels below.
        </p>
      </div>
      <div className="contact-actions">
        <span className="button button-primary resume-placeholder">
          Download resume <small>{profile.resume}</small>
        </span>
        <a className="button button-outline" href={`mailto:${profile.email}`}>
          Email me <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="footer-row">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <div>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Contact;
