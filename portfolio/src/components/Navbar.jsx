import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-400">
          Ahmad Sharara
        </Link>

        {/* Burger Icon */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm md:text-base">
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
          <li><Link to="/experience" className="hover:text-blue-400">Experience</Link></li>
          <li><Link to="/skills" className="hover:text-blue-400">Skills</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900/70 backdrop-blur-md flex flex-col justify-center items-center z-40 space-y-6 text-xl font-semibold">
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-white hover:text-cyan-400 transition duration-200">
            About
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="text-white hover:text-cyan-400 transition duration-200">
            Projects
          </Link>
          <Link to="/experience" onClick={() => setIsOpen(false)} className="text-white hover:text-cyan-400 transition duration-200">
            Experience
          </Link>
          <Link to="/skills" onClick={() => setIsOpen(false)} className="text-white hover:text-cyan-400 transition duration-200">
            Skills
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-white hover:text-cyan-400 transition duration-200">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
