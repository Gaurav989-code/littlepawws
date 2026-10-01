import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCheck,
  FiHeart,
  FiHome,
  FiShield,
  FiSun,
} from "react-icons/fi";

import PageTransition from "../components/PageTransition";

const values = [
  {
    icon: FiHeart,
    title: "Care with patience",
    text: "We allow every cat to settle at their own pace and never force interaction.",
  },
  {
    icon: FiShield,
    title: "Safety first",
    text: "Clean spaces, thoughtful routines and careful supervision are built into every stay.",
  },
  {
    icon: FiHome,
    title: "Comfort like home",
    text: "Quiet rooms, familiar routines and private resting spaces help cats feel secure.",
  },
];

const standards = [
  "Clean and hygienic living spaces",
  "Private areas for rest and relaxation",
  "Fresh water available throughout the day",
  "Routine-based feeding care",
  "Daily observation and individual attention",
  "Owner-provided medication support where suitable",
  "Enrichment, play and quiet time",
  "Clear communication before every stay",
];

const About = () => {
  const reduceMotion = useReducedMotion();

  return (
    <PageTransition>
      <main className="overflow-hidden bg-[#f8f4ec]">
        {/* ================= HERO ================= */}

        <section className="relative min-h-[92vh] overflow-hidden bg-[#1c1916]">
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
            alt="Cat relaxing comfortably"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

          <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-[1500px] items-end px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:items-center lg:px-12 lg:pb-0 xl:px-16">
            <div className="max-w-[960px]">
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
                  About Cat Care House
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
                className="max-w-[980px] text-[clamp(3.4rem,9vw,8.5rem)] font-medium leading-[0.86] tracking-[-0.065em] text-white"
              >
                Built around the way cats{" "}
                <span className="font-serif italic font-normal text-[#d8c5ab]">
                  actually feel safe.
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
                className="mt-7 max-w-[620px] text-[14px] leading-7 text-white/65 sm:text-[16px] sm:leading-8"
              >
                Cat Care House is designed to give cats a calm, clean and
                comfortable place to stay while giving their families complete
                peace of mind.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ================= STORY ================= */}

        <section className="py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-28">
              {/* IMAGE */}

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
                }}
                className="relative"
              >
                <div className="h-[520px] overflow-hidden rounded-[30px] sm:h-[650px]">
                  <img
                    src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=1400&q=90"
                    alt="Cat enjoying a calm environment"
                    className="h-full w-full object-cover"
                  />
                </div>

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
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    delay: 0.25,
                  }}
                  className="absolute -bottom-10 right-4 hidden max-w-[260px] rounded-[24px] border-[6px] border-[#f8f4ec] bg-[#29251f] p-6 text-white sm:block lg:-right-8"
                >
                  <FiHeart className="text-[#d2b99a]" />

                  <p className="mt-5 text-[18px] font-medium leading-snug tracking-[-0.025em]">
                    Care begins by understanding the cat in front of us.
                  </p>
                </motion.div>
              </motion.div>

              {/* CONTENT */}

              <div className="lg:pt-8">
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
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                  }}
                  className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8c765a]"
                >
                  Our story
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
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.85,
                    delay: 0.08,
                  }}
                  className="mt-5 max-w-[760px] text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.055em] text-[#29251f]"
                >
                  More thoughtful than traditional{" "}
                  <span className="font-serif italic font-normal text-[#9c8061]">
                    boarding.
                  </span>
                </motion.h2>

                <div className="mt-8 max-w-[650px] space-y-5 text-[14px] leading-8 text-[#6f675f] sm:text-[15px]">
                  <p>
                    Cats experience new places differently from dogs. Many
                    prefer quiet observation before exploring. Some seek
                    attention immediately, while others need their own space.
                  </p>

                  <p>
                    That is why our approach is built around patience,
                    predictable routines, privacy and individual care instead of
                    a one-size-fits-all boarding experience.
                  </p>

                  <p>
                    Before each stay, we learn about your cat's personality,
                    feeding routine, sleep habits, comfort items and special
                    requirements so we can keep their experience as familiar as
                    possible.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[#29251f]/10 pt-8 sm:grid-cols-3">
                  {[
                    ["Calm", "Environment"],
                    ["Personal", "Attention"],
                    ["Thoughtful", "Routine"],
                  ].map(([big, small]) => (
                    <div key={big}>
                      <p className="text-[24px] font-medium tracking-[-0.04em] text-[#29251f] sm:text-[30px]">
                        {big}
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#998c80]">
                        {small}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PHILOSOPHY ================= */}

        <section className="bg-[#211e1a] py-24 text-white sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="max-w-[900px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#c9ae8a]">
                Our philosophy
              </p>

              <h2 className="mt-5 text-[clamp(2.8rem,6vw,6.5rem)] font-medium leading-[0.93] tracking-[-0.055em]">
                Good care should feel{" "}
                <span className="font-serif italic font-normal text-[#cbb598]">
                  quiet, patient and personal.
                </span>
              </h2>
            </div>

            <div className="mt-16 grid gap-4 md:grid-cols-3 lg:mt-20">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <motion.article
                    key={value.title}
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
                      delay: reduceMotion ? 0 : index * 0.08,
                    }}
                    whileHover={
                      reduceMotion
                        ? {}
                        : {
                            y: -6,
                          }
                    }
                    className="min-h-[320px] rounded-[28px] border border-white/[0.08] bg-white/[0.04] p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c9ae8a] text-[#211e1a]">
                      <Icon size={18} />
                    </div>

                    <h3 className="mt-12 text-[25px] font-medium tracking-[-0.035em]">
                      {value.title}
                    </h3>

                    <p className="mt-4 text-[13px] leading-7 text-white/50">
                      {value.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= STANDARDS ================= */}

        <section className="bg-[#eee5d9] py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
              {/* CONTENT */}

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8c765a]">
                  Our care standards
                </p>

                <h2 className="mt-5 text-[clamp(2.7rem,5.5vw,5.8rem)] font-medium leading-[0.95] tracking-[-0.055em] text-[#29251f]">
                  Every detail has a{" "}
                  <span className="font-serif italic font-normal text-[#9c8061]">
                    purpose.
                  </span>
                </h2>

                <p className="mt-7 max-w-[580px] text-[14px] leading-8 text-[#6f675f]">
                  Comfort is created through consistency. Our care standards
                  focus on the everyday details that help cats feel settled and
                  owners feel confident.
                </p>

                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  {standards.map((standard) => (
                    <div key={standard} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#dfd1bf] text-[#846d53]">
                        <FiCheck size={12} />
                      </span>

                      <p className="text-[13px] leading-6 text-[#524c46]">
                        {standard}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* IMAGES */}

              <div className="grid grid-cols-2 gap-4">
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
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.8,
                  }}
                  className="mt-16 h-[430px] overflow-hidden rounded-[28px] sm:h-[520px]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=1000&q=90"
                    alt="Comfortable cat"
                    className="h-full w-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.8,
                    delay: 0.1,
                  }}
                  className="h-[430px] overflow-hidden rounded-[28px] sm:h-[520px]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?auto=format&fit=crop&w=1000&q=90"
                    alt="Cat receiving care"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= DAILY CARE STRIP ================= */}

        <section className="bg-[#f8f4ec] py-20 sm:py-24">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: FiSun,
                  title: "Routine",
                  text: "Familiar feeding and rest patterns.",
                },
                {
                  icon: FiHeart,
                  title: "Attention",
                  text: "Individual interaction based on personality.",
                },
                {
                  icon: FiShield,
                  title: "Reassurance",
                  text: "Clear care expectations before every stay.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[26px] border border-[#29251f]/[0.06] bg-white/40 p-6"
                  >
                    <Icon className="text-[#8c765a]" />

                    <h3 className="mt-5 text-[20px] font-medium tracking-[-0.03em] text-[#29251f]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-6 text-[#756c63]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}

        <section className="bg-[#f8f4ec] pb-24 sm:pb-28 lg:pb-36">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="relative overflow-hidden rounded-[34px] bg-[#29251f] p-7 text-white sm:p-10 lg:p-14">
              <div className="absolute -right-28 -top-28 h-[320px] w-[320px] rounded-full border border-white/[0.05]" />

              <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#c9ae8a]">
                    Meet us before booking
                  </p>

                  <h2 className="mt-4 max-w-[880px] text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.05em]">
                    Tell us what makes your cat feel{" "}
                    <span className="font-serif italic font-normal text-[#d0baa0]">
                      at home.
                    </span>
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/booking"
                    className="group inline-flex items-center gap-5 rounded-full bg-[#f1e8dc] py-2 pl-6 pr-2 text-[12px] font-semibold text-[#29251f]"
                  >
                    Book a stay
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#29251f] text-white transition-transform duration-300 group-hover:rotate-45">
                      <FiArrowUpRight />
                    </span>
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex h-[59px] items-center rounded-full border border-white/15 px-6 text-[12px] font-semibold text-white transition-colors hover:bg-white hover:text-[#29251f]"
                  >
                    Talk to us
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

export default About;
