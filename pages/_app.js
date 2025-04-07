// pages/_app.js
import "../styles/globals.css";
import ParticlesBackground from "./ParticlesBackground";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ParticlesBackground />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
