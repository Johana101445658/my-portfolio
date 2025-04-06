// pages/experience.js

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-10 text-center animate-fade-in">
        My Work Experience
      </h1>

      <div className="space-y-10 max-w-5xl mx-auto">
        {/* Example Experience Card */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition hover:shadow-purple-500">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h2 className="text-2xl font-semibold">Estee Lauder</h2>
            <span className="text-purple-300 text-sm md:text-base">Technical Support — 2022 - 2023</span>
          </div>
          <p className="mt-3 text-gray-300">
            Provided end-user technical support across hardware/software environments. Delivered solutions through ticketing systems and remote tools. Utilized ServiceNow, Office 365, Active Directory, and remote access tools.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition hover:shadow-purple-500">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h2 className="text-2xl font-semibold">LCBO</h2>
            <span className="text-purple-300 text-sm md:text-base">Customer Service Representative — 2021 - 2022</span>
          </div>
          <p className="mt-3 text-gray-300">
            Assisted customers, managed inventory, and operated POS systems. Ensured high-quality service and maintained store presentation.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition hover:shadow-purple-500">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h2 className="text-2xl font-semibold">Atento Colombia</h2>
            <span className="text-purple-300 text-sm md:text-base">Team Supervisor — 2018 - 2020</span>
          </div>
          <p className="mt-3 text-gray-300">
            Supervised a team of 15+ agents, conducted training sessions, monitored KPIs, and managed escalations. Contributed to performance improvements and client satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}

