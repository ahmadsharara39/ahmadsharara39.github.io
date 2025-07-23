const ExperienceCard = ({ role, company, date, details }) => {
  return (
    <div className="border border-gray-700 p-4 rounded-lg hover:border-blue-400 transition">
      <h3 className="text-lg font-semibold text-blue-300">{role}</h3>
      <p className="text-sm text-gray-400">{company}</p>
      <p className="text-xs text-gray-500 mb-2">📅 {date}</p>
      <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
        {details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
