import Link from 'next/link';

const Resume = () => {
  return (
export default function Resume() {
  return (
    <div style={{ paddingTop: "100px", textAlign: "center" }}>
      <h1>My Resume</h1>
      <iframe
        src="/JohanaRomero_Resume.pdf"
        width="80%"
        height="600px"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}


  <div style={{ paddingTop: "100px", textAlign: "center" }}>
      <h1>My Cover Letter</h1>
      <iframe
        src="/JohanaRomero_CoverLetter.pdf"
        width="80%"
        height="600px"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

      <nav>
        <Link href="/"><a>Home</a></Link>
      </nav>
    </div>
  );
};

export default Resume;
