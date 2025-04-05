// pages/contact.js
import '../styles/globals.css'; 
import '../components/Navbar'; 
import '../components/ParticlesBackground';


export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-purple-400 mb-6 text-center">
        Contact
      </h1>
      <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg">
        <p className="text-lg mb-6 text-gray-300 text-center">
          Feel free to reach out through any of the platforms below:
        </p>
        <div className="space-y-4">
          <a
            href="mailto:johana1221@hotmail.com"
            className="flex items-center space-x-4 hover:text-purple-400 transition"
          >
            <Mail />
            <span>johana1221@hotmail.com</span>
          </a>
          <a
            href="https://github.com/Johana101445658"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 hover:text-purple-400 transition"
          >
            <Github />
            <span>github.com/Johana101445658</span>
          </a>
          <a
            href="https://linkedin.com/in/lizettejohanaromero"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 hover:text-purple-400 transition"
          >
            <Linkedin />
            <span>linkedin.com/in/lizettejohanaromero</span>
          </a>
        </div>
      </div>
    </div>
  );
}
