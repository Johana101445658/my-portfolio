import React from 'react';
import Link from 'next/link';
import styles from '../styles/mystyles.module.css';

const teststyle = {
  color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
};

const Home = () => {
  return (
    <div style={{ backgroundColor: '#ADD8E6', color: '#000', minHeight: '100vh', padding: '20px' }}>
      <h1 className={styles.johana} >Welcome to My Portfolio</h1>
      <p style={teststyle}>Hi, I'm Johana Romero, a Computer Programming and Analysis student.</p>
      <nav id="barra">
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

