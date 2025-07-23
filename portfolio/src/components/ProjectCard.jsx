const ProjectCard = ({ title, description, tech, date, github, link, linkLabel }) => {
  return (
    <div className="border border-gray-700 p-5 rounded-lg hover:border-blue-400 transition duration-300 bg-[#111827] shadow-md">
      <h3 className="text-lg font-bold text-blue-300 mb-1">{title}</h3>
      <p className="text-sm text-gray-300 mb-2">{description}</p>
      <p className="text-xs text-gray-400 mb-2">🛠 {tech}</p>
      <p className="text-xs text-gray-500 mb-4">📅 {date}</p>

      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 text-sm text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-full hover:from-blue-500 hover:to-cyan-400 transition"
        >
          🔗 View on GitHub
        </a>
      )}

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 text-sm text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-full hover:from-blue-500 hover:to-cyan-400 transition"
        >
          🔗 {linkLabel || "Visit Website"}
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
