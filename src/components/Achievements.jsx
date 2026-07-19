import {
  FiAward,
  FiUsers,
  FiBookOpen,
} from "react-icons/fi";

const achievements = [
  {
    title: "Maharashtra Student Innovation Challenge",
    subtitle: "Winner",
    description:
      "Recognized for developing an innovative AI-driven solution with real-world impact in a state-level innovation competition.",
    icon: FiAward,
  },
  {
    title: "Department Ambassador",
    subtitle: "Leadership",
    description:
      "Represented the Artificial Intelligence & Data Science department, mentoring students and organizing academic initiatives.",
    icon: FiUsers,
  },
  {
    title: "ICACIT 2024",
    subtitle: "Research Presentation",
    description:
      "Presented research on blockchain-based techniques for combating AI-generated deepfakes at an international conference.",
    icon: FiBookOpen,
  },
];

function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">

        <p className="section-label">
          07 / Achievements
        </p>

        <h2 className="section-heading">
          Milestones & Recognition.
        </h2>

        <div className="achievement-grid">

          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="achievement-card"
                key={item.title}
              >
                <div className="achievement-header">

                  <div className="achievement-icon">
                    <Icon />
                  </div>

                  <span className="achievement-badge">
                    {item.subtitle}
                  </span>

                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Achievements;