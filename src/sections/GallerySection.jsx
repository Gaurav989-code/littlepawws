import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiMaximize2, FiX } from "react-icons/fi";

const galleryImages = [
  {
    id: 1,
    title: "Peaceful Rest",
    category: "Comfort",
    image:
      "images/image3.avif",
    className: "sm:col-span-2 lg:col-span-5 lg:row-span-2",
  },
  {
    id: 2,
    title: "Curious Moments",
    category: "Play",
    image:
      "images/image4.avif",
    className: "lg:col-span-3",
  },
  {
    id: 3,
    title: "Quiet Corners",
    category: "Relax",
    image:
      "images/image5.avif",
    className: "lg:col-span-4",
  },
  {
    id: 4,
    title: "Individual Attention",
    category: "Care",
    image:
      "images/image8.avif",
    className: "lg:col-span-4",
  },
  {
    id: 5,
    title: "Time to Explore",
    category: "Enrichment",
    image:
      "images/image7.avif",
    className: "lg:col-span-3",
  },
  {
    id: 6,
    title: "Cozy Evenings",
    category: "Stay",
    image:
      "images/image9.avif",
    className: "sm:col-span-2 lg:col-span-5",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const reduceMotion = useReducedMotion();

  return (
    <>
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
                <span className="h-px w-10 bg-[#8c765a]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#8c765a] sm:text-[11px]">
                  Inside Cat Care House
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
                Little moments of{" "}
                <span className="font-serif italic font-normal text-[#9c8061]">
                  comfort & curiosity.
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
                From quiet naps to playful discoveries, every stay has its own
                small moments. Our spaces are designed to let cats relax,
                explore and simply be themselves.
              </p>

              <Link
                to="/gallery"
                className="group mt-7 inline-flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#29251f]"
              >
                View full gallery
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#29251f]/15 transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#29251f] group-hover:text-white">
                  <FiArrowUpRight />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* ================= GALLERY GRID ================= */}

          <div className="mt-16 grid auto-rows-[260px] grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 sm:auto-rows-[300px] lg:mt-24 lg:grid-cols-12 lg:auto-rows-[280px]">
            {galleryImages.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setSelectedImage(item)}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.75,
                  delay: reduceMotion ? 0 : index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden rounded-[26px] text-left ${item.className}`}
              >
                <motion.img
                  whileHover={
                    reduceMotion
                      ? {}
                      : {
                          scale: 1.055,
                        }
                  }
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                {/* top category */}

                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                  {item.category}
                </div>

                {/* expand icon */}

                <div className="absolute right-5 top-5 flex h-10 w-10 scale-90 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <FiMaximize2 size={15} />
                </div>

                {/* bottom text */}

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/55">
                        Cat Care House
                      </p>

                      <h3 className="mt-2 text-[21px] font-medium tracking-[-0.03em] text-white sm:text-[24px]">
                        {item.title}
                      </h3>
                    </div>

                    <span className="hidden text-[10px] uppercase tracking-[0.2em] text-white/40 sm:block">
                      0{item.id}
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* ================= GALLERY FOOTNOTE ================= */}

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
            className="mt-10 flex flex-col gap-4 border-t border-[#29251f]/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="max-w-[560px] text-[12px] leading-6 text-[#81776d]">
              Real comfort is found in the small things — a quiet corner, a
              familiar routine and enough space to feel completely at ease.
            </p>

            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#9b8e80]">
              Safe • Calm • Comfortable
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= FULLSCREEN LIGHTBOX ================= */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#171512]/95 p-4 backdrop-blur-xl sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* close */}

            <motion.button
              type="button"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
              className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md sm:right-8 sm:top-8"
            >
              <FiX size={20} />
            </motion.button>

            {/* image container */}

            <motion.div
              initial={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.96,
                y: reduceMotion ? 0 : 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.97,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-[1200px] overflow-hidden rounded-[28px]"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[82vh] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#d2b99a]">
                  {selectedImage.category}
                </p>

                <h3 className="mt-3 text-[28px] font-medium tracking-[-0.04em] text-white sm:text-[40px]">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
