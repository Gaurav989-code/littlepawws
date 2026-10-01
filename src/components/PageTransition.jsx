import { motion, useReducedMotion } from "motion/react";

const PageTransition = ({ children }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.main
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: reduceMotion ? 0 : -6,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.42,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.main>
  );
};

export default PageTransition;
