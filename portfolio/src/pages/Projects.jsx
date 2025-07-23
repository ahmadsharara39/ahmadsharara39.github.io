import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-gray-300">
      <h2 className="text-4xl font-extrabold mb-10 text-center">
      <span>🧠</span>{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
        AI Projects
      </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            title={proj.title}
            description={proj.description}
            tech={proj.tech}
            date={proj.date}
            github={proj.github}
            link = {proj.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
