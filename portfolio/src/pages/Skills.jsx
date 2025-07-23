import skills from "../data/skills";

const Skills = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-gray-300">
      {/* Gradient Glowing Title */}
      <h2 className="text-4xl font-extrabold mb-10 text-center">
      <span>🚀</span>{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
        Skills & Tools
      </span>
    </h2>

      {/* Technical Skills Section */}
      <div className="mb-12">
        <h3 className="text-2xl text-blue-300 font-semibold mb-4">🧠 Technical Skills</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          {skills.technical.map((skill, i) => (
            <li
              key={i}
              className="px-4 py-2 rounded-full border border-blue-500 bg-gray-800/40 hover:bg-blue-500 hover:text-white transition duration-200"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Soft Skills Section */}
      <div>
        <h3 className="text-2xl text-purple-300 font-semibold mb-4">💼 Soft Skills</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          {skills.soft.map((skill, i) => (
            <li
              key={i}
              className="px-4 py-2 rounded-full border border-purple-500 bg-gray-800/40 hover:bg-purple-500 hover:text-white transition duration-200"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
