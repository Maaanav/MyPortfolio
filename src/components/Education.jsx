const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <span className="section-label">02/ Education</span>

        <h2 className="section-heading">
          Academic background.
        </h2>

        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-period">
              2021 — 2025
            </div>

            <div>
              <h3>
                Bachelor of Engineering
              </h3>

              <div className="company">
                Thadomal Shahani Engineering College, Mumbai
              </div>

              <ul className="experience-points">
                <li>Branch: <strong>Artificial Intelligence & Data Science</strong></li>
                <li>CGPA: <strong>8.16 / 10</strong></li>
                <li>Focused on AI, Machine Learning, Data Science and Backend Development.</li>
                <li>Built multiple full-stack and AI-powered projects using FastAPI, React, Django and Python.</li>
                <li>Awarded Department <strong>Ambassador</strong> for Artificial Intelligence & Data Science 2024-2025.</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Education;