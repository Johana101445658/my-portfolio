import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold text-purple-400">Johana</h1>
        <ul className="flex space-x-6 text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/project">Projects</Link></li>
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/resume">Resume</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
