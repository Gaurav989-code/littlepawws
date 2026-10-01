import { useEffect, useMemo, useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Link } from "react-router-dom";

import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiMaximize2,
  FiX,
} from "react-icons/fi";

import PageTransition from "../components/PageTransition";

const categories = ["All", "Rooms", "Play", "Rest", "Care", "Guests"];

const galleryItems = [
  {
    id: 1,
    title: "Peaceful Afternoon",
    category: "Rest",
    image: "/images/image1.avif",
    size: "large",
  },
  {
    id: 2,
    title: "Curious Guest",
    category: "Guests",
    image: "/images/image2.avif",
    size: "normal",
  },
  {
    id: 3,
    title: "Quiet Corner",
    category: "Rooms",
    image: "/images/image3.avif",
    size: "tall",
  },
  {
    id: 4,
    title: "Time to Explore",
    category: "Play",
    image: "/images/image4.avif",
    size: "normal",
  },
  {
    id: 5,
    title: "Personal Attention",
    category: "Care",
    image: "/images/image5.avif",
    size: "normal",
  },
  {
    id: 6,
    title: "Cozy Evening",
    category: "Rest",
    image: "/images/image6.avif",
    size: "wide",
  },
  {
    id: 7,
    title: "Room to Relax",
    category: "Rooms",
    image: "/images/image7.avif",
    size: "normal",
  },
  {
    id: 8,
    title: "Playful Personality",
    category: "Play",
    image: "/images/image8.avif",
    size: "tall",
  },
  {
    id: 9,
    title: "Slow Mornings",
    category: "Guests",
    image: "/images/image9.avif",
    size: "normal",
  },
  {
    id: 10,
    title: "Comfort First",
    category: "Care",
    image: "/images/image10.avif",
    size: "wide",
  },
  {
    id: 11,
    title: "A Little Hideaway",
    category: "Rooms",
    image: "/images/image11.avif",
    size: "normal",
  },
  {
    id: 12,
    title: "Happy Stay",
    category: "Guests",
    image: "/images/image12.avif",
    size: "normal",
  },
  {
    id: 13,
    title: "Feels Like Home",
    category: "Care",
    image: "/images/image13.avif",
    size: "large",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const [selectedImage, setSelectedImage] = useState(null);

  const reduceMotion = useReducedMotion();

  /* ================= FILTER ================= */

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  /* ================= CURRENT LIGHTBOX INDEX ================= */

  const selectedIndex = selectedImage
    ? filteredImages.findIndex((item) => item.id === selectedImage.id)
    : -1;

  /* ================= PREVIOUS ================= */

  const showPrevious = () => {
    if (selectedIndex === -1 || filteredImages.length === 0) {
      return;
    }

    const nextIndex =
      selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1;

    setSelectedImage(filteredImages[nextIndex]);
  };

  /* ================= NEXT ================= */

  const showNext = () => {
    if (selectedIndex === -1 || filteredImages.length === 0) {
      return;
    }

    const nextIndex =
      selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1;

    setSelectedImage(filteredImages[nextIndex]);
  };

  /* ================= CLOSE WHEN FILTER CHANGES ================= */

  useEffect(() => {
    setSelectedImage(null);
  }, [activeCategory]);

  /* ================= LIGHTBOX BODY LOCK ================= */

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  /* ================= KEYBOARD CONTROLS ================= */

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, selectedIndex, filteredImages]);

  return (
    <PageTransition>
      <main className="overflow-hidden bg-[#f8f4ec]">
        {/* ================= HERO ================= */}

        <section className="relative min-h-[88vh] overflow-hidden bg-[#1d1a17]">
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
            src="/images/image13.avif"
            alt="Little Paws cat boarding gallery"
            fetchPriority="high"
            decoding="async"
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
                  Little Paws • Gallery
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
                Small moments that make a stay{" "}
                <span className="font-serif italic font-normal text-[#d8c5ab]">
                  feel like home.
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
                Explore the spaces, peaceful corners, playful moments and feline
                personalities that make Little Paws feel like a second home.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}

        <section className="py-24 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8c765a]">
                  Inside Little Paws
                </p>

                <h2 className="mt-5 max-w-[850px] text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.94] tracking-[-0.055em] text-[#29251f]">
                  Calm spaces. Curious cats.{" "}
                  <span className="font-serif italic font-normal text-[#9c8061]">
                    Real moments.
                  </span>
                </h2>
              </div>

              <p className="max-w-[520px] text-[14px] leading-8 text-[#70675f] sm:text-[15px]">
                Browse our gallery to see rooms, playtime, quiet rest, personal
                care and some of the wonderful guests enjoying their stay.
              </p>
            </div>

            {/* ================= FILTERS ================= */}

            <div className="mt-12 flex flex-wrap gap-2 border-b border-[#29251f]/10 pb-8 lg:mt-16">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`relative overflow-hidden rounded-full border px-5 py-3 text-[11px] font-semibold transition-colors duration-300 ${
                      isActive
                        ? "border-[#29251f] text-white"
                        : "border-[#29251f]/10 text-[#71685f] hover:border-[#29251f]/30 hover:text-[#29251f]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="galleryFilter"
                        className="absolute inset-0 bg-[#29251f]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="relative z-10">{category}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= GALLERY ================= */}

        <section className="pb-24 sm:pb-28 lg:pb-36">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <motion.div
              layout
              className="grid auto-rows-[260px] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[300px] lg:grid-cols-12 lg:auto-rows-[260px]"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((item, index) => {
                  let sizeClass = "lg:col-span-4";

                  if (item.size === "large") {
                    sizeClass = "sm:col-span-2 lg:col-span-7 lg:row-span-2";
                  }

                  if (item.size === "wide") {
                    sizeClass = "sm:col-span-2 lg:col-span-8";
                  }

                  if (item.size === "tall") {
                    sizeClass = "lg:col-span-4 lg:row-span-2";
                  }

                  return (
                    <motion.button
                      layout
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedImage(item)}
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
                        scale: reduceMotion ? 1 : 0.96,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.5,
                        delay: reduceMotion ? 0 : index * 0.025,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`group relative overflow-hidden rounded-[26px] bg-[#ddd1c2] text-left ${sizeClass}`}
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
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                      {/* CATEGORY */}

                      <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                        {item.category}
                      </div>

                      {/* EXPAND */}

                      <div className="absolute right-5 top-5 flex h-10 w-10 scale-90 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                        <FiMaximize2 size={15} />
                      </div>

                      {/* TEXT */}

                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                        <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#d2b99a]">
                          Little Paws
                        </p>

                        <div className="mt-2 flex items-end justify-between gap-4">
                          <h3 className="text-[22px] font-medium tracking-[-0.03em] text-white sm:text-[26px]">
                            {item.title}
                          </h3>

                          <span className="text-[9px] tracking-[0.2em] text-white/40">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {/* ================= EMPTY STATE ================= */}

            {filteredImages.length === 0 && (
              <div className="py-24 text-center">
                <p className="text-[14px] text-[#70675f]">
                  No images available in this category yet.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ================= FEATURE STRIP ================= */}

        <section className="bg-[#eee5d9] py-24 sm:py-28">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid overflow-hidden rounded-[32px] bg-[#29251f] text-white lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-7 sm:p-10 lg:p-14">
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#c9ae8a]">
                  More than pretty pictures
                </p>

                <h2 className="mt-5 max-w-[720px] text-[clamp(2.5rem,5vw,5.4rem)] font-medium leading-[0.96] tracking-[-0.05em]">
                  Every space is designed around{" "}
                  <span className="font-serif italic font-normal text-[#d0baa0]">
                    comfort first.
                  </span>
                </h2>

                <p className="mt-6 max-w-[600px] text-[13px] leading-7 text-white/55 sm:text-[14px]">
                  Quiet corners, comfortable bedding, private spaces and
                  enrichment all work together to help cats settle naturally
                  into their stay at Little Paws.
                </p>

                <Link
                  to="/rooms"
                  className="group mt-8 inline-flex items-center gap-5 rounded-full bg-[#f2e8da] py-2 pl-6 pr-2 text-[12px] font-semibold text-[#29251f]"
                >
                  Explore our rooms
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#29251f] text-white transition-transform duration-300 group-hover:rotate-45">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>

              <div className="relative min-h-[360px] lg:min-h-full">
                <img
                  src="/images/image6.avif"
                  alt="Cat relaxing comfortably at Little Paws"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#29251f]/50 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}

        <section className="bg-[#f8f4ec] py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="relative overflow-hidden rounded-[34px] bg-[#29251f] p-7 text-white sm:p-10 lg:p-14">
              <div className="absolute -right-28 -top-28 h-[340px] w-[340px] rounded-full border border-white/[0.05]" />

              <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#c9ae8a]">
                    Picture your cat here
                  </p>

                  <h2 className="mt-4 max-w-[900px] text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.05em]">
                    Ready to plan a{" "}
                    <span className="font-serif italic font-normal text-[#d0baa0]">
                      comfortable stay?
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
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= LIGHTBOX ================= */}

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
            className="fixed inset-0 z-[250] flex items-center justify-center bg-[#151310]/95 p-4 backdrop-blur-xl sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* CLOSE */}

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close gallery"
              className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#29251f] sm:right-8 sm:top-8"
            >
              <FiX size={19} />
            </button>

            {/* PREVIOUS */}

            {filteredImages.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                aria-label="Previous image"
                className="absolute bottom-5 left-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#29251f] sm:bottom-auto sm:left-8 sm:top-1/2 sm:-translate-y-1/2"
              >
                <FiArrowLeft />
              </button>
            )}

            {/* NEXT */}

            {filteredImages.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Next image"
                className="absolute bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#29251f] sm:bottom-auto sm:right-8 sm:top-1/2 sm:-translate-y-1/2"
              >
                <FiArrowRight />
              </button>
            )}

            {/* ================= IMAGE ================= */}

            <motion.div
              key={selectedImage.id}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 20,
                scale: reduceMotion ? 1 : 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.97,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-[1200px] overflow-hidden rounded-[28px]"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                decoding="async"
                className="max-h-[82vh] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#d2b99a]">
                  {selectedImage.category}
                </p>

                <h3 className="mt-3 text-[28px] font-medium tracking-[-0.04em] text-white sm:text-[42px]">
                  {selectedImage.title}
                </h3>

                <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/40">
                  Little Paws
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Gallery;
