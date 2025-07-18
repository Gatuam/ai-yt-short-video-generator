'use client';

import Particles from "react-particles";
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#000" },
        particles: {
          number: { value: 80 },
          color: { value: "#fff" },
          shape: { type: "circle" },
          opacity: { value: 0.2 },
          size: { value: 1 },
          move: { enable: true, speed: 1 },
          links: {
            enable: true,
            distance: 20,
            color: "#fff",
            opacity: 0.2,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 8 },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
