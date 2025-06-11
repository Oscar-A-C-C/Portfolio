import { Shield, Code, Terminal, Lock } from "lucide-react"; // Importing icons from lucide-react

let skill = [
  {
    icon: Shield,
    title: "Análisis de Vulnerabilidades",
    desc: "Identificación proactiva de riesgos",
  },
  {
    icon: Lock,
    title: "Implementación de Seguridad",
    desc: "Protocolos y controles avanzados",
  },
  {
    icon: Code,
    title: "Desarrollo Seguro",
    desc: "Código resistente a ataques",
  },
  {
    icon: Terminal,
    title: "Pentesting",
    desc: "Evaluación ética de seguridad",
  },
];

export default function About({ darkMode }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className={`${darkMode ? "text-cyan-400" : "text-blue-600"}`}>
              Sobre
            </span>{" "}
            Mí
          </h2>
          <div className="space-y-4 text-lg">
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Soy un desarrollador web, me gusta adquirir conocimiento
              constantemente. He trabajado con varios lenguajes de programación
              entre ellos (Python, JavaScript, PHP), esto me permite adaptarme
              adecuadamente a diversos proyectos.
            </p>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Me gusta trabajar en equipo, poder adquirir experiencia y nuevos
              conocimientos con mis compañeros, manejando una adecuada
              comunicación para el buen cumplimiento de objetivos.
            </p>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Puedo aportar ideas frescas y una perspectiva valiosa a tu equipo
              de desarrollo, ¡no dudes en contactarme!
            </p>
          </div>
        </div>

        <div
          className={`p-8 rounded-2xl ${
            darkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-gray-50 border border-gray-200"
          }`}
        >
          <h3 className="text-xl font-semibold mb-6">Especialidades</h3>
          <div className="space-y-4">
            {skill.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <item.icon
                  className={`h-6 w-6 mt-1 ${
                    darkMode ? "text-cyan-400" : "text-blue-600"
                  }`}
                />
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
