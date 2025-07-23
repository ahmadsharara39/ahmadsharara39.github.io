import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      {/* Full height container with flex layout */}
      <div className="flex flex-col min-h-screen bg-gray-950 text-white font-sans">
        {/* Navbar stays fixed at top */}
        <Navbar />

        {/* Main content expands to fill space */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer always sticks to bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
