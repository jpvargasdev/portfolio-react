import React, { memo } from 'react';

// components
import Particles from 'react-particles-js';

// style
import './particles.scss';

// constants
const particlesConfigutation = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: "#000",
    },
    line_linked: {
      color: "#000",
      enable: true,
    },
    size: {
      value: 5,
      random: true,
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
    },
  },
  retina_detected: false,
};

const ParticlesBackground = () => <Particles params={particlesConfigutation} className="particles" />;

export default memo(ParticlesBackground);
