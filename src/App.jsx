import React, { useState, useEffect } from "react";
import Abaut from "./components/Abaut"; // Import your About component
import "./styles.css"; // Import your CSS file

import { Shield, Moon, Sun, ChevronDown } from "lucide-react";
import Inicio from "./components/Inicio";
import Experiencia from "./components/Experiencia";
import Skills from "./components/Skills";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";

export default function CyberSecPortfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "inicio",
        "sobre-mi",
        "experiencia",
        "habilidades",
        "proyectos",
        "contacto",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          darkMode
            ? "bg-gray-900/95 border-gray-700"
            : "bg-white/95 border-gray-200"
        } backdrop-blur-md border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield
                className={`h-8 w-8 ${
                  darkMode ? "text-cyan-400" : "text-blue-600"
                }`}
              />
              <span className="font-bold text-xl">Oscar-A-C-C Portfolio</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                "inicio",
                "sobre-mi",
                "experiencia",
                "habilidades",
                "proyectos",
                "contacto",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
                    activeSection === section
                      ? darkMode
                        ? "text-cyan-400 bg-gray-800"
                        : "text-blue-600 bg-blue-50"
                      : darkMode
                      ? "text-gray-300 hover:text-cyan-400"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {section.replace("-", " ")}
                </button>
              ))}
            </div>

            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-md transition-colors ${
                darkMode
                  ? "text-yellow-400 hover:bg-gray-800"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-16 min-h-screen flex items-center relative overflow-hidden"
      >
        <Inicio darkMode={darkMode} />
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20">
        <Abaut darkMode={darkMode} />
      </section>

      {/* Experience Section */}
      <section
        id="experiencia"
        className={`py-20 ${darkMode ? "bg-gray-800/50" : "bg-gray-50"}`}
      >
        <Experiencia darkMode={darkMode} />
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20">
        <Skills darkMode={darkMode} />
      </section>

      {/* Projects Section */}
      <section
        id="proyectos"
        className={`py-20 ${darkMode ? "bg-gray-800/50" : "bg-gray-50"}`}
      >
        <Proyectos darkMode={darkMode} />
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <Contacto darkMode={darkMode} />
      </section>

      {/* Footer */}
      <footer
        className={`py-8 border-t ${
          darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield
                className={`h-6 w-6 ${
                  darkMode ? "text-cyan-400" : "text-blue-600"
                }`}
              />
              <span className="font-semibold">Oscar-A-C-C Portfolio</span>
            </div>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              © 2025 Todos los derechos reservados. Oscar-A-C-C.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
