import Link from 'next/link';

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>If you'd like to get in touch, feel free to reach out.</p>
      <nav>
        <Link href="/"><a>Home</a></Link>
      </nav>
    </div>
  );
};

export default Contact;
