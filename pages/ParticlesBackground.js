// pages/ParticlesBackground.js
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: "#fdfdfd" } },
        particles: {
          number: { value: 100 },
          color: { value: ["#0088cc", "#ffaa00", "#ff0055", "#00cc88"] },
          shape: { type: "circle" },
          size: { value: 3 },
          move: { enable: true, speed: 2 },
        },
      }}
    />
  );
}
