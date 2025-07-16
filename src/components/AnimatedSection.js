import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AnimatedSection = ({ 
  children, 
  animation = "fadeIn", 
  delay = 0, 
  duration = 0.5,
  threshold = 0.2,
  ...props 
}) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold });

  // Animation variants
  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration, delay } }
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration, delay } }
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration, delay } }
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration, delay } }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration, delay } }
    },
    bounce: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 15,
          delay 
        } 
      }
    }
  };

  const selectedAnimation = animations[animation] || animations.fadeIn;

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={selectedAnimation}
      style={{ touchAction: 'auto', WebkitOverflowScrolling: 'touch' }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
