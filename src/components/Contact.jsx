import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">

        <p className="section-label">08 / Contact</p>

        <h2 className="contact-heading">
          Let's build something <span>meaningful.</span>
        </h2>

        <p className="contact-subtitle">
          Whether it's an AI product, a backend system, or an exciting
          collaboration, I'd love to hear about it. Let's create something
          impactful together.
        </p>

        <a
          className="contact-email"
          href="mailto:manavmangela31@gmail.com"
        >
          <FaEnvelope />
          <span>Let's Talk</span>
        </a>

        <div className="contact-grid">

          <div className="contact-card">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <span>+91 99673 48499</span>
            </div>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <span>Mumbai, India</span>
            </div>
          </div>

        </div>

        <div className="contact-divider"></div>

        <p className="contact-note">
          Usually replying within 24 hours.
        </p>

        <div className="social-links">

          <a
            href="https://github.com/Maaanav"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/manavmangela/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:manavmangela31@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;