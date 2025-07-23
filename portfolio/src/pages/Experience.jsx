import experience from "../data/experience";
import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-gray-300">
      {/* Glowing Section Title */}
      <h2 className="text-4xl font-extrabold mb-10 text-center">
      <span>💼</span>{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
        Experience
      </span>
      </h2>
      
      {/* Experience Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
        {experience.map((exp, index) => (
          <ExperienceCard
            key={index}
            role={exp.role}
            company={exp.company}
            date={exp.date}
            details={exp.details}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
