/*
The code has been modified from the original to fit the site, 
and a library has also been implemented. To see the original code, 
check the profile described below:
*/
/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

// La funzione particlesJS prende due parametri: l'ID del div contenitore e un oggetto con le impostazioni
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50, // Numero di particelle
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#bc13fe" // Colore bianco
    },
    "shape": {
      "type": "circle",
    },
    "opacity": {
      "value": 0.5,
      "random": false
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 3, // Velocità di movimento
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" // Unisce le particelle al mouse quando ci passi sopra
      },
      "onclick": {
        "enable": true,
        "mode": "push" // Aggiunge particelle quando clicchi
      },
      "resize": true
    }
  },
  "retina_detect": false
});