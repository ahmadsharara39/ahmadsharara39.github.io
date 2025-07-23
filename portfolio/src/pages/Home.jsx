const Home = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "radial-gradient(ellipse at center, #0f172a 0%, #0a0f1c 100%)",
      }}
      className="flex flex-col justify-center items-center text-center px-6"
    >
      {/* Glowing AI Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-lg animate-pulse">
        Ahmad Sharara
      </h1>

      {/* Subtitle with futuristic accent */}
      <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
        🚀 AI/ML-Focused Software Engineer <br />
        <span className="text-blue-400">
          NLP • Deep Learning • Generative AI • Scalable Systems
        </span>
      </p>

      {/* CTA button with futuristic glow */}
      <div className="mt-10">
        <a
          href="mailto:ahmadsharara03@gmail.com"
          className="inline-block px-8 py-3 rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/40"
        >
          📧 Let’s Connect
        </a>
      </div>
    </section>
  );
};

export default Home;
