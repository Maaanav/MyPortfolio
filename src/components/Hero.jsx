import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero container" id="home">
      
      <div className="hero-image">

        <div className="hero-image-wrapper">

          <img
            src={profile}
            alt="Manav Mangela"
          />

        </div>

      </div>


      <div className="hero-copy">

        <h1>Manav Mangela</h1>

        <h2>
          Software Engineer 
        </h2>

        <div className="hero-actions">

          <a
            href="#projects"
            className="button button-primary"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="button button-secondary"
          >
            Download Resume
          </a>

        </div>

        <div className="hero-socials">

          <a
            href="https://github.com/Maaanav"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/manavmangela/"
            target="_blank"
            rel="noreferrer"
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

export default Hero;