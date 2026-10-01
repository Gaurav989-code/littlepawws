import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCheck,
  FiHeart,
  FiShield,
} from "react-icons/fi";
import { FaCat } from "react-icons/fa6";

const Hero = () => {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["0%", "15%"],
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 100],
  );

  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const reveal = {
    hidden: {
      opacity: 0,
      y: 35,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.85,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#171512]"
    >
      {/* ================= BACKGROUND IMAGE ================= */}

      <motion.div
        style={{
          y: imageY,
        }}
        className="absolute inset-0 scale-[1.08]"
      >
        <img
          src="/images/image1.avif"
          alt="Relaxed cat enjoying a peaceful stay at Little Paws"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />

        {/* CINEMATIC OVERLAYS */}

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
      </motion.div>

      {/* ================= SUBTLE GRAIN ================= */}

      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.4'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ================= DECORATIVE GLOW ================= */}

      <div className="pointer-events-none absolute -left-32 bottom-[-180px] z-[2] h-[460px] w-[460px] rounded-full border border-white/[0.05]" />

      <div className="pointer-events-none absolute -left-8 bottom-[-80px] z-[2] h-[260px] w-[260px] rounded-full border border-white/[0.05]" />

      {/* ================= HERO CONTENT ================= */}

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-end px-5 pb-10 pt-32 sm:px-8 sm:pb-12 lg:items-center lg:px-12 lg:pb-0 xl:px-16"
      >
        <div className="grid w-full grid-cols-1 items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* ================= LEFT ================= */}

          <div className="max-w-[860px]">
            {/* BRAND / EYEBROW */}

            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.1,
              }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#d9c7ad] backdrop-blur-md">
                <FaCat size={12} />
              </span>

              <span className="h-[1px] w-8 bg-white/40" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/75 sm:text-[11px]">
                Little Paws
              </span>

              <span className="hidden text-white/30 sm:inline">•</span>

              <span className="hidden text-[10px] font-medium uppercase tracking-[0.22em] text-white/45 sm:inline">
                Premium Cat Boarding & Care
              </span>
            </motion.div>

            {/* ================= HEADING ================= */}

            <motion.h1
              initial="hidden"
              animate="visible"
              className="max-w-[900px] text-[clamp(3.6rem,10vw,8.5rem)] font-medium leading-[0.82] tracking-[-0.065em] text-white"
            >
              <motion.span variants={reveal} className="block">
                A better
              </motion.span>

              <motion.span
                variants={reveal}
                transition={{
                  delay: 0.12,
                }}
                className="block"
              >
                stay for
              </motion.span>

              <motion.span
                variants={reveal}
                transition={{
                  delay: 0.22,
                }}
                className="flex items-center gap-4 sm:gap-6"
              >
                your{" "}
                <span className="font-serif italic font-normal text-[#d9c7ad]">
                  cat.
                </span>
              </motion.span>
            </motion.h1>

            {/* ================= DESCRIPTION ================= */}

            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.38,
              }}
              className="mt-7 max-w-[600px] text-[15px] leading-7 text-white/70 sm:text-[16px] lg:mt-9"
            >
              Thoughtful care, peaceful private spaces, daily playtime and
              genuine attention — giving your cat a safe, comfortable second
              home while you're away.
            </motion.p>

            {/* ================= BUTTONS ================= */}

            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.5,
              }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/booking"
                className="group flex items-center gap-5 rounded-full bg-[#f4ecdf] py-2 pl-6 pr-2 text-[13px] font-semibold text-[#29251f] transition-transform duration-300 hover:scale-[1.02]"
              >
                Book a Stay
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#29251f] text-white transition-transform duration-300 group-hover:rotate-45">
                  <FiArrowUpRight size={17} />
                </span>
              </Link>

              <Link
                to="/rooms"
                className="flex h-[59px] items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 text-[13px] font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#29251f]"
              >
                Explore Our Rooms
              </Link>
            </motion.div>

            {/* ================= PRICE ================= */}

            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.58,
              }}
              className="mt-6 flex items-center gap-3"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/45">
                Rooms from
              </span>

              <span className="text-[21px] font-medium tracking-[-0.03em] text-[#d9c7ad]">
                ₹199
              </span>

              <span className="text-[11px] text-white/45">/ night</span>
            </motion.div>

            {/* ================= TRUST HIGHLIGHTS ================= */}

            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.66,
              }}
              className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[11px] text-white/70"
            >
              <span className="flex items-center gap-2">
                <FiCheck className="text-[#d9c7ad]" />
                Comfortable private rooms
              </span>

              <span className="flex items-center gap-2">
                <FiCheck className="text-[#d9c7ad]" />
                Daily individual attention
              </span>

              <span className="flex items-center gap-2">
                <FiCheck className="text-[#d9c7ad]" />
                Safe & hygienic environment
              </span>
            </motion.div>
          </div>

          {/* ================= RIGHT FLOATING CARD ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: reduceMotion ? 0 : 0.75,
              duration: reduceMotion ? 0 : 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hidden justify-end lg:flex"
          >
            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      y: [0, -8, 0],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full max-w-[350px] rounded-[30px] border border-white/15 bg-black/20 p-5 text-white shadow-2xl backdrop-blur-xl"
            >
              {/* ================= TOP ================= */}

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#d9c7ad]">
                    Little Paws Promise
                  </p>

                  <p className="mt-2 text-[21px] font-medium tracking-[-0.03em]">
                    Care like they're ours.
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10">
                  <FiHeart />
                </div>
              </div>

              {/* ================= IMAGE ================= */}

              <div className="mt-5 h-[180px] overflow-hidden rounded-[22px]">
                <img
                  src="/images/image2.avif"
                  alt="Cat receiving comfortable personal care at Little Paws"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* ================= DETAILS ================= */}

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-[18px] bg-white/10 p-4">
                  <FiShield className="mb-4 text-[#d9c7ad]" />

                  <p className="text-[13px] font-medium">Safe Stay</p>

                  <p className="mt-1 text-[10px] leading-4 text-white/50">
                    Clean and secure environment
                  </p>
                </div>

                <div className="rounded-[18px] bg-[#d9c7ad] p-4 text-[#29251f]">
                  <FiHeart className="mb-4" />

                  <p className="text-[13px] font-medium">Personal Care</p>

                  <p className="mt-1 text-[10px] leading-4 text-[#29251f]/60">
                    Attention for every cat
                  </p>
                </div>
              </div>

              {/* ================= CONTACT ================= */}

              <a
                href="https://wa.me/919960219486"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 flex items-center justify-between rounded-[18px] border border-white/10 bg-white/[0.06] px-4 py-3 transition-colors hover:bg-white/10"
              >
                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/35">
                    Need help?
                  </p>

                  <p className="mt-1 text-[11px] font-medium text-white/75">
                    +91 99602 19486
                  </p>
                </div>

                <FiArrowUpRight className="text-[#d9c7ad] transition-transform duration-300 group-hover:rotate-45" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ================= MOBILE BRAND BADGE ================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: reduceMotion ? 0 : 0.9,
          duration: reduceMotion ? 0 : 0.6,
        }}
        className="absolute bottom-7 left-5 z-20 flex items-center gap-3 lg:hidden"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[#d9c7ad] backdrop-blur-md">
          <FaCat size={12} />
        </span>

        <div>
          <p className="text-[10px] font-semibold text-white">Little Paws</p>

          <p className="mt-0.5 text-[8px] uppercase tracking-[0.2em] text-white/40">
            Safe • Calm • Loved
          </p>
        </div>
      </motion.div>

      {/* ================= SCROLL INFO ================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
          duration: 0.7,
        }}
        className="absolute bottom-8 right-7 z-20 hidden items-center gap-5 text-white/60 xl:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.28em]">
          Scroll to discover
        </span>

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  y: [0, 6, 0],
                }
          }
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20"
        >
          <FiArrowDown size={14} />
        </motion.div>
      </motion.div>

      {/* ================= SIDE TEXT ================= */}

      <div className="absolute right-[-62px] top-1/2 z-[2] hidden -translate-y-1/2 rotate-90 xl:block">
        <p className="text-[10px] font-medium uppercase tracking-[0.48em] text-white/30">
          Little Paws • Safe • Calm • Comfortable • Loved
        </p>
      </div>
    </section>
  );
};

export default Hero;
