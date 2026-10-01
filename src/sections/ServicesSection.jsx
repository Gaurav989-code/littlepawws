import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCoffee,
  FiHeart,
  FiHome,
  FiScissors,
  FiShield,
  FiTruck,
} from "react-icons/fi";

const services = [
  {
    id: 1,
    title: "Cat Boarding",
    description:
      "Comfortable private spaces, daily supervision, feeding and personal attention while you're away.",
    icon: FiHome,
  },
  {
    id: 2,
    title: "Day Care",
    description:
      "A calm and engaging daytime stay with play, rest, feeding and individual attention.",
    icon: FiHeart,
  },
  {
    id: 3,
    title: "Grooming",
    description:
      "Gentle brushing, coat care and basic grooming designed around your cat's comfort.",
    icon: FiScissors,
  },
  {
    id: 4,
    title: "Feeding & Medication",
    description:
      "Careful feeding routines and support for owner-provided medication instructions.",
    icon: FiCoffee,
  },
  {
    id: 5,
    title: "Safe Supervision",
    description:
      "Thoughtful monitoring, clean spaces and routines designed to keep every stay secure.",
    icon: FiShield,
  },
  {
    id: 6,
    title: "Pickup & Drop",
    description:
      "Convenient transport options to make check-in and check-out easier for you and your cat.",
    icon: FiTruck,
  },
];

const ServicesSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#211e1a] py-24 text-white sm:py-28 lg:py-36">
      {/* decorative background */}

      <div className="pointer-events-none absolute right-[-140px] top-[-100px] h-[420px] w-[420px] rounded-full border border-white/[0.04]" />

      <div className="pointer-events-none absolute right-[-40px] top-[10px] h-[220px] w-[220px] rounded-full border border-white/[0.04]" />

      <div className="pointer-events-none absolute bottom-[-140px] left-[-100px] h-[360px] w-[360px] rounded-full border border-white/[0.035]" />

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
              <span className="h-[1px] w-10 bg-[#c9ae8a]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#c9ae8a] sm:text-[11px]">
                Our Services
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
              className="max-w-[850px] text-[clamp(2.8rem,6vw,6.5rem)] font-medium leading-[0.93] tracking-[-0.055em]"
            >
              Everything your cat needs,{" "}
              <span className="font-serif italic font-normal text-[#cbb598]">
                thoughtfully cared for.
              </span>
            </motion.h2>
          </div>

          <motion.div
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
            className="lg:pb-2"
          >
            <p className="max-w-[520px] text-[14px] leading-7 text-white/55 sm:text-[15px] sm:leading-8">
              From peaceful boarding to daily care and individual attention,
              every service is designed around your cat's comfort, routine and
              personality.
            </p>

            <Link
              to="/services"
              className="group mt-7 inline-flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-white"
            >
              Explore all services
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#211e1a]">
                <FiArrowUpRight />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* ================= FEATURED SERVICE ================= */}

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
          className="group relative mt-16 overflow-hidden rounded-[32px] sm:mt-20 lg:mt-24"
        >
          <div className="relative h-[520px] sm:h-[600px] lg:h-[660px]">
            <motion.img
              whileHover={
                reduceMotion
                  ? {}
                  : {
                      scale: 1.035,
                    }
              }
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              src="images/image5.avif"
              alt="Cat enjoying a comfortable stay"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

            {/* featured content */}

            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-12">
              <div className="max-w-[680px]">
                <div className="mb-5 flex items-center gap-3">
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur-md">
                    Featured Service
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                    01
                  </span>
                </div>

                <h3 className="text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.05em]">
                  Premium Cat Boarding
                </h3>

                <p className="mt-5 max-w-[550px] text-[14px] leading-7 text-white/65 sm:text-[15px]">
                  A peaceful stay with comfortable private spaces, daily
                  feeding, playtime, rest and personal attention throughout the
                  day.
                </p>

                <Link
                  to="/rooms"
                  className="group/button mt-7 inline-flex items-center gap-5 rounded-full bg-[#f2e8da] py-2 pl-6 pr-2 text-[12px] font-semibold text-[#29251f]"
                >
                  Explore boarding
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#29251f] text-white transition-transform duration-300 group-hover/button:rotate-45">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>

            {/* top right icon */}

            <div className="absolute right-6 top-6 hidden h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-black/10 text-white backdrop-blur-md sm:flex">
              <FiHome size={20} />
            </div>
          </div>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(1).map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
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
                  amount: 0.25,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        y: -6,
                      }
                }
                className="group relative min-h-[280px] overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.04] p-6 transition-colors duration-500 hover:bg-white/[0.07] sm:p-7"
              >
                {/* number */}

                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c9ae8a] text-[#211e1a] transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105">
                    <Icon size={18} />
                  </div>

                  <span className="text-[10px] tracking-[0.2em] text-white/25">
                    0{index + 2}
                  </span>
                </div>

                <div className="mt-12">
                  <h3 className="text-[23px] font-medium tracking-[-0.03em]">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-[340px] text-[13px] leading-6 text-white/50">
                    {service.description}
                  </p>
                </div>

                {/* hover arrow */}

                <div className="absolute bottom-6 right-6 flex h-9 w-9 translate-y-3 items-center justify-center rounded-full border border-white/15 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <FiArrowUpRight />
                </div>

                {/* glow */}

                <div className="pointer-events-none absolute -bottom-20 -right-20 h-[180px] w-[180px] rounded-full bg-[#b99b77]/0 blur-3xl transition-all duration-700 group-hover:bg-[#b99b77]/10" />
              </motion.div>
            );
          })}

          {/* ================= LAST CTA CARD ================= */}

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
              amount: 0.25,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: 0.3,
            }}
            className="relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[26px] bg-[#c9ae8a] p-6 text-[#29251f] sm:p-7"
          >
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] opacity-60">
                Need something special?
              </p>

              <h3 className="mt-5 max-w-[300px] text-[27px] font-medium leading-[1.02] tracking-[-0.04em]">
                Tell us about your cat's routine.
              </h3>

              <p className="mt-4 max-w-[320px] text-[12px] leading-6 opacity-65">
                Every cat is different. Share feeding habits, personality,
                medication or special care requirements with us.
              </p>
            </div>

            <Link
              to="/contact"
              className="group mt-8 flex items-center justify-between border-t border-[#29251f]/15 pt-5"
            >
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em]">
                Talk to us
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#29251f] text-white transition-transform duration-300 group-hover:rotate-45">
                <FiArrowUpRight />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
