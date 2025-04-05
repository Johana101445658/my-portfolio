import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#000000" },
        particles: {
          number: { value: 70 },
          color: { value: "#a855f7" },
          links: { enable: true, color: "#a855f7", distance: 130 },
          move: { enable: true, speed: 1 },
          size: { value: 2 },
        },
      }}
    />
  );
}
