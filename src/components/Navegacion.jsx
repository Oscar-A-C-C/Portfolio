import React, { useContext } from "react";
import { Shield, Sun, Moon } from "lucide-react";

export default function Navegacion(props) {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
            <span className="font-bold text-xl">SecDev Portfolio</span>
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
  );
}
