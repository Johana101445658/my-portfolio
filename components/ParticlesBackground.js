// components/ParticlesBackground.js
import { useCallback } from "react";
import { Particles } from "@tsparticles/react";  // Use the new @tsparticles/react package
import { loadFull } from "tsparticles";  // The correct engine initialization
const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
      await loadFull(engine);  // This should work with the latest version of tsparticles
    }, []);
  
    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
        }}
      />
    );
  };
  
  export default ParticlesBackground;
  