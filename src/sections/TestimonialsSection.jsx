import { motion, useReducedMotion } from "motion/react";
import { FiHeart, FiStar } from "react-icons/fi";

const reviews = [
  {
    id: 1,
    owner: "Aarav Mehta",
    cat: "Milo",
    location: "Nashik",
    quote:
      "Milo usually takes time to adjust anywhere new, but he looked calm and comfortable from the very first day. The updates gave us complete peace of mind.",
    image:
      "images/image11.avif",
  },
  {
    id: 2,
    owner: "Riya Sharma",
    cat: "Luna",
    location: "Pune",
    quote:
      "The space feels peaceful, clean and genuinely designed for cats. Luna came home relaxed, which said everything we needed to know.",
    image:
      "images/image10.avif",
  },
  {
    id: 3,
    owner: "Neha Patil",
    cat: "Simba",
    location: "Mumbai",
    quote:
      "They followed Simba's feeding routine perfectly and gave him plenty of attention. It felt far more personal than a regular boarding facility.",
    image:
      "images/image8.avif",
  },
  {
    id: 4,
    owner: "Kunal Joshi",
    cat: "Oreo",
    location: "Ahmednagar",
    quote:
      "Very thoughtful care and a calm setup. We especially appreciated how clearly everything was explained before Oreo's stay.",
    image:
      "images/image9.avif",
  },
];

const TestimonialsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#211e1a] py-24 text-white sm:py-28 lg:py-36">
      {/* decorative background */}

      <div className="pointer-events-none absolute left-[-130px] top-[-80px] h-[420px] w-[420px] rounded-full border border-white/[0.04]" />

      <div className="pointer-events-none absolute bottom-[-170px] right-[-100px] h-[420px] w-[420px] rounded-full border border-white/[0.04]" />

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
              <span className="h-px w-10 bg-[#c9ae8a]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#c9ae8a] sm:text-[11px]">
                Happy Cats. Happy Humans.
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
              className="max-w-[900px] text-[clamp(2.8rem,6vw,6.5rem)] font-medium leading-[0.93] tracking-[-0.055em]"
            >
              Trusted by people who{" "}
              <span className="font-serif italic font-normal text-[#cbb598]">
                love their cats.
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
            className="max-w-[520px] text-[14px] leading-7 text-white/55 sm:text-[15px] sm:leading-8 lg:pb-2"
          >
            Leaving your cat with someone else requires trust. Our goal is to
            make every stay feel calm for your cat and reassuring for you.
          </motion.p>
        </div>

        {/* ================= FEATURED REVIEW ================= */}

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
          className="mt-16 overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.045] sm:mt-20 lg:mt-24"
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* IMAGE */}

            <div className="relative min-h-[420px] overflow-hidden sm:min-h-[520px] lg:min-h-[620px]">
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
                src={reviews[0].image}
                alt={`${reviews[0].cat} the cat`}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/55">
                  Featured guest
                </p>

                <p className="mt-2 text-[26px] font-medium tracking-[-0.035em]">
                  {reviews[0].cat}
                </p>
              </div>
            </div>

            {/* REVIEW */}

            <div className="flex min-h-[520px] flex-col justify-between p-7 sm:p-10 lg:min-h-[620px] lg:p-14 xl:p-16">
              <div>
                {/* stars */}

                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <FiStar
                      key={index}
                      className="fill-[#c9ae8a] text-[#c9ae8a]"
                      size={15}
                    />
                  ))}
                </div>

                <blockquote className="mt-9 max-w-[850px] text-[clamp(2rem,4vw,4.8rem)] font-medium leading-[1.02] tracking-[-0.045em]">
                  “{reviews[0].quote}”
                </blockquote>
              </div>

              <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[14px] font-semibold">
                    {reviews[0].owner}
                  </p>

                  <p className="mt-1 text-[11px] text-white/45">
                    Parent of {reviews[0].cat} • {reviews[0].location}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c9ae8a] text-[#211e1a]">
                    <FiHeart size={17} />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                      Experience
                    </p>

                    <p className="mt-1 text-[12px] font-medium">
                      Calm & cared for
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= SMALL REVIEWS ================= */}

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {reviews.slice(1).map((review, index) => (
            <motion.article
              key={review.id}
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
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : index * 0.07,
              }}
              whileHover={
                reduceMotion
                  ? {}
                  : {
                      y: -6,
                    }
              }
              className="group flex min-h-[390px] flex-col justify-between rounded-[26px] border border-white/[0.08] bg-white/[0.04] p-6 transition-colors duration-500 hover:bg-white/[0.07] sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <FiStar
                        key={starIndex}
                        size={12}
                        className="fill-[#c9ae8a] text-[#c9ae8a]"
                      />
                    ))}
                  </div>

                  <span className="text-[9px] tracking-[0.2em] text-white/25">
                    0{review.id}
                  </span>
                </div>

                <p className="mt-8 text-[18px] leading-8 tracking-[-0.02em] text-white/80 sm:text-[19px]">
                  “{review.quote}”
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <img
                      src={review.image}
                      alt={review.cat}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-[13px] font-semibold">{review.owner}</p>

                    <p className="mt-1 text-[10px] text-white/40">
                      {review.cat} • {review.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= TRUST STRIP ================= */}

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
            duration: reduceMotion ? 0 : 0.7,
          }}
          className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c9ae8a]">
              The goal is simple
            </p>

            <p className="mt-2 text-[14px] text-white/55">
              Your cat feels safe. You feel reassured.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, index) => (
              <FiStar
                key={index}
                size={14}
                className="fill-[#c9ae8a] text-[#c9ae8a]"
              />
            ))}

            <span className="ml-2 text-[11px] text-white/45">
              Loved by cat parents
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
