import { FaGithub } from "react-icons/fa";

import luxuraImg from "../assets/luxura.png";
import quizImg from "../assets/quizweb.png";
import spendwiseImg from "../assets/spendwise.png";
import flatImg from "../assets/mumbai-price.png";
import stockwizImg from "../assets/stockwiz.png";

const projects = [
  {
    id: "01",
    title: "Luxura",
    image: luxuraImg,
    description:
      "An AI-powered Indian travel planner that creates personalized itineraries, recommends destinations, and helps users discover experiences tailored to their preferences.",
    tech: ["FastAPI", "Docker", "SerpAPI", "LLMs"],
    github: "https://github.com/Maaanav",
  },
  {
    id: "02",
    title: "QuizWeb",
    image: quizImg,
    description:
      "An AI-powered learning platform that transforms PDF documents into interactive quizzes, making studying faster and more engaging.",
    tech: ["React", "FastAPI", "Gemini", "SQLite"],
    github: "https://github.com/Maaanav",
  },
  {
    id: "03",
    title: "SpendWise",
    image: spendwiseImg,
    description:
      "A personal finance tracker that enables users to record expenses, visualize spending habits, and manage budgets with ease.",
    tech: ["Django", "PostgreSQL", "Bootstrap"],
    github: "https://github.com/Maaanav",
  },
  {
    id: "04",
    title: "Mumbai Flat Price Predictor",
    image: flatImg,
    description:
      "A machine learning application that predicts Mumbai apartment prices with approximately 92.5% accuracy using regression models.",
    tech: ["Streamlit", "Scikit-Learn", "Machine Learning"],
    github: "https://github.com/Maaanav",
  },
  {
    id: "05",
    title: "StockWiz Academy",
    image: stockwizImg,
    description:
      "An AI-powered financial education platform that simplifies stock market learning through intelligent assistance and interactive content.",
    tech: ["React", "Node.js", "FastAPI", "MongoDB"],
    github: "https://github.com/Maaanav",
  },
];

function Projects() {
  return (
    <section className="section section-muted" id="projects">
      <div className="container">

        <div className="section-title-row">

          <div>

            <p className="section-label">
              04 / Projects
            </p>

            <h2 className="section-heading">
              Things I've built.
            </h2>

          </div>

        </div>

        <div className="project-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.id}
            >

              <div className="project-image">

                <div className="browser-bar">

                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <small>{project.title}</small>

                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

                <div className="project-number">
                  {project.id}
                </div>

              </div>

              <div className="project-body">

                <div className="tech-list">

                  {project.tech.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-actions">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <FaGithub />
                    <span>View Source</span>
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;