import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-400">
          Ahmad Sharara
        </Link>
        <ul className="flex space-x-6 text-sm md:text-base">
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
          <li><Link to="/experience" className="hover:text-blue-400">Experience</Link></li>
          <li><Link to="/skills" className="hover:text-blue-400">Skills</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
