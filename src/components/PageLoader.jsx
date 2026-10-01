import { motion } from "motion/react";
import { FaCat } from "react-icons/fa6";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-[#f8f4ec]">
      <div className="text-center">
        <motion.div
          animate={{
            y: [0, -7, 0],
            rotate: [0, -4, 4, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#29251f] text-[#f8f4ec]"
        >
          <FaCat size={21} />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0.25,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="mt-5"
        >
          <p className="text-[12px] font-semibold tracking-[-0.02em] text-[#29251f]">
            Cat Care
          </p>

          <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.3em] text-[#8d8175]">
            House
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PageLoader;
