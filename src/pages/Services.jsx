import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCheck,
  FiCoffee,
  FiHeart,
  FiHome,
  FiMessageCircle,
  FiScissors,
  FiShield,
  FiTruck,
  FiZap,
} from "react-icons/fi";

import PageTransition from "../components/PageTransition";

const services = [
  {
    number: "01",
    title: "Cat Boarding",
    subtitle: "Comfortable overnight stays",
    description:
      "A peaceful private stay designed around your cat's normal routine, personality and need for quiet personal space.",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1600&q=90",
    icon: FiHome,
    features: [
      "Private resting space",
      "Daily feeding routine",
      "Fresh drinking water",
      "Individual attention",
      "Play & enrichment",
      "Daily room cleaning",
    ],
  },
  {
    number: "02",
    title: "Cat Day Care",
    subtitle: "Care while you're away for the day",
    description:
      "Perfect for busy days, appointments or short absences when you want your cat somewhere calm, supervised and comfortable.",
    image:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1600&q=90",
    icon: FiHeart,
    features: [
      "Supervised daytime stay",
      "Feeding if required",
      "Quiet resting periods",
      "Interactive play",
      "Personal attention",
      "Comfortable private space",
    ],
  },
  {
    number: "03",
    title: "Grooming Care",
    subtitle: "Gentle everyday grooming",
    description:
      "Simple coat care and brushing sessions performed gently and according to your cat's comfort level and temperament.",
    image:
      "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&w=1600&q=90",
    icon: FiScissors,
    features: [
      "Gentle brushing",
      "Basic coat maintenance",
      "Comfort-focused handling",
      "Visual coat check",
      "Short sessions",
      "Owner instructions followed",
    ],
  },
  {
    number: "04",
    title: "Feeding & Medication",
    subtitle: "Keeping familiar routines",
    description:
      "We can follow owner-provided feeding schedules and discuss suitable medication support before your cat's stay.",
    image:
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=1600&q=90",
    icon: FiCoffee,
    features: [
      "Owner-provided diet",
      "Portion instructions",
      "Scheduled feeding",
      "Dietary notes",
      "Medication discussion",
      "Routine tracking",
    ],
  },
];

const extras = [
  {
    icon: FiZap,
    title: "Extra Play Session",
    text: "Additional one-to-one enrichment and interactive play for active cats.",
  },
  {
    icon: FiHeart,
    title: "Extra Attention",
    text: "Additional calm interaction for cats who enjoy more human companionship.",
  },
  {
    icon: FiMessageCircle,
    title: "Photo Updates",
    text: "Optional updates during longer stays so you can see how your cat is settling.",
  },
  {
    icon: FiTruck,
    title: "Pickup & Drop",
    text: "Transport options may be available depending on your location and schedule.",
  },
];

const included = [
  "Comfortable private accommodation",
  "Fresh drinking water",
  "Routine-based feeding",
  "Daily room cleaning",
  "Observation throughout the stay",
  "Individual attention",
  "Rest and quiet time",
  "Basic enrichment",
];

const Services = () => {
  const reduceMotion = useReducedMotion();

  return (
    <PageTransition>
      <main className="overflow-hidden bg-[#f8f4ec]">
        {/* ================= HERO ================= */}

        <section className="relative min-h-[90vh] py-4 overflow-hidden bg-[#1d1a17]">
          <motion.img
            initial={{
              scale: reduceMotion ? 1 : 1.08,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: reduceMotion ? 0 : 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=2200&q=90"
            alt="Cat receiving comfortable care"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

          <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-[1500px] items-end px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:items-center lg:px-12 lg:pb-0 xl:px-16">
            <div className="max-w-[1000px]">
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
                  duration: reduceMotion ? 0 : 0.7,
                }}
                className="mb-6 flex items-center gap-4"
              >
                <span className="h-px w-10 bg-[#d2b99a]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#d2b99a]">
                  Our Services
                </span>
              </motion.div>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.9,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-[1000px] text-[clamp(3.4rem,9vw,8.5rem)] font-medium leading-[0.86] tracking-[-0.065em] text-white"
              >
                Thoughtful care for every{" "}
                <span className="font-serif italic font-normal text-[#d8c5ab]">
                  kind of cat.
                </span>
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.75,
                  delay: 0.2,
                }}
                className="mt-7 max-w-[650px] text-[14px] leading-7 text-white/65 sm:text-[16px] sm:leading-8"
              >
                Boarding, day care, feeding support, grooming and personal
                attention — all designed around comfort, routine and a calm
                environment.
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
                  duration: reduceMotion ? 0 : 0.7,
                  delay: 0.3,
                }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  to="/booking"
                  className="group inline-flex items-center gap-5 rounded-full bg-[#f2e8da] py-2 pl-6 pr-2 text-[12px] font-semibold text-[#29251f]"
                >
                  Book a stay
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#29251f] text-white transition-transform duration-300 group-hover:rotate-45">
                    <FiArrowUpRight />
                  </span>
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex h-[59px] items-center rounded-full border border-white/20 bg-white/10 px-6 text-[12px] font-semibold text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#29251f]"
                >
                  Ask about care
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}

        <section className="py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#8c765a]">
                  Personalised care
                </p>

                <h2 className="mt-5 max-w-[900px] text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.94] tracking-[-0.055em] text-[#29251f]">
                  No two cats need exactly the{" "}
                  <span className="font-serif italic font-normal text-[#9c8061]">
                    same experience.
                  </span>
                </h2>
              </div>

              <p className="max-w-[520px] text-[14px] leading-8 text-[#70675f] sm:text-[15px]">
                Some cats want attention. Others prefer a quiet corner and time
                to observe. We adapt our care around personality, routine and
                the information you share before their stay.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SERVICE SECTIONS ================= */}

        <section className="pb-24 sm:pb-28 lg:pb-36">
          <div className="mx-auto max-w-[1500px] space-y-6 px-5 sm:px-8 lg:px-12 xl:px-16">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.85,
                    delay: reduceMotion ? 0 : index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden rounded-[32px] border border-[#29251f]/[0.06] bg-[#eee5d9]"
                >
                  <div
                    className={`grid lg:grid-cols-2 ${
                      index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    {/* IMAGE */}

                    <div className="relative min-h-[420px] overflow-hidden sm:min-h-[520px] lg:min-h-[650px]">
                      <motion.img
                        whileHover={
                          reduceMotion
                            ? {}
                            : {
                                scale: 1.045,
                              }
                        }
                        transition={{
                          duration: 1.2,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                      <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/15 text-white backdrop-blur-md">
                        <Icon size={17} />
                      </div>

                      <div className="absolute bottom-6 left-6">
                        <p className="text-[9px] uppercase tracking-[0.24em] text-white/55">
                          Service
                        </p>

                        <p className="mt-1 text-[15px] font-medium text-white">
                          {service.number}
                        </p>
                      </div>
                    </div>

                    {/* CONTENT */}

                    <div className="flex min-h-[600px] flex-col justify-between p-7 sm:p-9 lg:min-h-[650px] lg:p-12 xl:p-14">
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.27em] text-[#948474]">
                          {service.subtitle}
                        </p>

                        <h2 className="mt-6 text-[clamp(2.7rem,5vw,5.4rem)] font-medium leading-[0.94] tracking-[-0.05em] text-[#29251f]">
                          {service.title}
                        </h2>

                        <p className="mt-6 max-w-[560px] text-[14px] leading-8 text-[#70675f]">
                          {service.description}
                        </p>

                        <div className="mt-9 grid gap-3 sm:grid-cols-2">
                          {service.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-3"
                            >
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ddcfbd] text-[#80694f]">
                                <FiCheck size={12} />
                              </span>

                              <span className="text-[12px] text-[#514b45]">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-10 border-t border-[#29251f]/10 pt-7">
                        <Link
                          to="/booking"
                          className="group inline-flex items-center gap-5 rounded-full bg-[#29251f] py-2 pl-6 pr-2 text-[12px] font-semibold text-white"
                        >
                          Ask about this service
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2e8da] text-[#29251f] transition-transform duration-300 group-hover:rotate-45">
                            <FiArrowUpRight />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ================= WHAT'S INCLUDED ================= */}

        <section className="bg-[#211e1a] py-24 text-white sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9ae8a]">
                  Included with care
                </p>

                <h2 className="mt-5 max-w-[700px] text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.94] tracking-[-0.055em]">
                  The essentials are never{" "}
                  <span className="font-serif italic font-normal text-[#cbb598]">
                    optional.
                  </span>
                </h2>

                <p className="mt-7 max-w-[550px] text-[14px] leading-8 text-white/50">
                  Every stay starts with the same foundation: cleanliness,
                  comfort, observation, routine and patient individual care.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {included.map((item, index) => (
                  <motion.div
                    key={item}
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
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.55,
                      delay: reduceMotion ? 0 : index * 0.05,
                    }}
                    className="flex min-h-[100px] items-center gap-4 rounded-[22px] border border-white/[0.08] bg-white/[0.04] p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c9ae8a] text-[#211e1a]">
                      <FiCheck size={13} />
                    </span>

                    <span className="text-[13px] text-white/70">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= OPTIONAL EXTRAS ================= */}

        <section className="bg-[#f8f4ec] py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8c765a]">
                Optional extras
              </p>

              <h2 className="mt-5 max-w-[850px] text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.94] tracking-[-0.055em] text-[#29251f]">
                Add a little more to their{" "}
                <span className="font-serif italic font-normal text-[#9c8061]">
                  stay.
                </span>
              </h2>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
              {extras.map((extra, index) => {
                const Icon = extra.icon;

                return (
                  <motion.article
                    key={extra.title}
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
                      amount: 0.3,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.7,
                      delay: reduceMotion ? 0 : index * 0.06,
                    }}
                    whileHover={
                      reduceMotion
                        ? {}
                        : {
                            y: -6,
                          }
                    }
                    className="min-h-[310px] rounded-[26px] border border-[#29251f]/[0.06] bg-[#eee5d9] p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#29251f] text-white">
                      <Icon size={16} />
                    </div>

                    <h3 className="mt-12 text-[24px] font-medium tracking-[-0.035em] text-[#29251f]">
                      {extra.title}
                    </h3>

                    <p className="mt-4 text-[13px] leading-7 text-[#746b62]">
                      {extra.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= MEDICATION NOTE ================= */}

        <section className="bg-[#eee5d9] py-24 sm:py-28">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid overflow-hidden rounded-[32px] bg-[#29251f] text-white lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-7 sm:p-10 lg:p-14">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c9ae8a] text-[#29251f]">
                  <FiShield size={18} />
                </div>

                <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#c9ae8a]">
                  Medication & special needs
                </p>

                <h2 className="mt-4 max-w-[700px] text-[clamp(2.4rem,5vw,5rem)] font-medium leading-[0.96] tracking-[-0.05em]">
                  Tell us everything we should know{" "}
                  <span className="font-serif italic font-normal text-[#d0baa0]">
                    before check-in.
                  </span>
                </h2>

                <p className="mt-6 max-w-[650px] text-[13px] leading-7 text-white/55 sm:text-[14px]">
                  If your cat needs medication, a special diet or additional
                  care, discuss it with us before confirming the stay. We need
                  clear instructions so we can determine whether we can safely
                  support their requirements.
                </p>

                <Link
                  to="/contact"
                  className="group mt-8 inline-flex items-center gap-5 rounded-full bg-[#f2e8da] py-2 pl-6 pr-2 text-[12px] font-semibold text-[#29251f]"
                >
                  Discuss special care
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#29251f] text-white transition-transform duration-300 group-hover:rotate-45">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>

              <div className="relative min-h-[360px] lg:min-h-full">
                <img
                  src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1400&q=90"
                  alt="Cat resting peacefully"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#29251f]/50 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= TRANSPORT ================= */}

        <section className="bg-[#f8f4ec] py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="relative h-[500px] overflow-hidden rounded-[30px] sm:h-[620px]">
                <img
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1400&q=90"
                  alt="Cat ready for travel"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-white/20 bg-black/15 px-4 py-3 text-white backdrop-blur-md">
                  <FiTruck />
                  <span className="text-[10px] uppercase tracking-[0.2em]">
                    Pickup & Drop
                  </span>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8c765a]">
                  Easier arrivals
                </p>

                <h2 className="mt-5 text-[clamp(2.8rem,5.5vw,5.8rem)] font-medium leading-[0.95] tracking-[-0.055em] text-[#29251f]">
                  Need help getting your cat{" "}
                  <span className="font-serif italic font-normal text-[#9c8061]">
                    here?
                  </span>
                </h2>

                <p className="mt-7 max-w-[580px] text-[14px] leading-8 text-[#70675f]">
                  Pickup and drop services may be arranged depending on
                  location, availability and your cat's travel requirements.
                  Contact us before booking so we can confirm the details.
                </p>

                <Link
                  to="/contact"
                  className="group mt-8 inline-flex items-center gap-5 rounded-full bg-[#29251f] py-2 pl-6 pr-2 text-[12px] font-semibold text-white"
                >
                  Ask about transport
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2e8da] text-[#29251f] transition-transform duration-300 group-hover:rotate-45">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}

        <section className="bg-[#f8f4ec] pb-24 sm:pb-28 lg:pb-36">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="relative overflow-hidden rounded-[34px] bg-[#29251f] p-7 text-white sm:p-10 lg:p-14">
              <div className="absolute -right-28 -top-28 h-[340px] w-[340px] rounded-full border border-white/[0.05]" />

              <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#c9ae8a]">
                    Not sure what your cat needs?
                  </p>

                  <h2 className="mt-4 max-w-[900px] text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.05em]">
                    Tell us about them. We'll help you plan their{" "}
                    <span className="font-serif italic font-normal text-[#d0baa0]">
                      stay.
                    </span>
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/booking"
                    className="group inline-flex items-center gap-5 rounded-full bg-[#f1e8dc] py-2 pl-6 pr-2 text-[12px] font-semibold text-[#29251f]"
                  >
                    Start booking
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#29251f] text-white transition-transform duration-300 group-hover:rotate-45">
                      <FiArrowUpRight />
                    </span>
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex h-[59px] items-center rounded-full border border-white/15 px-6 text-[12px] font-semibold text-white transition-colors hover:bg-white hover:text-[#29251f]"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Services;
