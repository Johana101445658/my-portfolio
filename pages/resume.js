import Link from 'next/link';

const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <p>This is my resume and cover letter.</p>
      <nav>
        <Link href="/"><a>Home</a></Link>
      </nav>
    </div>
  );
};

export default Resume;
