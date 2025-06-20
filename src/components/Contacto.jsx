import { Globe, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
  console.log("Captcha value:", value);
}

export default function Contacto({ darkMode }) {
  const [buttonText, setButtonText] = useState("Enviar Email");
  // ReCAPTCHA state
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    setButtonText("Enviando...");

    const serviceID = "default_service";
    const templateID = "template_4w6bkd4";
    emailjs.init({
      publicKey: "rcBWL5NWgaAkne0K6",
    });
    emailjs.sendForm(serviceID, templateID, event.target).then(
      () => {
        setButtonText("Enviar Email");
        alert("Enviado!");
      },
      (err) => {
        setButtonText("Enviar Email");
        alert(JSON.stringify(err));
      }
    );
    darkMode = darkMode == undefined ? false : darkMode;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          <span className={`${darkMode ? "text-cyan-400" : "text-blue-600"}`}>
            Conectemos
          </span>
        </h2>
        <p
          className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div
              className={`p-3 rounded-lg ${
                darkMode ? "bg-cyan-900/30" : "bg-blue-50"
              }`}
            >
              <Mail
                className={`h-6 w-6 ${
                  darkMode ? "text-cyan-400" : "text-blue-600"
                }`}
              />
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                carrenooscar.95@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div
              className={`p-3 rounded-lg ${
                darkMode ? "bg-cyan-900/30" : "bg-blue-50"
              }`}
            >
              <Phone
                className={`h-6 w-6 ${
                  darkMode ? "text-cyan-400" : "text-blue-600"
                }`}
              />
            </div>
            <div>
              <h3 className="font-semibold">Teléfono</h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                +57 3147971945
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div
              className={`p-3 rounded-lg ${
                darkMode ? "bg-cyan-900/30" : "bg-blue-50"
              }`}
            >
              <MapPin
                className={`h-6 w-6 ${
                  darkMode ? "text-cyan-400" : "text-blue-600"
                }`}
              />
            </div>
            <div>
              <h3 className="font-semibold">Ubicación</h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                Bucaramanga, Colombia
              </p>
            </div>
          </div>

          <div className="flex space-x-4 pt-6">
            <a
              target="_blank"
              href="https://github.com/Oscar-A-C-C"
              className={`p-3 rounded-lg transition-colors ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-600"
              }`}
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/oscar-a-c-c/"
              className={`p-3 rounded-lg transition-colors ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-600"
              }`}
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://portfolio-peach-nine-43.vercel.app/"
              className={`p-3 rounded-lg transition-colors ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-600"
              }`}
            >
              <Globe className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div
          className={`p-8 rounded-2xl ${
            darkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-gray-50 border border-gray-200"
          }`}
        >
          <h3 className="text-xl font-semibold mb-6">Envíame un mensaje</h3>
          <form className="space-y-4" id="form" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-2">Nombre</label>
              <input
                type="text"
                name="name"
                className={`w-full p-3 rounded-lg border transition-colors ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white focus:border-cyan-400"
                    : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                } focus:outline-none`}
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                className={`w-full p-3 rounded-lg border transition-colors ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white focus:border-cyan-400"
                    : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                } focus:outline-none`}
                placeholder="tu@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mensaje</label>
              <textarea
                name="message"
                rows={4}
                className={`w-full p-3 rounded-lg border transition-colors ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white focus:border-cyan-400"
                    : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                } focus:outline-none`}
                placeholder="Cuéntame sobre tu proyecto..."
                required
              />
            </div>
            <ReCAPTCHA
              sitekey="6LdH9WYrAAAAABBekKSbiQaGgJ2f8lw5BPMtJ-oM"
              className="mb-4"
              value={captchaValue}
              onChange={onChange}
            />
            ,
            <input
              type="submit"
              value={buttonText}
              id="button"
              className={`w-full py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                darkMode
                  ? "bg-cyan-500 hover:bg-cyan-600 text-black"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            />
          </form>
          <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          ></script>
        </div>
      </div>
    </div>
  );
}
