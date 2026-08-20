import React from 'react';
import { motion } from 'motion/react';

interface SectionTransitionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  children,
  delay = 0,
  className = '',
  id,
}) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: '-40px' }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
