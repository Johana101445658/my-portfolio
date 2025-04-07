import Link from 'next/link';
import Navbar from "./Navbar";


export default function Projects() {
  return (
    <>
      <Navbar />
      <main>

   <div>
      <h1>Projects</h1>
      <p>Take a look at the projects I have worked on.</p>
      <nav>
        <Link href="/"><a>Home</a></Link>
      </nav>
     </main>
    </>
    </div>
  );
};

export default Projects;
