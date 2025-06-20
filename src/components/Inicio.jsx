import { Shield, Code, Server, Database, ChevronDown } from "lucide-react";

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

export default function Inicio({ darkMode }) {
  return (
    <>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl font-mono">{"{"}</div>
        <div className="absolute top-40 right-20 text-5xl">0x</div>
        <div className="absolute bottom-40 left-20 text-5xl">0x</div>
        <div className="absolute bottom-20 right-10 text-6xl font-mono">
          {"}"}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                darkMode
                  ? "bg-cyan-900/30 text-cyan-400 border border-cyan-800"
                  : "bg-blue-50 text-blue-700 border border-blue-200"
              }`}
            >
              <Shield className="h-4 w-4 mr-2" />
              Entuciasta en Ciberseguridad & Desarrollo
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span
                className={`${darkMode ? "text-cyan-400" : "text-blue-600"}`}
              >
                Oscar
              </span>{" "}
              Carreño
            </h1>

            <p
              className={`text-xl leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Desarrollador y entuciasta en seguridad informática, creando
              soluciones robustas y protegidas contra amenazas cibernéticas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("proyectos")}
                className={`px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  darkMode
                    ? "bg-cyan-500 hover:bg-cyan-600 text-black"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Ver Proyectos
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className={`px-8 py-4 rounded-lg font-semibold border-2 transition-all ${
                  darkMode
                    ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                    : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                Contactar
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              className={`absolute inset-0 rounded-3xl blur-3xl opacity-20 ${
                darkMode ? "bg-cyan-500" : "bg-blue-500"
              }`}
            ></div>
            <div
              className={`relative rounded-3xl p-8 backdrop-blur-sm ${
                darkMode
                  ? "bg-gray-800/50 border border-gray-700"
                  : "bg-white/50 border border-gray-200"
              }`}
            >
              <div className="grid grid-cols-2 gap-6">
                <div
                  className={`p-6 rounded-xl ${
                    darkMode ? "bg-gray-700/50" : "bg-gray-50"
                  }`}
                >
                  <Shield
                    className={`h-12 w-12 mb-4 ${
                      darkMode ? "text-cyan-400" : "text-blue-600"
                    }`}
                  />
                  <h3 className="font-semibold mb-2">Seguridad</h3>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Protección avanzada
                  </p>
                </div>
                <div
                  className={`p-6 rounded-xl ${
                    darkMode ? "bg-gray-700/50" : "bg-gray-50"
                  }`}
                >
                  <Code
                    className={`h-12 w-12 mb-4 ${
                      darkMode ? "text-cyan-400" : "text-blue-600"
                    }`}
                  />
                  <h3 className="font-semibold mb-2">Desarrollo</h3>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Código limpio
                  </p>
                </div>
                <div
                  className={`p-6 rounded-xl ${
                    darkMode ? "bg-gray-700/50" : "bg-gray-50"
                  }`}
                >
                  <Server
                    className={`h-12 w-12 mb-4 ${
                      darkMode ? "text-cyan-400" : "text-blue-600"
                    }`}
                  />
                  <h3 className="font-semibold mb-2">Infraestructura</h3>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Arquitectura sólida
                  </p>
                </div>
                <div
                  className={`p-6 rounded-xl ${
                    darkMode ? "bg-gray-700/50" : "bg-gray-50"
                  }`}
                >
                  <Database
                    className={`h-12 w-12 mb-4 ${
                      darkMode ? "text-cyan-400" : "text-blue-600"
                    }`}
                  />
                  <h3 className="font-semibold mb-2">Datos</h3>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Gestión segura
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown
          className={`h-6 w-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
        />
      </div>
    </>
  );
}
