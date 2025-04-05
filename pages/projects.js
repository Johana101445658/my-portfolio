// pages/project.js

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-purple-400 mb-6 text-center">
        Projects
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example project */}
        <div className="bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-purple-500 transition">
          <h2 className="text-xl font-semibold mb-2">Project Title</h2>
          <p className="text-gray-300 mb-4">
            Short description of what the project does, what technologies were used,
            and what your role was.
          </p>
          <a
            href="https://github.com/yourgithub/project"
            className="text-purple-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        {/* Add more project cards here */}
      </div>
    </div>
  );
}


export default Projects;
