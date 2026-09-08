import "./Certifications.scss";
import { certifications } from "../../constants";

const Certifications = () => (
  <section className="section page-width compact-section">
    <div className="cert-grid">
      <div>
        <p className="eyebrow">07 / Learning</p>
        <h2>
          Always sharpening
          <br />
          <em>the toolkit.</em>
        </h2>
      </div>
      <div className="cert-list">
        {certifications.map((certification, index) => (
          <div className="cert-item" key={certification}>
            <span>0{index + 1}</span>
            <p>{certification}</p>
            <b aria-hidden="true">↗</b>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
