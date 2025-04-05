// pages/resume.js
import Head from "next/head";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Head>
        <title>Resume & Cover Letter - Johana Romero</title>
      </Head>
      <h1 className="text-4xl font-bold text-purple-400 mb-6 text-center">
        Resume & Cover Letter
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Resume</h2>
          <iframe
            src="/documents/resume.pdf"
            className="w-full h-[600px] rounded-md border-2 border-purple-500"
            title="Resume"
          ></iframe>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Cover Letter</h2>
          <iframe
            src="/documents/cover_letter.pdf"
            className="w-full h-[600px] rounded-md border-2 border-purple-500"
            title="Cover Letter"
          ></iframe>
        </div>
      </div>
    </div>
  );
}