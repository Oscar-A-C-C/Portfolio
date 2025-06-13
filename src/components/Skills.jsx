import { Shield, Code } from "lucide-react";

export default function Skills({ darkMode }) {
  let habilidades = [
    "Pentesting",
    "OWASP Top 10",
    "Análisis de Malware",
    "Respuesta a incidentes",
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
        <span className={`${darkMode ? "text-cyan-400" : "text-blue-600"}`}>
          Habilidades
        </span>{" "}
        Técnicas
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div
          className={`p-6 rounded-xl ${
            darkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-gray-50 border border-gray-200"
          }`}
        >
          <Shield
            className={`h-12 w-12 mb-4 ${
              darkMode ? "text-cyan-400" : "text-blue-600"
            }`}
          />
          <h3 className="text-xl font-semibold mb-4">Seguridad</h3>
          <div className="space-y-2">
            {habilidades.map((habilidad, i) => (
              <div
                key={i}
                className={`text-sm px-3 py-1 rounded ${
                  darkMode
                    ? "bg-gray-700 text-gray-300"
                    : "bg-white text-gray-600"
                }`}
              >
                {habilidad}
              </div>
            ))}
          </div>
        </div>

        <div
          className={`p-6 rounded-xl ${
            darkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-gray-50 border border-gray-200"
          }`}
        >
          <Code
            className={`h-12 w-12 mb-4 ${
              darkMode ? "text-cyan-400" : "text-blue-600"
            }`}
          />
          <h3 className="text-xl font-semibold mb-4">Desarrollo</h3>
          <div className="space-y-2">
            {["React", "Node.js", "Python", "TypeScript", "PostgreSQL"].map(
              (skill, i) => (
                <div
                  key={i}
                  className={`text-sm px-3 py-1 rounded ${
                    darkMode
                      ? "bg-gray-700 text-gray-300"
                      : "bg-white text-gray-600"
                  }`}
                >
                  {skill}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
