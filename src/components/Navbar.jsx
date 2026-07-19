import { useEffect, useState } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";

const links = [
  "Home",
  "About",
  "Education",
  "Experience",
  "Projects",
  "Skills",
  "Publication",
  "Contact",
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">

      <nav className="navbar container">

        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
        >
          <span>M</span>M
        </a>

        <div className={`nav-links ${isOpen ? "is-open" : ""}`}>

          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={closeMenu}
              className={
                activeSection === link.toLowerCase()
                  ? "active"
                  : ""
              }
            >
              {link}
            </a>
          ))}

        </div>

        <div className="nav-right">

          <a
            href="/resume.pdf"
            download
            className="resume-btn"
          >
            <FiDownload />
            Resume
          </a>

          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

      </nav>

    </header>
  );
}

export default Navbar;