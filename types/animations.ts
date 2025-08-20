import { AnimationType } from './types'; // Importing AnimationType from types file

const animationTypes: AnimationType[] = [
  {
    name: 'fadeIn', // Fade in animation
    duration: '0.5s',
    timingFunction: 'ease-in',
  },
  {
    name: 'slideUp', // Slide up animation
    duration: '0.7s',
    timingFunction: 'ease-out',
  },
  {
    name: 'zoomIn', // Zoom in animation
    duration: '0.6s',
    timingFunction: 'ease-in-out',
  },
  {
    name: 'bounce', // Bounce animation
    duration: '0.8s',
    timingFunction: 'ease-in-out',
  },
];

export default animationTypes; // Exporting the animationTypes array as default export