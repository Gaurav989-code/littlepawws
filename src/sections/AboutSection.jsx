import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiHeart, FiHome, FiShield } from "react-icons/fi";

const stats = [
  {
    number: "24/7",
    label: "Care & supervision",
  },
  {
    number: "100%",
    label: "Cat focused",
  },
  {
    number: "Daily",
    label: "Play & attention",
  },
];

const features = [
  {
    icon: FiHome,
    title: "Peaceful spaces",
    text: "Comfortable private areas designed to help cats feel calm and secure.",
  },
  {
    icon: FiHeart,
    title: "Personal attention",
    text: "Every cat receives individual care, affection and daily interaction.",
  },
  {
    icon: FiShield,
    title: "Safe environment",
    text: "Clean, monitored spaces with careful routines and hygiene standards.",
  },
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const reduceMotion = useReducedMotion();

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-5%", "8%"],
  );

  const smallImageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [35, -35],
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f8f4ec] py-24 sm:py-28 lg:py-36"
    >
      {/* background details */}

      <div className="pointer-events-none absolute left-[-140px] top-20 h-[320px] w-[320px] rounded-full border border-[#29251f]/[0.05]" />

      <div className="pointer-events-none absolute left-[-80px] top-[140px] h-[200px] w-[200px] rounded-full border border-[#29251f]/[0.05]" />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* top label */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 flex items-center gap-4 lg:mb-16"
        >
          <span className="h-[1px] w-10 bg-[#8c765a]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#8c765a] sm:text-[11px]">
            Welcome to Cat Care House
          </span>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 xl:gap-28">
          {/* ================= IMAGE SIDE ================= */}

          <div
            ref={imageRef}
            className="relative mx-auto w-full max-w-[650px] lg:mx-0"
          >
            {/* main image */}

            <motion.div
              initial={{
                opacity: 0,
                clipPath: "inset(15% 0% 15% 0%)",
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      clipPath: "inset(0% 0% 0% 0%)",
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 1.1,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative h-[500px] overflow-hidden rounded-[32px] sm:h-[620px] lg:h-[680px]"
            >
              <motion.img
                style={{
                  y: imageY,
                }}
                src="images/image3.avif"
                alt="Relaxed cat in a peaceful environment"
                className="h-[110%] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

              {/* image label */}

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.28em] text-white/60">
                    Designed for cats
                  </p>

                  <p className="mt-2 max-w-[230px] text-lg font-medium leading-snug">
                    Quiet spaces made to feel safe and familiar.
                  </p>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md sm:flex">
                  <FiHeart />
                </div>
              </div>
            </motion.div>

            {/* floating second image */}

            <motion.div
              style={{
                y: smallImageY,
              }}
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      x: 0,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -bottom-12 -right-2 hidden w-[235px] rounded-[26px] border-[7px] border-[#f8f4ec] bg-[#f8f4ec] shadow-[0_24px_70px_rgba(53,44,34,0.15)] sm:block lg:-right-10 xl:-right-14"
            >
              <div className="h-[280px] overflow-hidden rounded-[20px]">
                <img
                  src="images/image4.avif"
                  alt="Cat enjoying personal attention"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between px-3 py-4">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#9b8e80]">
                    Daily Care
                  </p>

                  <p className="mt-1 text-[12px] font-medium text-[#29251f]">
                    Love in every detail
                  </p>
                </div>

                <FiHeart className="text-[#8c765a]" />
              </div>
            </motion.div>
          </div>

          {/* ================= CONTENT SIDE ================= */}

          <div className="lg:pl-4">
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: 0.1,
              }}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#968574]"
            >
              More than boarding
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.85,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[700px] text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.055em] text-[#29251f]"
            >
              A second home{" "}
              <span className="font-serif italic font-normal text-[#9b8060]">
                made for cats.
              </span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: 0.28,
              }}
              className="mt-8 max-w-[590px] text-[15px] leading-7 text-[#6f675f] sm:text-[16px] sm:leading-8"
            >
              We understand that cats need more than food and shelter. They need
              calm surroundings, familiar routines, personal space and people
              who understand their unique personalities.
            </motion.p>

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: 0.36,
              }}
              className="mt-4 max-w-[590px] text-[15px] leading-7 text-[#6f675f] sm:text-[16px] sm:leading-8"
            >
              Our cat care house is designed around comfort, cleanliness,
              enrichment and genuine attention so you can travel knowing your
              cat is being cared for thoughtfully.
            </motion.p>

            {/* feature list */}

            <div className="mt-10 space-y-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{
                      opacity: 0,
                      x: 25,
                    }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: reduceMotion ? 0 : 0.65,
                      delay: reduceMotion ? 0 : 0.42 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex items-start gap-4 rounded-[22px] border border-[#29251f]/[0.06] bg-white/35 p-4 transition-all duration-500 hover:bg-white/70 sm:p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eee4d5] text-[#816c53] transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-105">
                      <Icon size={17} />
                    </div>

                    <div>
                      <h3 className="text-[14px] font-semibold text-[#302b26] sm:text-[15px]">
                        {feature.title}
                      </h3>

                      <p className="mt-1 max-w-[460px] text-[12px] leading-5 text-[#81776d] sm:text-[13px]">
                        {feature.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: 0.7,
              }}
              className="mt-9"
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-5 rounded-full bg-[#29251f] py-2 pl-6 pr-2 text-[13px] font-medium text-white transition-transform duration-300 hover:scale-[1.02]"
              >
                Discover our story
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1e8dc] text-[#29251f] transition-transform duration-300 group-hover:rotate-45">
                  <FiArrowUpRight />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ================= STATS ================= */}

        <div className="mt-28 border-y border-[#29251f]/10 sm:mt-36 lg:mt-40">
          <div className="grid grid-cols-1 divide-y divide-[#29251f]/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
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
                  amount: 0.4,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                className="py-8 text-center sm:py-10 lg:py-12"
              >
                <p className="text-[34px] font-medium tracking-[-0.045em] text-[#29251f] sm:text-[42px]">
                  {stat.number}
                </p>

                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#93877b]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
