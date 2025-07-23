const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-gray-300">
      {/* Title */}
      <h2 className="text-4xl font-extrabold mb-10 text-center">
      <span>👨‍💻</span>{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
        About Me
      </span>
      </h2>

      {/* Description */}
      <p className="text-md mb-4 leading-relaxed tracking-wide">
        I’m <span className="text-blue-400 font-semibold">Ahmad Sharara</span>, a Computer & Communication Engineering graduate from 
        <strong className="text-white"> Rafik Hariri University</strong> with a deep passion for 
        <span className="text-purple-400"> Artificial Intelligence</span>, 
        <span className="text-blue-400"> Machine Learning</span>, and 
        <span className="text-cyan-400"> Natural Language Processing</span>.
      </p>

      <p className="text-md mb-4 leading-relaxed tracking-wide">
        My journey blends advanced AI systems like Arabic sentiment analysis, FinBERT-based news insights, and speech-to-text apps,
        with full-stack engineering to deliver scalable, intelligent platforms.
        I thrive at the intersection of research and production — transforming data into real-world impact.
      </p>

      <p className="text-md mb-8 leading-relaxed tracking-wide">
        Currently focused on Generative AI, neural NLP architectures, and ML model optimization. I'm driven to build smart, ethical,
        and accessible tech that enhances human potential.
      </p>

      {/* Education */}
      <h3 className="text-2xl font-semibold text-purple-400 mb-3">🎓 Education</h3>
      <ul className="list-disc list-inside text-sm space-y-1 pl-2">
        <li>
          <strong className="text-white">Rafik Hariri University</strong> – Bachelor of Engineering in Computer & Communications Engineering
        </li>
        <li>Aug 2021 – May 2025</li>
        <li>
          <span className="text-gray-400">
            Relevant Coursework: ML, NLP, AI, Software Engineering, Database Systems, Embedded Systems, Networks
          </span>
        </li>
      </ul>

      {/* CV Button */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="/ShararaAhmad AI.pdf"
          download="ShararaAhmad AI.pdf"
          className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full hover:from-blue-500 hover:to-cyan-400 transition duration-300 shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/40"
        >
          📄 Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
