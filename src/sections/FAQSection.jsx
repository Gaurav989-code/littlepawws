import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiMessageCircle,
  FiMinus,
  FiPlus,
} from "react-icons/fi";

const faqs = [
  {
    id: 1,
    question: "What should I bring for my cat's stay?",
    answer:
      "You can bring your cat's regular food, any required medication, feeding instructions and a familiar comfort item such as a small blanket or toy. Keeping a few familiar things around can make the transition easier.",
  },
  {
    id: 2,
    question: "Do you require vaccinations?",
    answer:
      "Vaccination requirements should be confirmed before the stay. We recommend keeping your cat's vaccination records available during booking so we can review the requirements with you before check-in.",
  },
  {
    id: 3,
    question: "Can you follow my cat's normal feeding routine?",
    answer:
      "Yes. You can tell us your cat's usual feeding times, portion sizes, preferred food and any dietary instructions. Our aim is to keep their routine as familiar and consistent as possible.",
  },
  {
    id: 4,
    question: "Can you give medication during the stay?",
    answer:
      "Medication support may be available depending on the type of medication and your instructions. Please discuss the medication, dosage and schedule with us before confirming the stay.",
  },
  {
    id: 5,
    question: "Will my cat share a room with other cats?",
    answer:
      "Our room options are designed around privacy and comfort. Cats can stay in their own designated space unless you are boarding cats from the same household and have arranged a shared stay with us.",
  },
  {
    id: 6,
    question: "What happens if my cat becomes unwell?",
    answer:
      "If we notice a health concern, we will contact you using the emergency details provided during booking and follow the care instructions agreed before the stay. Your emergency contact and preferred veterinary information should be provided when booking.",
  },
  {
    id: 7,
    question: "Can I receive updates while I'm away?",
    answer:
      "Yes. Update options can be discussed during booking. Depending on your chosen stay, we can share occasional photos or messages so you know how your cat is settling in.",
  },
  {
    id: 8,
    question: "My cat has never stayed away from home. Is that okay?",
    answer:
      "Yes. Many cats need a little time to settle into a new environment. We focus on quiet spaces, gentle interaction and allowing cats to adjust at their own pace rather than forcing attention.",
  },
];

const FAQSection = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const reduceMotion = useReducedMotion();

  const toggleFaq = (index) => {
    setActiveFaq((current) => (current === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-[#eee5d9] py-24 sm:py-28 lg:py-36">
      {/* ================= DECORATION ================= */}

      <div className="pointer-events-none absolute -left-36 top-24 h-[400px] w-[400px] rounded-full border border-[#29251f]/[0.04]" />

      <div className="pointer-events-none absolute -left-16 top-[165px] h-[240px] w-[240px] rounded-full border border-[#29251f]/[0.04]" />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 xl:gap-28">
          {/* ================= LEFT SIDE ================= */}

          <div className="lg:sticky lg:top-32 lg:self-start">
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
                Frequently Asked Questions
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
              className="max-w-[620px] text-[clamp(2.8rem,6vw,5.8rem)] font-medium leading-[0.94] tracking-[-0.055em] text-[#29251f]"
            >
              Everything you may want to{" "}
              <span className="font-serif italic font-normal text-[#9c8061]">
                know before booking.
              </span>
            </motion.h2>

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
                amount: 0.4,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: 0.1,
              }}
              className="mt-7 max-w-[500px] text-[14px] leading-7 text-[#70675f] sm:text-[15px] sm:leading-8"
            >
              We want you to feel comfortable before leaving your cat with us.
              If there is anything specific about your cat's personality,
              health, food or routine, you can always discuss it with us.
            </motion.p>

            {/* CONTACT CARD */}

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
                amount: 0.4,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: 0.18,
              }}
              className="mt-9 rounded-[26px] bg-[#29251f] p-6 text-white sm:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c9ae8a] text-[#29251f]">
                <FiMessageCircle size={17} />
              </div>

              <h3 className="mt-5 text-[22px] font-medium tracking-[-0.03em]">
                Still have a question?
              </h3>

              <p className="mt-3 max-w-[360px] text-[12px] leading-6 text-white/50">
                Tell us about your cat and we'll help you understand the best
                option for their stay.
              </p>

              <Link
                to="/contact"
                className="group mt-6 inline-flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.18em]"
              >
                Contact us
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#29251f]">
                  <FiArrowUpRight />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* ================= FAQ LIST ================= */}

          <div className="border-t border-[#29251f]/10">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <motion.div
                  key={faq.id}
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
                    amount: 0.3,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.6,
                    delay: reduceMotion ? 0 : index * 0.035,
                  }}
                  className="border-b border-[#29251f]/10"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-6 py-6 text-left sm:py-8"
                  >
                    <div className="flex gap-4 sm:gap-6">
                      {/* number */}

                      <span
                        className={`mt-1 text-[9px] font-semibold tracking-[0.2em] transition-colors duration-300 ${
                          isOpen ? "text-[#8c765a]" : "text-[#a19588]"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      {/* question */}

                      <h3
                        className={`max-w-[720px] text-[18px] font-medium leading-snug tracking-[-0.025em] transition-colors duration-300 sm:text-[22px] ${
                          isOpen
                            ? "text-[#8c765a]"
                            : "text-[#29251f] group-hover:text-[#8c765a]"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    {/* icon */}

                    <motion.span
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.3,
                      }}
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                        isOpen
                          ? "border-[#29251f] bg-[#29251f] text-white"
                          : "border-[#29251f]/15 text-[#29251f]"
                      }`}
                    >
                      {isOpen ? <FiMinus size={15} /> : <FiPlus size={15} />}
                    </motion.span>
                  </button>

                  {/* ================= ANSWER ================= */}

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: reduceMotion ? 0 : 0.45,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: reduceMotion ? 0 : 0.25,
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 pl-8 pr-14 sm:pb-8 sm:pl-[52px] sm:pr-20">
                          <p className="max-w-[760px] text-[13px] leading-7 text-[#746a61] sm:text-[14px] sm:leading-8">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM BOOKING STRIP ================= */}

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
            duration: reduceMotion ? 0 : 0.75,
          }}
          className="mt-20 flex flex-col gap-7 border-t border-[#29251f]/10 pt-10 lg:mt-28 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#978776]">
              Ready when they are
            </p>

            <h3 className="mt-3 max-w-[750px] text-[clamp(2rem,4vw,4rem)] font-medium leading-[1] tracking-[-0.045em] text-[#29251f]">
              Let's plan a comfortable stay for your cat.
            </h3>
          </div>

          <Link
            to="/booking"
            className="group inline-flex shrink-0 items-center gap-5 self-start rounded-full bg-[#29251f] py-2 pl-6 pr-2 text-[12px] font-semibold text-white lg:self-auto"
          >
            Start booking
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f2e8da] text-[#29251f] transition-transform duration-300 group-hover:rotate-45">
              <FiArrowUpRight />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
