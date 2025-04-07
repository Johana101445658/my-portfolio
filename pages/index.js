import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#ADD8E6', color: '#000', minHeight: '100vh', padding: '20px' }}>
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm Johana Romero, a Computer Programming and Analysis student.</p>
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

export default Home;

