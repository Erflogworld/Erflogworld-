import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f26422] via-[#ff7e3d] to-[#f26422] origin-left z-[100] shadow-[0_0_10px_rgba(242,100,34,0.6)]"
      style={{ scaleX }}
    />
  );
};
