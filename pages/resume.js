import React from 'react';

const Resume = () => {
  return (
    <div style={{ backgroundColor: '#ADD8E6', color: '#000', minHeight: '100vh', padding: '20px' }}>
      <h1>Resume & Cover Letter</h1>
      <ul>
        <li><a href="/resume.pdf" target="_blank">Download Resume</a></li>
        <li><a href="/cover-letter.pdf" target="_blank">Download Cover Letter</a></li>
      </ul>
      <a href="/">Back to Home</a>
    </div>
  );
};

export default Resume;
