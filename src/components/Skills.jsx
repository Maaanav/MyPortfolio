const skills = [
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
  { name: "Django", icon: "devicon-django-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "Scikit-Learn", icon: "devicon-scikitlearn-plain colored" },
  { name: "VS Code", icon: "devicon-vscode-plain colored" },
];

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">

        <p className="section-label">05 / Skills</p>

        <h2 className="section-heading">
          Technologies I work with.
        </h2>

        <div className="skills-grid-modern">

          {skills.map((skill) => (
            <div className="skill-modern" key={skill.name}>

              <i className={skill.icon}></i>

              <span>{skill.name}</span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;