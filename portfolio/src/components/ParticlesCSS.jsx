const ParticlesCSS = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {[...Array(30)].map((_, i) => (
        <span
          key={i}
          className="absolute block w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 4}s`,
            opacity: 0.1 + Math.random() * 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesCSS;
