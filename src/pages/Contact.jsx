import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCheck,
  FiClock,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
} from "react-icons/fi";

import PageTransition from "../components/PageTransition";

const WHATSAPP_NUMBER = "919960219486";

const contactMethods = [
  {
    icon: FiPhone,
    label: "Call us",
    value: "+91 99602 19486",
    description: "For bookings, availability and general questions.",
    href: "tel:+919960219486",
  },
  {
    icon: FiMessageCircle,
    label: "WhatsApp",
    value: "+91 99602 19486",
    description:
      "Message us directly about your cat, stay dates or care requirements.",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
];

const openingHours = [
  ["Monday – Friday", "8:00 AM – 8:00 PM"],
  ["Saturday", "8:00 AM – 8:00 PM"],
  ["Sunday", "9:00 AM – 6:00 PM"],
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  catName: "",
  subject: "General enquiry",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const reduceMotion = useReducedMotion();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const whatsappMessage = `
🐾 *Little Paws - New Enquiry*

👤 *Customer Name:*
${formData.name}

📞 *Phone Number:*
${formData.phone}

📧 *Email:*
${formData.email || "Not provided"}

🐱 *Cat Name:*
${formData.catName || "Not provided"}

📌 *Enquiry Type:*
${formData.subject}

💬 *Message:*
${formData.message}

-------------------------
Sent from Little Paws website
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setFormData(initialForm);
    setErrors({});
  };

  return (
    <PageTransition>
      <main className="overflow-hidden bg-[#f8f4ec]">
        {/* ================= HERO ================= */}

        <section className="relative min-h-[88vh] overflow-hidden bg-[#1c1916]">
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
            src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=2200&q=90"
            alt="Cat relaxing comfortably at Little Paws"
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
                  Contact Little Paws
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
                Tell us about{" "}
                <span className="font-serif italic font-normal text-[#d8c5ab]">
                  your cat.
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
                className="mt-7 max-w-[640px] text-[14px] leading-7 text-white/65 sm:text-[16px] sm:leading-8"
              >
                Ask about availability, rooms, feeding routines, special care or
                anything else you want to know before your cat's stay.
              </motion.p>

              <motion.a
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
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-5 rounded-full bg-[#f2e8da] py-2 pl-6 pr-2 text-[12px] font-semibold text-[#29251f]"
              >
                WhatsApp us
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#29251f] text-white transition-transform duration-300 group-hover:rotate-12">
                  <FiMessageCircle />
                </span>
              </motion.a>
            </div>
          </div>
        </section>

        {/* ================= CONTACT METHODS ================= */}

        <section className="py-24 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8c765a]">
                  Get in touch
                </p>

                <h2 className="mt-5 max-w-[850px] text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.94] tracking-[-0.055em] text-[#29251f]">
                  We’re here to make their stay{" "}
                  <span className="font-serif italic font-normal text-[#9c8061]">
                    simple from the start.
                  </span>
                </h2>
              </div>

              <p className="max-w-[520px] text-[14px] leading-8 text-[#70675f] sm:text-[15px]">
                Contact us before booking if your cat has medication, dietary
                requirements, unusual routines or anything else we should know.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-20">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;

                return (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target={method.label === "WhatsApp" ? "_blank" : undefined}
                    rel={
                      method.label === "WhatsApp"
                        ? "noopener noreferrer"
                        : undefined
                    }
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
                      delay: reduceMotion ? 0 : index * 0.07,
                    }}
                    whileHover={
                      reduceMotion
                        ? {}
                        : {
                            y: -6,
                          }
                    }
                    className="group min-h-[300px] rounded-[28px] border border-[#29251f]/[0.06] bg-[#eee5d9] p-7"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#29251f] text-white">
                        <Icon size={17} />
                      </div>

                      <FiArrowUpRight className="text-[#8c765a] transition-transform duration-300 group-hover:rotate-45" />
                    </div>

                    <p className="mt-12 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#988878]">
                      {method.label}
                    </p>

                    <h3 className="mt-3 text-[23px] font-medium tracking-[-0.035em] text-[#29251f]">
                      {method.value}
                    </h3>

                    <p className="mt-4 max-w-[420px] text-[13px] leading-7 text-[#746b62]">
                      {method.description}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= FORM + HOURS ================= */}

        <section className="bg-[#eee5d9] py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              {/* ================= WHATSAPP FORM ================= */}

              <motion.div
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
                  amount: 0.15,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                }}
                className="rounded-[30px] bg-[#f8f4ec] p-6 sm:p-8 lg:p-10"
              >
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8c765a]">
                      WhatsApp enquiry
                    </p>

                    <h2 className="mt-4 max-w-[650px] text-[clamp(2.3rem,5vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[#29251f]">
                      How can we help?
                    </h2>
                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#29251f] text-white sm:flex">
                    <FiMessageCircle size={18} />
                  </div>
                </div>

                <p className="mt-4 max-w-[600px] text-[13px] leading-7 text-[#746b62]">
                  Fill in the details below and tap Send on WhatsApp. Your
                  enquiry will open directly in a WhatsApp chat with Little
                  Paws.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 grid gap-5 sm:grid-cols-2"
                >
                  {/* NAME */}

                  <ContactField
                    label="Your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    error={errors.name}
                  />

                  {/* PHONE */}

                  <ContactField
                    label="Phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91"
                    type="tel"
                    error={errors.phone}
                  />

                  {/* EMAIL */}

                  <ContactField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Optional"
                    type="email"
                  />

                  {/* CAT NAME */}

                  <ContactField
                    label="Cat's name"
                    name="catName"
                    value={formData.catName}
                    onChange={handleChange}
                    placeholder="Optional"
                  />

                  {/* SUBJECT */}

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="subject"
                      className="text-[11px] font-semibold text-[#29251f]"
                    >
                      What can we help with?
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-2 h-[54px] w-full rounded-[16px] border border-[#29251f]/10 bg-white/60 px-4 text-[13px] text-[#29251f] outline-none transition-colors focus:border-[#8c765a] focus:bg-white"
                    >
                      <option>General enquiry</option>
                      <option>Room availability</option>
                      <option>Cat boarding</option>
                      <option>Day care</option>
                      <option>Grooming</option>
                      <option>Medication support</option>
                      <option>Pickup & drop</option>
                      <option>Special care requirement</option>
                    </select>
                  </div>

                  {/* MESSAGE */}

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-[11px] font-semibold text-[#29251f]"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us about your cat, the dates you need, room preference, care requirements or any questions..."
                      className={`mt-2 w-full resize-none rounded-[18px] border bg-white/60 p-4 text-[13px] leading-6 text-[#29251f] outline-none transition-all placeholder:text-[#a49a90] focus:bg-white ${
                        errors.message
                          ? "border-red-400"
                          : "border-[#29251f]/10 focus:border-[#8c765a]"
                      }`}
                    />

                    {errors.message && (
                      <p className="mt-2 text-[11px] text-red-700">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* SEND */}

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-5 rounded-full bg-[#29251f] py-2 pl-6 pr-2 text-[12px] font-semibold text-white"
                    >
                      Send on WhatsApp
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c9ae8a] text-[#29251f] transition-transform duration-300 group-hover:rotate-12">
                        <FiSend size={14} />
                      </span>
                    </button>

                    <p className="mt-4 text-[10px] leading-5 text-[#918579]">
                      WhatsApp will open with your enquiry automatically
                      prepared. Review it and tap Send.
                    </p>
                  </div>
                </form>
              </motion.div>

              {/* ================= RIGHT COLUMN ================= */}

              <div className="space-y-5">
                {/* ================= HOURS ================= */}

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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.75,
                  }}
                  className="rounded-[28px] bg-[#29251f] p-7 text-white sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c9ae8a] text-[#29251f]">
                    <FiClock size={17} />
                  </div>

                  <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.26em] text-[#c9ae8a]">
                    Opening hours
                  </p>

                  <h3 className="mt-3 text-[27px] font-medium tracking-[-0.035em]">
                    When you can reach us
                  </h3>

                  <div className="mt-7">
                    {openingHours.map(([day, time]) => (
                      <div
                        key={day}
                        className="flex items-center justify-between gap-5 border-b border-white/10 py-4"
                      >
                        <span className="text-[12px] text-white/50">{day}</span>

                        <span className="text-right text-[12px] font-medium">
                          {time}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-[10px] leading-5 text-white/35">
                    Check-in and check-out times can be confirmed separately
                    when your booking is accepted.
                  </p>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-7 flex items-center justify-between rounded-[18px] bg-white/[0.07] p-4 transition-colors hover:bg-white/[0.1]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c9ae8a] text-[#29251f]">
                        <FiMessageCircle size={14} />
                      </div>

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                          WhatsApp
                        </p>

                        <p className="mt-1 text-[12px] font-medium">
                          +91 99602 19486
                        </p>
                      </div>
                    </div>

                    <FiArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </motion.div>

                {/* ================= LOCATION ================= */}

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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.75,
                    delay: 0.08,
                  }}
                  className="overflow-hidden rounded-[28px] border border-[#29251f]/[0.06] bg-[#f8f4ec]"
                >
                  <div className="relative h-[280px] overflow-hidden bg-[#d8cabb]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#29251f] text-white">
                          <FiMapPin size={20} />
                        </span>

                        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#645c54]">
                          Map / Location
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#8c765a]">
                      Visit us
                    </p>

                    <h3 className="mt-3 text-[24px] font-medium tracking-[-0.035em] text-[#29251f]">
                      Little Paws
                    </h3>

                    <p className="mt-3 max-w-[420px] text-[13px] leading-7 text-[#746b62]">
                      Add your complete business address here once your location
                      details are finalized.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BEFORE CONTACT ================= */}

        <section className="bg-[#f8f4ec] py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8c765a]">
                  Helpful information
                </p>

                <h2 className="mt-5 text-[clamp(2.8rem,5.5vw,5.8rem)] font-medium leading-[0.95] tracking-[-0.055em] text-[#29251f]">
                  A few details help us answer{" "}
                  <span className="font-serif italic font-normal text-[#9c8061]">
                    faster.
                  </span>
                </h2>

                <p className="mt-7 max-w-[580px] text-[14px] leading-8 text-[#70675f]">
                  When asking about a stay, include these details where possible
                  so we can understand exactly what your cat needs.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Required check-in and check-out dates",
                  "Your cat's age and personality",
                  "Preferred room type",
                  "Usual feeding routine",
                  "Medication or special care",
                  "Transport requirement, if any",
                ].map((item, index) => (
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
                    className="flex min-h-[105px] items-center gap-4 rounded-[22px] bg-[#eee5d9] p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#29251f] text-white">
                      <FiCheck size={13} />
                    </span>

                    <span className="text-[12px] leading-6 text-[#514b45]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
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
                    Ready to plan their stay?
                  </p>

                  <h2 className="mt-4 max-w-[900px] text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.05em]">
                    Start with a few details and we’ll take it{" "}
                    <span className="font-serif italic font-normal text-[#d0baa0]">
                      from there.
                    </span>
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/booking"
                    className="group inline-flex shrink-0 items-center gap-5 rounded-full bg-[#f1e8dc] py-2 pl-6 pr-2 text-[12px] font-semibold text-[#29251f]"
                  >
                    Start booking
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#29251f] text-white transition-transform duration-300 group-hover:rotate-45">
                      <FiArrowUpRight />
                    </span>
                  </Link>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-[59px] items-center gap-3 rounded-full border border-white/15 px-6 text-[12px] font-semibold text-white transition-colors hover:bg-white hover:text-[#29251f]"
                  >
                    <FiMessageCircle />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

const ContactField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[11px] font-semibold text-[#29251f]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-2 h-[54px] w-full rounded-[16px] border bg-white/60 px-4 text-[13px] text-[#29251f] outline-none transition-all placeholder:text-[#a49a90] focus:bg-white ${
          error
            ? "border-red-400"
            : "border-[#29251f]/10 focus:border-[#8c765a]"
        }`}
      />

      {error && <p className="mt-2 text-[11px] text-red-700">{error}</p>}
    </div>
  );
};

export default Contact;
