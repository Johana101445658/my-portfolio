import Link from 'next/link';

const Experience = () => {
  return (
    <div>
      <h1>Experience</h1>
      <h2>Professional Experience</h2>

<h3>Pre-Weigh Operator - Estée Lauder Company (2022–2025)</h3>
<ul>
  <li>Ensured compliance with safety regulations and GMP guidelines.</li>
</ul>

<h3>Technical Support Specialist - Edusys Systems (Feb 2019–Dec 2021)</h3>
<ul>
  <li>Provided remote IT support to educational institutions.</li>
  <li>Troubleshot Zoom and Microsoft Teams issues.</li>
</ul>

<h3>Call Center Analyst - Contactamos / Telefónica Movistar (Feb 2018–Feb 2019)</h3>
<ul>
  <li>Analyzed performance indicators and proposed quality improvements.</li>
</ul>

<h3>Technical Support Supervisor - Atento Colombia / Telefónica (Oct 2014–Dec 2017)</h3>
<ul>
  <li>Led support teams, conducted training, and tracked SLAs.</li>
  <li>Handled troubleshooting, reporting, and process documentation.</li>
</ul>

      <nav>
        <Link href="/"><a>Home</a></Link>
      </nav>
    </div>
  );
};

export default Experience;
