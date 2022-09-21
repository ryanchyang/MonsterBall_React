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

export const sideNavbarVariants = {
  hidden: {
    x: '-80vw',
  },
  visible: {
    x: 0,
    transition: { ease: 'easeInOut', duration: 0.3 },
  },
  exit: {
    x: '-100vw',
  },
};

export const maskVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.4,
    transition: { ease: 'easeInOut', duration: 0.2 },
  },
  exit: {
    opacity: 0,
  },
};
