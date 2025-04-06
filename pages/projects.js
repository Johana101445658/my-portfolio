import Link from 'next/link';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <p>Take a look at the projects I have worked on.</p>
      <nav>
        <Link href="/"><a>Home</a></Link>
      </nav>
    </div>
  );
};

export default Projects;
