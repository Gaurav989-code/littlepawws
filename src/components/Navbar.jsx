import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { FaCat } from "react-icons/fa6";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Rooms", path: "/rooms" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const reduceMotion = useReducedMotion();
  const location = useLocation();

  const isHome = location.pathname === "/";

  // Transparent white navbar only over homepage hero
  const transparentNavbar = isHome && !scrolled && !menuOpen;

  // ================= SCROLL EFFECT =================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ================= CLOSE MENU ON ROUTE CHANGE =================

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // ================= MOBILE BODY LOCK + ESC =================

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <motion.header
        initial={{
          opacity: 0,
          y: -24,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 right-0 top-0 z-[100]"
      >
        <div
          className={`transition-all duration-500 ${
            transparentNavbar
              ? "border-transparent bg-transparent"
              : "border-b border-black/[0.06] bg-[#f8f4ec]/90 shadow-[0_10px_45px_rgba(32,27,21,0.06)] backdrop-blur-2xl"
          }`}
        >
          <div className="mx-auto flex h-[78px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
            {/* ================= LOGO ================= */}

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="group relative z-[110] flex items-center gap-3"
            >
              <motion.div
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        rotate: -8,
                        scale: 1.05,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 ${
                  transparentNavbar
                    ? "border border-white/20 bg-white/10 text-white backdrop-blur-md"
                    : "bg-[#29251f] text-[#f8f4ec]"
                }`}
              >
                <FaCat className="text-[18px]" />
              </motion.div>

              {/* BRAND */}

              <div className="leading-none">
                <p
                  className={`text-[18px] font-semibold tracking-[-0.03em] transition-colors duration-500 ${
                    transparentNavbar ? "text-white" : "text-[#28241f]"
                  }`}
                >
                  Little
                </p>

                <p
                  className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.34em] transition-colors duration-500 ${
                    transparentNavbar ? "text-white/55" : "text-[#8c765a]"
                  }`}
                >
                  Paws
                </p>
              </div>
            </Link>

            {/* ================= DESKTOP NAV ================= */}

            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
              <div
                className={`flex items-center gap-1 rounded-full p-1.5 transition-all duration-500 ${
                  transparentNavbar
                    ? "border border-white/10 bg-black/10 backdrop-blur-xl"
                    : "border border-black/[0.04] bg-white/50 backdrop-blur-xl"
                }`}
              >
                {navLinks.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className="relative px-4 py-2.5 text-[13px] font-medium"
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.span
                            layoutId="desktopActiveNav"
                            className={`absolute inset-0 rounded-full ${
                              transparentNavbar ? "bg-white" : "bg-[#29251f]"
                            }`}
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 30,
                            }}
                          />
                        )}

                        <span
                          className={`relative z-10 transition-colors duration-300 ${
                            isActive
                              ? transparentNavbar
                                ? "text-[#29251f]"
                                : "text-[#f8f4ec]"
                              : transparentNavbar
                                ? "text-white/70 hover:text-white"
                                : "text-[#625a51] hover:text-[#29251f]"
                          }`}
                        >
                          {item.label}
                        </span>
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            </nav>

            {/* ================= RIGHT ================= */}

            <div className="flex items-center gap-3">
              {/* ================= BOOKING BUTTON ================= */}

              <Link
                to="/booking"
                className={`group relative hidden overflow-hidden rounded-full py-3 pl-5 pr-3 text-[13px] font-semibold transition-all duration-500 lg:flex ${
                  transparentNavbar
                    ? "border border-white/20 bg-white/10 text-white backdrop-blur-xl"
                    : "bg-[#29251f] text-white"
                }`}
              >
                <motion.span
                  initial={{
                    y: "105%",
                  }}
                  whileHover={{
                    y: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`absolute inset-0 ${
                    transparentNavbar ? "bg-white" : "bg-[#9c8061]"
                  }`}
                />

                <span
                  className={`relative z-10 flex items-center gap-3 transition-colors duration-300 ${
                    transparentNavbar
                      ? "group-hover:text-[#29251f]"
                      : "text-white"
                  }`}
                >
                  Book a Stay
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 group-hover:rotate-45 ${
                      transparentNavbar
                        ? "bg-white text-[#29251f] group-hover:bg-[#29251f] group-hover:text-white"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    <FiArrowUpRight size={13} />
                  </span>
                </span>
              </Link>

              {/* ================= MOBILE MENU BUTTON ================= */}

              <button
                type="button"
                onClick={() => setMenuOpen((current) => !current)}
                aria-label={
                  menuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={menuOpen}
                className={`relative z-[110] flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-500 lg:hidden ${
                  transparentNavbar
                    ? "border-white/20 bg-white/10 text-white"
                    : "border-black/10 bg-white/70 text-[#29251f]"
                }`}
              >
                <AnimatePresence mode="wait">
                  {menuOpen ? (
                    <motion.span
                      key="close"
                      initial={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.8,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <FiX size={21} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.8,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <FiMenu size={21} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {menuOpen && (
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
            className="fixed inset-0 z-[90] lg:hidden"
          >
            {/* ================= BACKGROUND ================= */}

            <motion.div
              initial={{
                clipPath: "circle(0% at 92% 4%)",
              }}
              animate={{
                clipPath: "circle(150% at 92% 4%)",
              }}
              exit={{
                clipPath: "circle(0% at 92% 4%)",
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="absolute inset-0 bg-[#eee5d9]"
            />

            {/* ================= DECORATION ================= */}

            <div className="pointer-events-none absolute -bottom-24 -right-24 h-[340px] w-[340px] rounded-full border border-[#29251f]/[0.05]" />

            <div className="pointer-events-none absolute -bottom-5 -right-5 h-[230px] w-[230px] rounded-full border border-[#29251f]/[0.05]" />

            <FaCat className="pointer-events-none absolute bottom-12 right-6 text-[140px] text-[#29251f]/[0.035]" />

            {/* ================= MOBILE CONTENT ================= */}

            <div className="relative z-10 flex min-h-screen flex-col px-6 pb-8 pt-[120px] sm:px-10">
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: reduceMotion ? 0 : 0.2,
                }}
                className="mb-7 text-[9px] font-semibold uppercase tracking-[0.34em] text-[#968777]"
              >
                Navigation
              </motion.p>

              {/* ================= MOBILE LINKS ================= */}

              <nav className="flex flex-col">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: reduceMotion ? 0 : 0.12 + index * 0.06,
                      duration: reduceMotion ? 0 : 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between border-b border-[#29251f]/10 py-4"
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-center gap-4">
                            <span className="text-[9px] font-semibold tracking-[0.18em] text-[#a19588]">
                              0{index + 1}
                            </span>

                            <span
                              className={`text-[clamp(2.1rem,9vw,3.5rem)] font-medium leading-none tracking-[-0.05em] transition-colors duration-300 ${
                                isActive
                                  ? "text-[#9c8061]"
                                  : "text-[#29251f] group-hover:text-[#9c8061]"
                              }`}
                            >
                              {item.label}
                            </span>
                          </div>

                          <FiArrowUpRight
                            className={`text-xl transition-all duration-300 group-hover:rotate-45 ${
                              isActive ? "text-[#9c8061]" : "text-[#776d63]"
                            }`}
                          />
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* ================= MOBILE BOTTOM ================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: reduceMotion ? 0 : 0.55,
                  duration: reduceMotion ? 0 : 0.5,
                }}
                className="mt-auto pt-8"
              >
                <Link
                  to="/booking"
                  onClick={() => setMenuOpen(false)}
                  className="flex w-full items-center justify-between rounded-full bg-[#29251f] px-6 py-3 text-[13px] font-semibold text-white"
                >
                  Book your cat's stay
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2e8da] text-[#29251f]">
                    <FiArrowUpRight />
                  </span>
                </Link>

                <div className="mt-7 flex items-end justify-between">
                  <div>
                    <p className="text-[11px] text-[#887d72]">
                      Safe. Comfortable.
                    </p>

                    <p className="mt-1 text-[11px] text-[#887d72]">
                      Thoughtfully cared for.
                    </p>
                  </div>

                  {/* UPDATED BRAND */}

                  <div className="text-right">
                    <p className="text-[11px] font-semibold tracking-[-0.02em] text-[#29251f]">
                      Little
                    </p>

                    <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.3em] text-[#9c8061]">
                      Paws
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
