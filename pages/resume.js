import Link from 'next/link';

const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <p>This is my resume and cover letter.</p>
    <h2>My Resume</h2>
    <iframe
    src="/resume.pdf"
    width="100%"
  height="600px"
  style={{ border: 'none' }}
  title="Resume"
/>

<h2>Cover Letter</h2>
<iframe
  src="/coverletter.pdf"
  width="100%"
  height="600px"
  style={{ border: 'none' }}
  title="Cover Letter"
/>

      <nav>
        <Link href="/"><a>Home</a></Link>
      </nav>
    </div>
  );
};

export default Resume;
