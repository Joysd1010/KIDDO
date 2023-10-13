import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Particle = () => {
    const particlesInit = async (main) => {
        console.log(main);
    
      
        await loadFull(main);
      };
    return (
        <Particles 
        id='colorsParticles' container='Praticle-Container'  init={particlesInit} 
        options={{
            particles: {
              number: {
                value: 20,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              "fullScreen": {
                "enable": false,
                "zIndex": 1
              },
              size: {
                value: 3,
                random: {
                  enable: true,
                  min: 1,
                  max: 4,
                },
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
              },
              line_linked: {
                enable: false,
              },
            },
          }}
        />
    );
};

export default Particle;