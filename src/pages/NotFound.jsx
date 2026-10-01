import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiHome } from "react-icons/fi";
import { FaCat } from "react-icons/fa6";

import PageTransition from "../components/PageTransition";

const NotFound = () => {
  return (
    <PageTransition>
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#211e1a] px-5 pb-16 pt-28 text-white">
        {/* background decoration */}

        <div className="pointer-events-none absolute -left-32 -top-32 h-[430px] w-[430px] rounded-full border border-white/[0.04]" />

        <div className="pointer-events-none absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full border border-white/[0.04]" />

        <FaCat className="pointer-events-none absolute right-[5%] top-1/2 hidden -translate-y-1/2 text-[360px] text-white/[0.018] lg:block" />

        <div className="relative z-10 mx-auto w-full max-w-[1100px] text-center">
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
            }}
            className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c9ae8a]"
          >
            Lost somewhere?
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 text-[clamp(6rem,22vw,15rem)] font-medium leading-[0.75] tracking-[-0.08em]"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.15,
            }}
            className="mt-10 text-[clamp(2rem,5vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.05em]"
          >
            This cat wandered somewhere{" "}
            <span className="font-serif italic font-normal text-[#cbb598]">
              unexpected.
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.22,
            }}
            className="mx-auto mt-6 max-w-[560px] text-[14px] leading-7 text-white/50"
          >
            The page you're looking for doesn't exist or may have moved. Head
            back home and continue exploring Cat Care House.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            <Link
              to="/"
              className="group inline-flex items-center gap-5 rounded-full bg-[#f2e8da] py-2 pl-6 pr-2 text-[12px] font-semibold text-[#29251f]"
            >
              Back home
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#29251f] text-white transition-transform duration-300 group-hover:-translate-x-1">
                <FiArrowLeft />
              </span>
            </Link>

            <Link
              to="/booking"
              className="inline-flex h-[59px] items-center gap-3 rounded-full border border-white/15 px-6 text-[12px] font-semibold text-white transition-colors hover:bg-white hover:text-[#29251f]"
            >
              <FiHome />
              Book a stay
            </Link>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
};

export default NotFound;
