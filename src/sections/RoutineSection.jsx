import { motion, useReducedMotion } from "motion/react";
import {
  FiCoffee,
  FiHeart,
  FiMoon,
  FiScissors,
  FiSun,
  FiZap,
} from "react-icons/fi";

const routine = [
  {
    time: "08:00",
    title: "Breakfast",
    description:
      "Morning feeding based on your cat's normal routine and dietary instructions.",
    icon: FiCoffee,
  },
  {
    time: "10:00",
    title: "Play & Exercise",
    description:
      "Interactive play, enrichment and gentle activity based on your cat's personality.",
    icon: FiZap,
  },
  {
    time: "12:00",
    title: "Quiet Rest",
    description:
      "Peaceful private time for naps, relaxation and comfortable uninterrupted rest.",
    icon: FiSun,
  },
  {
    time: "15:00",
    title: "Care & Grooming",
    description:
      "Brushing, checking comfort levels and giving individual attention where needed.",
    icon: FiScissors,
  },
  {
    time: "18:00",
    title: "Evening Attention",
    description:
      "Another calm interaction session with affection, play and enrichment.",
    icon: FiHeart,
  },
  {
    time: "20:00",
    title: "Dinner & Bedtime",
    description:
      "Evening meal followed by a clean, peaceful room prepared for a comfortable night.",
    icon: FiMoon,
  },
];

const RoutineSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#eee4d7] py-24 sm:py-28 lg:py-36">
      {/* decorative background */}

      <div className="pointer-events-none absolute -right-32 top-20 h-[360px] w-[360px] rounded-full border border-[#29251f]/[0.04]" />

      <div className="pointer-events-none absolute -right-10 top-[145px] h-[200px] w-[200px] rounded-full border border-[#29251f]/[0.04]" />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ================= HEADER ================= */}

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
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
                amount: 0.5,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
              }}
              className="mb-6 flex items-center gap-4"
            >
              <span className="h-[1px] w-10 bg-[#8c765a]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#8c765a] sm:text-[11px]">
                Daily Routine
              </span>
            </motion.div>

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
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[850px] text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.94] tracking-[-0.055em] text-[#29251f]"
            >
              A calm day, built around{" "}
              <span className="font-serif italic font-normal text-[#9c8061]">
                their rhythm.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
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
              duration: reduceMotion ? 0 : 0.75,
              delay: 0.1,
            }}
            className="max-w-[520px] text-[14px] leading-7 text-[#71685f] sm:text-[15px] sm:leading-8 lg:pb-2"
          >
            Cats feel safest when their day is predictable. We balance feeding,
            activity, individual attention and plenty of uninterrupted rest to
            create a gentle daily routine.
          </motion.p>
        </div>

        {/* ================= TIMELINE ================= */}

        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          {/* center desktop line */}

          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[#29251f]/10 lg:block" />

          {/* mobile line */}

          <div className="absolute bottom-0 left-[23px] top-0 w-px bg-[#29251f]/10 lg:hidden" />

          <div className="space-y-6 lg:space-y-0">
            {routine.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    delay: reduceMotion ? 0 : index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative lg:grid lg:min-h-[260px] lg:grid-cols-2"
                >
                  {/* ================= DESKTOP LEFT ================= */}

                  <div
                    className={`hidden lg:flex ${
                      isLeft
                        ? "items-center justify-end pr-16"
                        : "items-center justify-start pl-16"
                    }`}
                  >
                    {isLeft ? (
                      <RoutineCard
                        item={item}
                        Icon={Icon}
                        reduceMotion={reduceMotion}
                      />
                    ) : (
                      <TimeBlock item={item} align="left" />
                    )}
                  </div>

                  {/* ================= DESKTOP CENTER DOT ================= */}

                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.45,
                      delay: reduceMotion ? 0 : index * 0.05 + 0.2,
                      type: "spring",
                      stiffness: 240,
                      damping: 18,
                    }}
                    className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[7px] border-[#eee4d7] bg-[#29251f] text-white lg:flex"
                  >
                    <Icon size={14} />
                  </motion.div>

                  {/* ================= DESKTOP RIGHT ================= */}

                  <div
                    className={`hidden lg:flex ${
                      isLeft
                        ? "items-center justify-start pl-16"
                        : "items-center justify-end pr-16"
                    }`}
                  >
                    {isLeft ? (
                      <TimeBlock item={item} align="left" />
                    ) : (
                      <RoutineCard
                        item={item}
                        Icon={Icon}
                        reduceMotion={reduceMotion}
                      />
                    )}
                  </div>

                  {/* ================= MOBILE ================= */}

                  <div className="relative flex gap-5 lg:hidden">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[6px] border-[#eee4d7] bg-[#29251f] text-white">
                      <Icon size={14} />
                    </div>

                    <div className="flex-1 pb-4">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="text-[11px] font-semibold tracking-[0.2em] text-[#8c765a]">
                          {item.time}
                        </span>

                        <span className="h-px w-6 bg-[#8c765a]/40" />
                      </div>

                      <motion.div
                        whileHover={
                          reduceMotion
                            ? {}
                            : {
                                y: -4,
                              }
                        }
                        className="rounded-[24px] border border-[#29251f]/[0.06] bg-[#f8f4ec] p-6"
                      >
                        <h3 className="text-[22px] font-medium tracking-[-0.03em] text-[#29251f]">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-[13px] leading-6 text-[#746b62]">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}

        <motion.div
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
            amount: 0.5,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
          }}
          className="mt-16 overflow-hidden rounded-[30px] bg-[#29251f] text-white lg:mt-24"
        >
          <div className="grid lg:grid-cols-[1fr_0.75fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#c9ae8a]">
                Every cat is different
              </p>

              <h3 className="mt-5 max-w-[720px] text-[clamp(2rem,4vw,4.4rem)] font-medium leading-[0.98] tracking-[-0.045em]">
                Their routine comes first.
              </h3>

              <p className="mt-5 max-w-[620px] text-[13px] leading-7 text-white/55 sm:text-[14px]">
                Feeding times, favorite toys, sleeping habits and individual
                care needs can all be discussed before their stay so we can keep
                things as familiar as possible.
              </p>
            </div>

            <div className="relative min-h-[280px] overflow-hidden lg:min-h-full">
              <motion.img
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        scale: 1.04,
                      }
                }
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                src="images/image6.avif"
                alt="Relaxed cat resting"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#29251f]/40 to-transparent lg:bg-gradient-to-r lg:from-[#29251f]/70 lg:to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const RoutineCard = ({ item, Icon, reduceMotion }) => {
  return (
    <motion.div
      whileHover={
        reduceMotion
          ? {}
          : {
              y: -6,
            }
      }
      className="group w-full max-w-[500px] rounded-[28px] border border-[#29251f]/[0.06] bg-[#f8f4ec] p-7 transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(57,45,32,0.08)]"
    >
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9c8061]">
            Daily care
          </p>

          <h3 className="mt-4 text-[28px] font-medium tracking-[-0.035em] text-[#29251f]">
            {item.title}
          </h3>
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8ddce] text-[#866f54] transition-transform duration-500 group-hover:rotate-[-8deg]">
          <Icon size={17} />
        </div>
      </div>

      <p className="mt-4 text-[13px] leading-6 text-[#746b62]">
        {item.description}
      </p>
    </motion.div>
  );
};

const TimeBlock = ({ item, align }) => {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#968573]">
        Routine
      </p>

      <p className="mt-3 text-[42px] font-medium tracking-[-0.045em] text-[#29251f]">
        {item.time}
      </p>
    </div>
  );
};

export default RoutineSection;
