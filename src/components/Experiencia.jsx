export default function Experiencia(props) {
  let darkMode = props.darkmode;
  let trabajo = [
    {
      title: "Analista de seguridad de información",
      company: "avatelco legal tech sas",
      period: "2023 - 2025",
      description:
        "Acompañamiento a entidades sensibilizando e implementando controles de seguridad.",
      achievements: [
        "Sistema de gestión de la seguridad",
        "Análisis de datos estadísticos",
        "Seguridad de la información",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
        <span className={`${darkMode ? "text-cyan-400" : "text-blue-600"}`}>
          Experiencia
        </span>{" "}
        Profesional
      </h2>

      <div className="space-y-8">
        {trabajo.map((job, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl ${
              darkMode
                ? "bg-gray-900/50 border border-gray-700"
                : "bg-white border border-gray-200"
            } hover:shadow-lg transition-all`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p
                  className={`${
                    darkMode ? "text-cyan-400" : "text-blue-600"
                  } font-medium`}
                >
                  {job.company}
                </p>
              </div>
              <span
                className={`text-sm px-3 py-1 rounded-full ${
                  darkMode
                    ? "bg-gray-700 text-gray-300"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {job.period}
              </span>
            </div>
            <p
              className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              {job.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {job.achievements.map((achievement, i) => (
                <span
                  key={i}
                  className={`text-xs px-2 py-1 rounded ${
                    darkMode
                      ? "bg-cyan-900/30 text-cyan-300"
                      : "bg-blue-50 text-blue-700"
                  }`}
                >
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
