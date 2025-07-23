const Contact = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20 text-center text-gray-300">
      {/* Glowing Gradient Header */}
      <h2 className="text-4xl font-extrabold mb-10 text-center">
      <span>🤝</span>{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
        Get In Touch
      </span>
      </h2>
      
      <p className="mb-8 text-md leading-relaxed">
        Whether you're looking to collaborate on an AI project, need a full-stack engineer with ML/NLP experience,
        or just want to connect — I'm always open to new opportunities.
      </p>

      {/* Contact Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a
          href="mailto:ahmadsharara03@gmail.com"
          className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-cyan-400 transition shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/40"
        >
          📧 Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/ahmadsharara"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/40"
        >
          💼 Connect on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
