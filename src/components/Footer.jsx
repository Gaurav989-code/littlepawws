import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  FiArrowUpRight,
  FiInstagram,
  FiFacebook,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { FaCat } from "react-icons/fa6";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Rooms", path: "/rooms" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#171512] text-white">
      {/* ================= DECORATIVE CIRCLES ================= */}

      <div className="pointer-events-none absolute -right-40 top-[-120px] h-[450px] w-[450px] rounded-full border border-white/[0.04]" />

      <div className="pointer-events-none absolute -right-10 top-[-20px] h-[250px] w-[250px] rounded-full border border-white/[0.04]" />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ================= TOP CTA ================= */}

        <div className="border-b border-white/10 py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9ae8a]">
                Little Paws
              </p>

              <h2 className="mt-5 max-w-[850px] text-[clamp(2.7rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.055em]">
                A peaceful stay for{" "}
                <span className="font-serif italic font-normal text-[#cbb598]">
                  your cat.
                </span>
              </h2>
            </div>

            <Link
              to="/booking"
              className="group inline-flex shrink-0 items-center gap-5 self-start rounded-full bg-[#f1e7d9] py-2 pl-6 pr-2 text-[12px] font-semibold text-[#29251f] lg:self-auto"
            >
              Book a stay
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#29251f] text-white transition-transform duration-300 group-hover:rotate-45">
                <FiArrowUpRight />
              </span>
            </Link>
          </div>
        </div>

        {/* ================= MAIN FOOTER ================= */}

        <div className="grid gap-12 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.8fr_0.9fr] lg:gap-10 lg:py-20">
          {/* ================= BRAND ================= */}

          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <motion.div
                whileHover={{
                  rotate: -8,
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c9ae8a] text-[#29251f]"
              >
                <FaCat size={18} />
              </motion.div>

              <div className="leading-none">
                <p className="text-[18px] font-semibold tracking-[-0.03em]">
                  Little
                </p>

                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.34em] text-[#c9ae8a]">
                  Paws
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-[390px] text-[13px] leading-7 text-white/45">
              A calm, safe and comfortable place where cats receive personal
              attention, familiar routines and thoughtful care while you're
              away.
            </p>

            {/* ================= SOCIAL ================= */}

            <div className="mt-7 flex gap-3">
              <motion.a
                whileHover={{
                  y: -4,
                }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Little Paws Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:bg-white hover:text-[#29251f]"
              >
                <FiInstagram size={15} />
              </motion.a>

              <motion.a
                whileHover={{
                  y: -4,
                }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Little Paws Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:bg-white hover:text-[#29251f]"
              >
                <FiFacebook size={15} />
              </motion.a>
            </div>
          </div>

          {/* ================= NAVIGATION ================= */}

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#c9ae8a]">
              Explore
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {footerLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="group flex w-fit items-center gap-2 text-[13px] text-white/50 transition-colors duration-300 hover:text-white"
                >
                  {item.label}

                  <FiArrowUpRight className="translate-y-1 text-[11px] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:rotate-45 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* ================= SERVICES ================= */}

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#c9ae8a]">
              Services
            </p>

            <div className="mt-6 flex flex-col gap-4 text-[13px] text-white/50">
              <span className="transition-colors hover:text-white">
                Cat Boarding
              </span>

              <span className="transition-colors hover:text-white">
                Day Care
              </span>

              <span className="transition-colors hover:text-white">
                Grooming
              </span>

              <span className="transition-colors hover:text-white">
                Feeding Care
              </span>

              <span className="transition-colors hover:text-white">
                Medication Support
              </span>

              <span className="transition-colors hover:text-white">
                Pickup & Drop
              </span>
            </div>
          </div>

          {/* ================= CONTACT ================= */}

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#c9ae8a]">
              Contact
            </p>

            <div className="mt-6 space-y-5">
              {/* PHONE */}

              <a
                href="tel:+919960219486"
                className="group flex items-start gap-3"
              >
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06] transition-colors duration-300 group-hover:bg-[#c9ae8a] group-hover:text-[#29251f]">
                  <FiPhone size={12} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                    Phone
                  </p>

                  <p className="mt-1 text-[12px] text-white/60 transition-colors duration-300 group-hover:text-white">
                    +91 99602 19486
                  </p>
                </div>
              </a>

              {/* EMAIL */}

              <a
                href="mailto:hello@littlepaws.com"
                className="group flex items-start gap-3"
              >
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06] transition-colors duration-300 group-hover:bg-[#c9ae8a] group-hover:text-[#29251f]">
                  <FiMail size={12} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                    Email
                  </p>

                  <p className="mt-1 break-all text-[12px] text-white/60 transition-colors duration-300 group-hover:text-white">
                    hello@littlepaws.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-[10px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Little Paws. All rights reserved.</p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link
              to="/privacy"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms
            </Link>

            {/* ================= GTECH CREDIT ================= */}

            <p>
              Designed and developed by{" "}
              <a
                href="https://gtech-solutions.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#c9ae8a] transition-colors duration-300 hover:text-white"
              >
                GTech Solutions Pvt Ltd
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
