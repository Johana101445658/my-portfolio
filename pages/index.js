// pages/index.js
import Link from "next/link";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <div className="min-h-screen text-white font-sans relative overflow-hidden">
      {/* Animation */}
      <ParticlesBackground />

      {/*  principal */}
      <div className="relative z-10 flex flex-col items-center justify-center py-32 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-400 mb-4 drop-shadow-lg">
          Johana Romero
        </h1>
        <h2 className="text-xl md:text-2xl mb-10 text-gray-300">
          Computer Programming & Analysis Student
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-full max-w-4xl">
          <Link
            href="/project"
            className="bg-purple-600 hover:bg-purple-700 py-3 px-6 rounded-xl shadow-lg transition text-lg"
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className="bg-purple-600 hover:bg-purple-700 py-3 px-6 rounded-xl shadow-lg transition text-lg"
          >
            Experience
          </Link>
          <Link
            href="/resume"
            className="bg-purple-600 hover:bg-purple-700 py-3 px-6 rounded-xl shadow-lg transition text-lg"
          >
            Resume & Cover Letter
          </Link>
          <Link
            href="/contact"
            className="bg-purple-600 hover:bg-purple-700 py-3 px-6 rounded-xl shadow-lg transition text-lg"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
