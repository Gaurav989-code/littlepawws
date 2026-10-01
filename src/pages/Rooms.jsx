import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCheck,
  FiHeart,
  FiHome,
  FiMoon,
  FiShield,
  FiSun,
} from "react-icons/fi";

import PageTransition from "../components/PageTransition";

const rooms = [
  {
    id: 1,
    number: "01",
    name: "Cozy Room",
    subtitle: "Quiet & Comfortable",
    price: "₹199",
    unit: "/ night",
    image:
      "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1800&q=90",
    description:
      "A peaceful private space designed for cats who enjoy calm surroundings, comfortable bedding and a familiar routine.",
    bestFor: "Shy cats & shorter stays",
    features: [
      "Private resting area",
      "Fresh bedding",
      "Fresh drinking water",
      "Scheduled feeding",
      "Daily room cleaning",
      "Personal attention",
    ],
  },
  {
    id: 2,
    number: "02",
    name: "Deluxe Room",
    subtitle: "More Space to Explore",
    price: "₹299",
    unit: "/ night",
    image:
      "https://images.unsplash.com/photo-1491485880348-85d48a9e5312?auto=format&fit=crop&w=1800&q=90",
    description:
      "A more spacious environment with room to stretch, rest and explore while still keeping the stay quiet and private.",
    bestFor: "Active cats & longer stays",
    features: [
      "Larger private space",
      "Climbing enrichment",
      "Comfortable sleep area",
      "Daily play session",
      "Feeding routine",
      "Extra personal attention",
    ],
  },
  {
    id: 3,
    number: "03",
    name: "Luxury Suite",
    subtitle: "Our Most Premium Stay",
    price: "₹499",
    unit: "/ night",
    image:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&w=1800&q=90",
    description:
      "Our most spacious option with premium comfort, additional enrichment and more individual interaction during the day.",
    bestFor: "Premium & extended stays",
    features: [
      "Large private suite",
      "Multiple resting zones",
      "Climbing & enrichment",
      "Extra play sessions",
      "Priority photo updates",
      "Enhanced daily attention",
    ],
  },
];

const comparison = [
  {
    feature: "Private Room",
    cozy: true,
    deluxe: true,
    suite: true,
  },
  {
    feature: "Daily Feeding",
    cozy: true,
    deluxe: true,
    suite: true,
  },
  {
    feature: "Fresh Bedding",
    cozy: true,
    deluxe: true,
    suite: true,
  },
  {
    feature: "Climbing Area",
    cozy: false,
    deluxe: true,
    suite: true,
  },
  {
    feature: "Extra Playtime",
    cozy: false,
    deluxe: true,
    suite: true,
  },
  {
    feature: "Priority Updates",
    cozy: false,
    deluxe: false,
    suite: true,
  },
];

const Rooms = () => {
  const reduceMotion = useReducedMotion();

  return (
    <PageTransition>
      <main className="overflow-hidden bg-[#f8f4ec]">
        {/* ================= HERO ================= */}

        <section className="relative min-h-[88vh] py-2 overflow-hidden bg-[#1d1a17]">
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
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=2200&q=90"
            alt="Comfortable cat boarding room"
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
                  Rooms & Suites
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
                className="max-w-[1020px] text-[clamp(3.4rem,9vw,8.5rem)] font-medium leading-[0.86] tracking-[-0.065em] text-white"
              >
                Their own space to{" "}
                <span className="font-serif italic font-normal text-[#d8c5ab]">
                  settle, sleep & feel safe.
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
                Choose from quiet private rooms to spacious premium suites, each
                designed to give your cat privacy, comfort and a peaceful
                routine.
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
                  Check availability
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#29251f] text-white transition-transform duration-300 group-hover:rotate-45">
                    <FiArrowUpRight />
                  </span>
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex h-[59px] items-center rounded-full border border-white/20 bg-white/10 px-6 text-[12px] font-semibold text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#29251f]"
                >
                  Help me choose
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
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8c765a]">
                  Designed around comfort
                </p>

                <h2 className="mt-5 max-w-[900px] text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.94] tracking-[-0.055em] text-[#29251f]">
                  Private spaces for cats who value{" "}
                  <span className="font-serif italic font-normal text-[#9c8061]">
                    their own territory.
                  </span>
                </h2>
              </div>

              <p className="max-w-[520px] text-[14px] leading-8 text-[#70675f] sm:text-[15px]">
                Cats naturally feel safer when they have a predictable,
                comfortable space of their own. Every room is designed to
                provide rest, privacy and enough enrichment without creating an
                overwhelming environment.
              </p>
            </div>
          </div>
        </section>

        {/* ================= ROOM DETAILS ================= */}

        <section className="pb-24 sm:pb-28 lg:pb-36">
          <div className="mx-auto max-w-[1500px] space-y-6 px-5 sm:px-8 lg:px-12 xl:px-16">
            {rooms.map((room, index) => (
              <motion.article
                key={room.id}
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
                  delay: reduceMotion ? 0 : index * 0.06,
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

                  <div className="relative min-h-[430px] overflow-hidden sm:min-h-[540px] lg:min-h-[700px]">
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
                      src={room.image}
                      alt={room.name}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/15 text-[11px] font-medium text-white backdrop-blur-md">
                      {room.number}
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/55">
                        Best for
                      </p>

                      <p className="mt-2 text-[18px] font-medium tracking-[-0.025em] text-white">
                        {room.bestFor}
                      </p>
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="flex min-h-[650px] flex-col justify-between p-7 sm:p-9 lg:min-h-[700px] lg:p-12 xl:p-14">
                    <div>
                      <div className="flex items-center justify-between gap-5">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.27em] text-[#948474]">
                          {room.subtitle}
                        </p>

                        <FiHome className="text-[#8c765a]" />
                      </div>

                      <h2 className="mt-7 text-[clamp(2.7rem,5vw,5.6rem)] font-medium leading-[0.94] tracking-[-0.05em] text-[#29251f]">
                        {room.name}
                      </h2>

                      <p className="mt-6 max-w-[560px] text-[14px] leading-8 text-[#70675f]">
                        {room.description}
                      </p>

                      {/* FEATURES */}

                      <div className="mt-9 grid gap-3 sm:grid-cols-2">
                        {room.features.map((feature) => (
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

                      {/* DAILY INFO */}

                      <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[#29251f]/10 pt-7">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/50 text-[#8c765a]">
                            <FiSun size={15} />
                          </div>

                          <div>
                            <p className="text-[9px] uppercase tracking-[0.2em] text-[#998c80]">
                              Daytime
                            </p>

                            <p className="mt-1 text-[12px] font-medium text-[#29251f]">
                              Care & play
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/50 text-[#8c765a]">
                            <FiMoon size={15} />
                          </div>

                          <div>
                            <p className="text-[9px] uppercase tracking-[0.2em] text-[#998c80]">
                              Night
                            </p>

                            <p className="mt-1 text-[12px] font-medium text-[#29251f]">
                              Quiet rest
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* PRICE + CTA */}

                    <div className="mt-12 flex flex-col gap-6 border-t border-[#29251f]/10 pt-7 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.22em] text-[#998c80]">
                          Starting from
                        </p>

                        <div className="mt-2 flex items-end gap-2">
                          <span className="text-[38px] font-medium tracking-[-0.045em] text-[#29251f]">
                            {room.price}
                          </span>

                          <span className="pb-1 text-[11px] text-[#81776d]">
                            {room.unit}
                          </span>
                        </div>
                      </div>

                      <Link
                        to="/booking"
                        className="group inline-flex items-center gap-5 self-start rounded-full bg-[#29251f] py-2 pl-6 pr-2 text-[12px] font-semibold text-white sm:self-auto"
                      >
                        Book this room
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2e8da] text-[#29251f] transition-transform duration-300 group-hover:rotate-45">
                          <FiArrowUpRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ================= COMPARISON ================= */}

        <section className="bg-[#211e1a] py-24 text-white sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="max-w-[900px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9ae8a]">
                Compare rooms
              </p>

              <h2 className="mt-5 text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.94] tracking-[-0.055em]">
                Find the stay that fits{" "}
                <span className="font-serif italic font-normal text-[#cbb598]">
                  your cat best.
                </span>
              </h2>
            </div>

            <div className="mt-14 overflow-x-auto lg:mt-20">
              <div className="min-w-[760px] overflow-hidden rounded-[28px] border border-white/10">
                {/* HEADER */}

                <div className="grid grid-cols-4 bg-white/[0.05]">
                  <div className="p-5 text-[10px] uppercase tracking-[0.24em] text-white/40">
                    Feature
                  </div>

                  {rooms.map((room) => (
                    <div key={room.id} className="border-l border-white/10 p-5">
                      <p className="text-[13px] font-medium">{room.name}</p>

                      <p className="mt-1 text-[10px] text-white/40">
                        {room.price}/night
                      </p>
                    </div>
                  ))}
                </div>

                {/* ROWS */}

                {comparison.map((row, index) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-4 ${
                      index !== comparison.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <div className="p-5 text-[12px] text-white/60">
                      {row.feature}
                    </div>

                    {["cozy", "deluxe", "suite"].map((key) => (
                      <div
                        key={key}
                        className="flex items-center border-l border-white/10 p-5"
                      >
                        {row[key] ? (
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c9ae8a] text-[#211e1a]">
                            <FiCheck size={12} />
                          </span>
                        ) : (
                          <span className="text-[11px] text-white/20">—</span>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHAT TO BRING ================= */}

        <section className="bg-[#eee5d9] py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8c765a]">
                  Before check-in
                </p>

                <h2 className="mt-5 text-[clamp(2.8rem,5.5vw,5.8rem)] font-medium leading-[0.95] tracking-[-0.055em] text-[#29251f]">
                  Bring a little bit of{" "}
                  <span className="font-serif italic font-normal text-[#9c8061]">
                    home with them.
                  </span>
                </h2>

                <p className="mt-7 max-w-[580px] text-[14px] leading-8 text-[#70675f]">
                  Familiar smells and routines can help cats settle more
                  comfortably. We’ll explain exactly what is needed when you
                  confirm the booking.
                </p>

                <div className="mt-9 space-y-4">
                  {[
                    "Their normal food and feeding instructions",
                    "Any required medication and clear directions",
                    "A familiar blanket or comfort item",
                    "Emergency contact information",
                    "Vaccination or health records if required",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ddcfbd] text-[#80694f]">
                        <FiCheck size={12} />
                      </span>

                      <span className="text-[13px] leading-6 text-[#514b45]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-[540px] overflow-hidden rounded-[30px] sm:h-[650px]">
                <img
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1500&q=90"
                  alt="Cat ready for a comfortable stay"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/15 bg-black/15 p-5 text-white backdrop-blur-xl sm:max-w-[340px]">
                  <FiHeart className="text-[#d2b99a]" />

                  <p className="mt-4 text-[18px] font-medium tracking-[-0.025em]">
                    Familiar routines make unfamiliar places easier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SAFETY ================= */}

        <section className="bg-[#f8f4ec] py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: FiShield,
                  title: "Safe & monitored",
                  text: "Care routines focused on observation, cleanliness and comfort.",
                },
                {
                  icon: FiHeart,
                  title: "Personal attention",
                  text: "Interaction is adapted to each cat's temperament and confidence.",
                },
                {
                  icon: FiHome,
                  title: "Private spaces",
                  text: "Every room gives cats their own area to settle and relax.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
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
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.65,
                      delay: reduceMotion ? 0 : index * 0.06,
                    }}
                    className="min-h-[260px] rounded-[26px] border border-[#29251f]/[0.06] bg-white/40 p-7"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#29251f] text-white">
                      <Icon size={16} />
                    </div>

                    <h3 className="mt-10 text-[24px] font-medium tracking-[-0.035em] text-[#29251f]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[13px] leading-7 text-[#746b62]">
                      {item.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}

        <section className="bg-[#f8f4ec] pb-24 sm:pb-28 lg:pb-36">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="relative overflow-hidden rounded-[34px] bg-[#29251f] p-7 text-white sm:p-10 lg:p-14">
              <div className="absolute -right-24 -top-24 h-[340px] w-[340px] rounded-full border border-white/[0.05]" />

              <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#c9ae8a]">
                    Ready to choose?
                  </p>

                  <h2 className="mt-4 max-w-[900px] text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.05em]">
                    Find a room where your cat can feel{" "}
                    <span className="font-serif italic font-normal text-[#d0baa0]">
                      completely at ease.
                    </span>
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/booking"
                    className="group inline-flex items-center gap-5 rounded-full bg-[#f1e8dc] py-2 pl-6 pr-2 text-[12px] font-semibold text-[#29251f]"
                  >
                    Check availability
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#29251f] text-white transition-transform duration-300 group-hover:rotate-45">
                      <FiArrowUpRight />
                    </span>
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex h-[59px] items-center rounded-full border border-white/15 px-6 text-[12px] font-semibold text-white transition-colors hover:bg-white hover:text-[#29251f]"
                  >
                    Help me choose
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

export default Rooms;
