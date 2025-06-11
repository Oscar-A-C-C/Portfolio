import { ExternalLink } from "lucide-react";

export default function Proyectos(props) {
  let darkMode = props.darkMode == undefined ? false : props.darkMode;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
        <span className={`${darkMode ? "text-cyan-400" : "text-blue-600"}`}>
          Proyectos
        </span>{" "}
        Destacados
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "SecureAuth Platform",
            description:
              "Sistema de autenticación multi-factor con análisis de comportamiento.",
            tech: ["React", "Node.js", "JWT", "2FA"],
            category: "Security",
          },
          {
            title: "Vulnerability Scanner",
            description:
              "Herramienta automatizada para detección de vulnerabilidades web.",
            tech: ["Python", "Selenium", "OWASP", "REST API"],
            category: "Security",
          },
          {
            title: "Secure E-commerce",
            description:
              "Plataforma de comercio electrónico con seguridad avanzada.",
            tech: ["Next.js", "PostgreSQL", "Stripe", "OAuth"],
            category: "Development",
          },
          {
            title: "Network Monitor",
            description:
              "Sistema de monitoreo en tiempo real para detectar anomalías.",
            tech: ["Python", "Grafana", "InfluxDB", "Docker"],
            category: "Security",
          },
          {
            title: "Compliance Dashboard",
            description:
              "Panel de control para cumplimiento normativo ISO 27001.",
            tech: ["React", "D3.js", "Express", "MongoDB"],
            category: "Governance",
          },
          {
            title: "Incident Response Tool",
            description:
              "Plataforma para gestión y respuesta a incidentes de seguridad.",
            tech: ["Vue.js", "FastAPI", "Redis", "WebSockets"],
            category: "Security",
          },
        ].map((project, idx) => (
          <div
            key={idx}
            className={`group p-6 rounded-xl transition-all hover:scale-105 cursor-pointer ${
              darkMode
                ? "bg-gray-900/50 border border-gray-700 hover:border-cyan-500"
                : "bg-white border border-gray-200 hover:border-blue-500"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className={`text-xs px-2 py-1 rounded ${
                  darkMode
                    ? "bg-cyan-900/30 text-cyan-300"
                    : "bg-blue-50 text-blue-700"
                }`}
              >
                {project.category}
              </span>
              <ExternalLink
                className={`h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                  darkMode ? "text-cyan-400" : "text-blue-600"
                }`}
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p
              className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className={`text-xs px-2 py-1 rounded ${
                    darkMode
                      ? "bg-gray-700 text-gray-300"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
