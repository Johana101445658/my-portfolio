import React from 'react';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#ADD8E6', color: '#000', minHeight: '100vh', padding: '20px' }}>
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm Johana Romero, a Computer Programming and Analysis student.</p>
      <nav>
        <ul>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/experience">Experience</a></li>
          <li><a href="/resume">Resume & Cover Letter</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
