import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCheck,
  FiHeart,
  FiMessageCircle,
} from "react-icons/fi";

const BookingCTA = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#f8f4ec] py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-h-[680px] overflow-hidden rounded-[34px] bg-[#211e1a] sm:min-h-[720px] lg:min-h-[760px]"
        >
          {/* ================= BACKGROUND IMAGE ================= */}

          <motion.img
            whileHover={
              reduceMotion
                ? {}
                : {
                    scale: 1.025,
                  }
            }
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            src="images/image13.avif"
            alt="Relaxed cat in a comfortable space"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* overlays */}

          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/15" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

          {/* ================= TOP BADGE ================= */}

          <div className="absolute left-6 top-6 z-10 sm:left-8 sm:top-8 lg:left-10 lg:top-10">
            <div className="flex items-center gap-3 rounded-full border border-white/15 bg-black/15 px-4 py-2 text-white backdrop-blur-md">
              <FiHeart className="text-[#d3baa0]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70">
                A stay made with care
              </span>
            </div>
          </div>

          {/* ================= CONTENT ================= */}

          <div className="relative z-10 flex min-h-[680px] items-end p-6 sm:min-h-[720px] sm:p-8 lg:min-h-[760px] lg:items-center lg:p-12 xl:p-16">
            <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              {/* LEFT */}

              <div>
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                  }}
                  className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#d2b99a]"
                >
                  Ready for their next stay?
                </motion.p>

                <motion.h2
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.85,
                    delay: 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-5 max-w-[880px] text-[clamp(3rem,7vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.06em] text-white"
                >
                  Give your cat a stay that feels{" "}
                  <span className="font-serif italic font-normal text-[#d8c5ab]">
                    like home.
                  </span>
                </motion.h2>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.75,
                    delay: 0.16,
                  }}
                  className="mt-7 max-w-[620px] text-[14px] leading-7 text-white/65 sm:text-[15px] sm:leading-8"
                >
                  Tell us about your cat, their routine and the dates you need.
                  We’ll help you choose the right stay and make the process
                  simple from the beginning.
                </motion.p>

                {/* ACTIONS */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.75,
                    delay: 0.24,
                  }}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  <Link
                    to="/booking"
                    className="group inline-flex items-center gap-5 rounded-full bg-[#f2e8da] py-2 pl-6 pr-2 text-[12px] font-semibold text-[#29251f]"
                  >
                    Check availability
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#29251f] text-white transition-transform duration-300 group-hover:rotate-45">
                      <FiArrowUpRight />
                    </span>
                  </Link>

                  <Link
                    to="/contact"
                    className="group inline-flex h-[59px] items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 text-[12px] font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-[#29251f]"
                  >
                    <FiMessageCircle />
                    Talk to us
                  </Link>
                </motion.div>

                {/* TRUST POINTS */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.75,
                    delay: 0.32,
                  }}
                  className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[11px] text-white/60"
                >
                  <span className="flex items-center gap-2">
                    <FiCheck className="text-[#d2b99a]" />
                    Personal care plan
                  </span>

                  <span className="flex items-center gap-2">
                    <FiCheck className="text-[#d2b99a]" />
                    Flexible stay options
                  </span>

                  <span className="flex items-center gap-2">
                    <FiCheck className="text-[#d2b99a]" />
                    Clear pre-stay discussion
                  </span>
                </motion.div>
              </div>

              {/* ================= RIGHT CARD ================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="hidden justify-end lg:flex"
              >
                <div className="w-full max-w-[360px] rounded-[28px] border border-white/15 bg-black/20 p-6 text-white backdrop-blur-xl">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#d2b99a]">
                    Before their stay
                  </p>

                  <h3 className="mt-4 text-[28px] font-medium leading-tight tracking-[-0.035em]">
                    We get to know your cat first.
                  </h3>

                  <div className="mt-7 space-y-4">
                    {[
                      "Feeding routine",
                      "Personality & habits",
                      "Medication requirements",
                      "Favorite toys & comfort items",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 border-b border-white/10 pb-4"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[#d2b99a]">
                          <FiCheck size={12} />
                        </span>

                        <span className="text-[12px] text-white/70">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-[11px] leading-6 text-white/45">
                    A little information beforehand helps us keep their routine
                    familiar and their stay comfortable.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ================= SIDE TEXT ================= */}

          <div className="absolute right-[-60px] top-1/2 hidden -translate-y-1/2 rotate-90 xl:block">
            <p className="text-[9px] font-medium uppercase tracking-[0.45em] text-white/25">
              Book • Relax • Stay Connected
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingCTA;
