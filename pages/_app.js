import '../styles/globals.css'; 
import '../components/Navbar'; 
import '../components/ParticlesBackground'; 


export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* Navivar Space */}
        <Component {...pageProps} />
      </div>
    </>
  );
}
