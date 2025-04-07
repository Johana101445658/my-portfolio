import React from 'react';
import Link from 'next/link';
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      { <div style={{ backgroundColor: '#ADD8E6', color: '#000', minHeight: '100vh', padding: '20px' }}>
      <h1>Welcome to My Portfolio</h1>
      <h2>About Me</h2>
<p>
  I am a Computer Programming and Analysis student at George Brown College. I have hands-on
  experience in full-stack development, agile methodologies, and application debugging. 
  I'm passionate about problem-solving, improving processes, and providing exceptional IT support.
</p>
      <nav>
        <ul>
          <li><Link href="/projects"><a>Projects</a></Link></li>
          <li><Link href="/experience"><a>Experience</a></Link></li>
          <li><Link href="/resume"><a>Resume & Cover Letter</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;}
    </>
  );
}

