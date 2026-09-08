import Reveal from "./Reveal";

const About = () => (
  <section id="about" className="section page-width section-rule">
    <Reveal><div className="section-heading"><p className="eyebrow">01 / About</p><h2>Building products with<br /><em>clarity and intent.</em></h2></div></Reveal>
    <Reveal delay={0.12}><div className="about-grid">
      <div className="about-lead"><p>I&apos;m Surya, a Full Stack Developer with approximately 1.5 years of professional experience building modern web applications.</p></div>
      <div className="about-copy"><p>My work sits at the intersection of a thoughtful React frontend and a dependable Node.js backend. I enjoy turning requirements into clear user flows, maintainable APIs, useful data models, and secure application experiences.</p><p>I&apos;m especially interested in authentication, cloud services, scalable architecture, and the debugging discipline that keeps products reliable after they ship.</p></div>
    </div></Reveal>
    <div className="about-signals"><div><strong>1.5 yrs</strong><span>professional experience</span></div><div><strong>React + Node</strong><span>primary development focus</span></div><div><strong>End to end</strong><span>frontend to cloud thinking</span></div></div>
  </section>
);

export default About;
