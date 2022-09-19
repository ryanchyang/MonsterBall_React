export const fadeInFromLeft = {
  hidden: {
    opacity: 0,
    x: '-100px',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'easeInOut', delay: 0.3, duration: 0.5 },
  },
  slowVisible: {
    opacity: 1,
    x: 0,
    transition: { type: 'easeInOut', delay: 0.2, duration: 0.7 },
  },
  exit: {
    x: '-100vh',
    transition: { ease: 'easeInOut' },
  },
};
