import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheck, FiHome, FiMoon, FiSun } from "react-icons/fi";

const rooms = [
  {
    id: 1,
    name: "Cozy Room",
    subtitle: "Quiet & Comfortable",
    image: "/images/image6.avif",
    description:
      "A peaceful private room designed for cats who love quiet spaces, cozy bedding and a familiar routine.",
    features: [
      "Private sleeping area",
      "Fresh bedding",
      "Daily feeding",
      "Play & attention",
    ],
  },
  {
    id: 2,
    name: "Deluxe Room",
    subtitle: "More Space, More Comfort",
    image: "/images/image7.avif",
    description:
      "Extra room to relax, stretch and explore with enrichment, comfortable resting spaces and individual care.",
    features: [
      "Spacious private room",
      "Enrichment toys",
      "Daily play sessions",
      "Personal care routine",
    ],
  },
  {
    id: 3,
    name: "Luxury Suite",
    subtitle: "Our Premium Stay",
    image: "/images/image8.avif",
    description:
      "Our most spacious stay with premium comfort, extra enrichment and more one-to-one attention throughout the day.",
    features: [
      "Premium private suite",
      "Climbing & resting zones",
      "Extra playtime",
      "Priority updates",
    ],
  },
];

const RoomsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#f8f4ec] py-24 sm:py-28 lg:py-36">
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
                Our Rooms
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
              className="max-w-[900px] text-[clamp(2.8rem,6vw,6.5rem)] font-medium leading-[0.93] tracking-[-0.055em] text-[#29251f]"
            >
              Comfortable spaces made for{" "}
              <span className="font-serif italic font-normal text-[#9c8061]">
                peaceful stays.
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
            <p className="max-w-[520px] text-[14px] leading-7 text-[#71685f] sm:text-[15px] sm:leading-8">
              Every room is designed around your cat's need for comfort,
              privacy, safety and calm. Choose the stay that best suits their
              personality.
            </p>

            <Link
              to="/rooms"
              className="group mt-7 inline-flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#29251f]"
            >
              View all rooms
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#29251f]/15 transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#29251f] group-hover:text-white">
                <FiArrowUpRight />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* ================= ROOMS ================= */}

        <div className="mt-16 space-y-6 sm:mt-20 lg:mt-24">
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
                delay: reduceMotion ? 0 : index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group overflow-hidden rounded-[30px] border border-[#29251f]/[0.06] bg-[#f1e9dd]"
            >
              <div
                className={`grid lg:grid-cols-2 ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* ================= IMAGE ================= */}

                <div className="relative min-h-[400px] overflow-hidden sm:min-h-[500px] lg:min-h-[620px]">
                  <motion.img
                    whileHover={
                      reduceMotion
                        ? {}
                        : {
                            scale: 1.04,
                          }
                    }
                    transition={{
                      duration: 1.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    src={room.image}
                    alt={`${room.name} at Little Paws`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  {/* ROOM NUMBER */}

                  <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/15 text-[11px] font-medium text-white backdrop-blur-md">
                    0{room.id}
                  </div>

                  {/* IMAGE BRAND TAG */}

                  <div className="absolute bottom-6 left-6 rounded-full border border-white/15 bg-black/15 px-4 py-2 text-[9px] font-medium uppercase tracking-[0.22em] text-white backdrop-blur-md">
                    Little Paws
                  </div>
                </div>

                {/* ================= CONTENT ================= */}

                <div className="flex min-h-[500px] flex-col justify-between p-6 sm:p-8 lg:min-h-[620px] lg:p-12 xl:p-14">
                  <div>
                    {/* SUBTITLE */}

                    <div className="flex items-center justify-between gap-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9c8d7d]">
                        {room.subtitle}
                      </p>

                      <FiHome className="text-[#8c765a]" />
                    </div>

                    {/* TITLE */}

                    <h3 className="mt-7 text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#29251f]">
                      {room.name}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="mt-6 max-w-[520px] text-[14px] leading-7 text-[#72685f] sm:text-[15px] sm:leading-8">
                      {room.description}
                    </p>

                    {/* FEATURES */}

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {room.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 text-[12px] text-[#514b45] sm:text-[13px]"
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e6dac9] text-[#846f56]">
                            <FiCheck size={12} />
                          </span>

                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* TIME INFO */}

                    <div className="mt-8 grid grid-cols-2 gap-3 border-t border-[#29251f]/10 pt-7">
                      <div className="flex items-center gap-3">
                        <FiSun className="shrink-0 text-[#9c8061]" />

                        <div>
                          <p className="text-[9px] uppercase tracking-[0.2em] text-[#9b8f84]">
                            Check-in
                          </p>

                          <p className="mt-1 text-[12px] font-medium text-[#29251f]">
                            Morning
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <FiMoon className="shrink-0 text-[#9c8061]" />

                        <div>
                          <p className="text-[9px] uppercase tracking-[0.2em] text-[#9b8f84]">
                            Stay
                          </p>

                          <p className="mt-1 text-[12px] font-medium text-[#29251f]">
                            Peaceful nights
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ================= BOTTOM ================= */}

                  <div className="mt-10 flex flex-col gap-5 border-t border-[#29251f]/10 pt-7 sm:flex-row sm:items-center sm:justify-end">
                    <Link
                      to="/booking"
                      className="group/button inline-flex items-center justify-center gap-5 rounded-full bg-[#29251f] py-2 pl-6 pr-2 text-[12px] font-semibold text-white"
                    >
                      Book this room
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3eadf] text-[#29251f] transition-transform duration-300 group-hover/button:rotate-45">
                        <FiArrowUpRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}

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
            duration: reduceMotion ? 0 : 0.7,
          }}
          className="mt-14 flex flex-col items-start justify-between gap-6 rounded-[28px] bg-[#29251f] p-7 text-white sm:p-9 lg:flex-row lg:items-center"
        >
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#c7ae8d]">
              Not sure which room?
            </p>

            <h3 className="mt-3 max-w-[660px] text-[24px] font-medium leading-tight tracking-[-0.03em] sm:text-[30px]">
              Tell us about your cat and we'll help you choose a comfortable
              stay.
            </h3>
          </div>

          <Link
            to="/contact"
            className="group flex shrink-0 items-center gap-4 rounded-full bg-[#f3eadf] py-2 pl-5 pr-2 text-[12px] font-semibold text-[#29251f]"
          >
            Talk to us
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#29251f] text-white transition-transform duration-300 group-hover:rotate-45">
              <FiArrowUpRight />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsSection;
