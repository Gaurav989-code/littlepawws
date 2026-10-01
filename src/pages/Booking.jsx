import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiCheckCircle,
  FiChevronDown,
  FiHeart,
  FiHome,
  FiMail,
  FiPhone,
  FiShield,
  FiUser,
} from "react-icons/fi";
import { FaCat } from "react-icons/fa6";

import PageTransition from "../components/PageTransition";

const WHATSAPP_NUMBER = "919960219486";

const rooms = [
  {
    id: "cozy",
    name: "Cozy Room",
    price: 199,
    description: "Quiet private space for a calm and comfortable stay.",
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    price: 299,
    description: "More room, enrichment and additional playtime.",
  },
  {
    id: "luxury",
    name: "Luxury Suite",
    price: 499,
    description: "Our premium stay with extra comfort and attention.",
  },
];

const steps = [
  {
    id: 1,
    title: "Your details",
  },
  {
    id: 2,
    title: "Your cat",
  },
  {
    id: 3,
    title: "Stay details",
  },
  {
    id: 4,
    title: "Care routine",
  },
  {
    id: 5,
    title: "Review",
  },
];

const initialForm = {
  ownerName: "",
  phone: "",
  email: "",

  catName: "",
  age: "",
  gender: "",
  breed: "",
  temperament: "",

  checkIn: "",
  checkOut: "",
  room: "cozy",

  foodType: "",
  feedingRoutine: "",
  medicationRequired: "no",
  medicationDetails: "",
  specialInstructions: "",

  emergencyName: "",
  emergencyPhone: "",

  agree: false,
};

const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const reduceMotion = useReducedMotion();

  const selectedRoom = useMemo(
    () => rooms.find((room) => room.id === formData.room),
    [formData.room],
  );

  const nights = useMemo(() => {
    if (!formData.checkIn || !formData.checkOut) {
      return 0;
    }

    const start = new Date(`${formData.checkIn}T00:00:00`);

    const end = new Date(`${formData.checkOut}T00:00:00`);

    const difference = end.getTime() - start.getTime();

    if (difference <= 0) {
      return 0;
    }

    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  }, [formData.checkIn, formData.checkOut]);

  const estimatedTotal = nights * (selectedRoom?.price || 0);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  };

  const validateStep = () => {
    const newErrors = {};

    /* ================= STEP 1 ================= */

    if (step === 1) {
      if (!formData.ownerName.trim()) {
        newErrors.ownerName = "Please enter your name.";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Please enter your phone number.";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Please enter your email address.";
      }
    }

    /* ================= STEP 2 ================= */

    if (step === 2) {
      if (!formData.catName.trim()) {
        newErrors.catName = "Please enter your cat's name.";
      }

      if (!formData.age.trim()) {
        newErrors.age = "Please enter your cat's age.";
      }

      if (!formData.gender) {
        newErrors.gender = "Please select a gender.";
      }
    }

    /* ================= STEP 3 ================= */

    if (step === 3) {
      if (!formData.checkIn) {
        newErrors.checkIn = "Please select a check-in date.";
      }

      if (!formData.checkOut) {
        newErrors.checkOut = "Please select a check-out date.";
      }

      if (
        formData.checkIn &&
        formData.checkOut &&
        new Date(`${formData.checkOut}T00:00:00`) <=
          new Date(`${formData.checkIn}T00:00:00`)
      ) {
        newErrors.checkOut = "Check-out must be after the check-in date.";
      }

      if (!formData.room) {
        newErrors.room = "Please choose a room.";
      }
    }

    /* ================= STEP 4 ================= */

    if (step === 4) {
      if (!formData.foodType.trim()) {
        newErrors.foodType = "Please tell us what food your cat normally eats.";
      }

      if (
        formData.medicationRequired === "yes" &&
        !formData.medicationDetails.trim()
      ) {
        newErrors.medicationDetails = "Please provide the medication details.";
      }

      if (!formData.emergencyName.trim()) {
        newErrors.emergencyName = "Please provide an emergency contact.";
      }

      if (!formData.emergencyPhone.trim()) {
        newErrors.emergencyPhone = "Please provide an emergency phone number.";
      }
    }

    /* ================= STEP 5 ================= */

    if (step === 5 && !formData.agree) {
      newErrors.agree =
        "Please confirm that the booking information is correct.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep()) {
      return;
    }

    setStep((current) => Math.min(current + 1, steps.length));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const previousStep = () => {
    setErrors({});

    setStep((current) => Math.max(current - 1, 1));
  };

  /* ================= WHATSAPP BOOKING ================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateStep()) {
      return;
    }

    const medication =
      formData.medicationRequired === "yes"
        ? formData.medicationDetails
        : "No medication required";

    const whatsappMessage = `
🐾 *LITTLE PAWS - NEW BOOKING REQUEST*

━━━━━━━━━━━━━━━━━━━━

👤 *OWNER DETAILS*

*Name:* ${formData.ownerName}
*Phone:* ${formData.phone}
*Email:* ${formData.email}

━━━━━━━━━━━━━━━━━━━━

🐱 *CAT DETAILS*

*Cat Name:* ${formData.catName}
*Age:* ${formData.age}
*Gender:* ${
      formData.gender
        ? formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1)
        : "Not specified"
    }
*Breed:* ${formData.breed || "Not specified"}

*Personality / Temperament:*
${formData.temperament || "Not specified"}

━━━━━━━━━━━━━━━━━━━━

🏠 *STAY DETAILS*

*Room:* ${selectedRoom?.name}
*Room Rate:* ₹${selectedRoom?.price} / night

*Check-in:* ${formatDate(formData.checkIn)}
*Check-out:* ${formatDate(formData.checkOut)}

*Duration:* ${nights} night${nights === 1 ? "" : "s"}

💰 *Estimated Room Total:* ₹${estimatedTotal.toLocaleString("en-IN")}

━━━━━━━━━━━━━━━━━━━━

🍽️ *CARE DETAILS*

*Food:*
${formData.foodType}

*Feeding Routine:*
${formData.feedingRoutine || "Not specified"}

💊 *Medication:*
${medication}

📝 *Special Instructions:*
${formData.specialInstructions || "None"}

━━━━━━━━━━━━━━━━━━━━

🚨 *EMERGENCY CONTACT*

*Name:* ${formData.emergencyName}
*Phone:* ${formData.emergencyPhone}

━━━━━━━━━━━━━━━━━━━━

Please confirm availability and final booking details.

Sent from *Little Paws* website 🐾
    `.trim();

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <PageTransition>
      <main className="min-h-screen overflow-hidden bg-[#f8f4ec]">
        {/* ================= HEADER ================= */}

        <section className="relative overflow-hidden bg-[#211e1a] pb-20 pt-36 text-white sm:pb-24 lg:pt-40">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[440px] w-[440px] rounded-full border border-white/[0.04]" />

          <div className="pointer-events-none absolute right-4 top-10 h-[240px] w-[240px] rounded-full border border-white/[0.04]" />

          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
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
                  className="flex items-center gap-4"
                >
                  <span className="h-px w-10 bg-[#c9ae8a]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#c9ae8a]">
                    Little Paws • Book a Stay
                  </span>
                </motion.div>

                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.85,
                    delay: 0.08,
                  }}
                  className="mt-5 max-w-[900px] text-[clamp(3.2rem,8vw,7.5rem)] font-medium leading-[0.89] tracking-[-0.06em]"
                >
                  Tell us about{" "}
                  <span className="font-serif italic font-normal text-[#cbb598]">
                    your cat.
                  </span>
                </motion.h1>
              </div>

              <p className="max-w-[520px] text-[14px] leading-8 text-white/55 sm:text-[15px]">
                Share a few details about your cat, their routine and your stay
                dates. At the end, your booking request will open directly in
                WhatsApp.
              </p>
            </div>
          </div>
        </section>

        {/* ================= BOOKING AREA ================= */}

        <section className="relative py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            {/* ================= PROGRESS ================= */}

            <div className="mb-10 overflow-x-auto pb-2 lg:mb-14">
              <div className="flex min-w-[720px] items-center">
                {steps.map((item, index) => {
                  const active = step === item.id;

                  const complete = step > item.id;

                  return (
                    <div key={item.id} className="flex flex-1 items-center">
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{
                            scale: active ? 1.08 : 1,
                          }}
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold transition-colors duration-300 ${
                            complete
                              ? "bg-[#9c8061] text-white"
                              : active
                                ? "bg-[#29251f] text-white"
                                : "bg-[#e7ddcf] text-[#81766a]"
                          }`}
                        >
                          {complete ? <FiCheck /> : item.id}
                        </motion.div>

                        <div>
                          <p
                            className={`text-[9px] uppercase tracking-[0.18em] ${
                              active ? "text-[#8c765a]" : "text-[#9c9186]"
                            }`}
                          >
                            Step {item.id}
                          </p>

                          <p
                            className={`mt-1 whitespace-nowrap text-[12px] font-medium ${
                              active ? "text-[#29251f]" : "text-[#736b63]"
                            }`}
                          >
                            {item.title}
                          </p>
                        </div>
                      </div>

                      {index !== steps.length - 1 && (
                        <div
                          className={`mx-5 h-px flex-1 transition-colors duration-500 ${
                            complete ? "bg-[#9c8061]" : "bg-[#29251f]/10"
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_380px] xl:gap-12">
              {/* ================= FORM ================= */}

              <form onSubmit={handleSubmit}>
                <div className="overflow-hidden rounded-[30px] border border-[#29251f]/[0.06] bg-[#eee5d9] p-6 sm:p-8 lg:p-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{
                        opacity: 0,
                        x: reduceMotion ? 0 : 25,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: reduceMotion ? 0 : -20,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {step === 1 && (
                        <OwnerStep
                          formData={formData}
                          errors={errors}
                          handleChange={handleChange}
                        />
                      )}

                      {step === 2 && (
                        <CatStep
                          formData={formData}
                          errors={errors}
                          handleChange={handleChange}
                        />
                      )}

                      {step === 3 && (
                        <StayStep
                          formData={formData}
                          errors={errors}
                          handleChange={handleChange}
                          nights={nights}
                        />
                      )}

                      {step === 4 && (
                        <CareStep
                          formData={formData}
                          errors={errors}
                          handleChange={handleChange}
                        />
                      )}

                      {step === 5 && (
                        <ReviewStep
                          formData={formData}
                          errors={errors}
                          handleChange={handleChange}
                          room={selectedRoom}
                          nights={nights}
                          estimatedTotal={estimatedTotal}
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* ================= NAVIGATION ================= */}

                  <div className="mt-10 flex items-center justify-between border-t border-[#29251f]/10 pt-7">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={previousStep}
                        className="group inline-flex items-center gap-3 text-[12px] font-semibold text-[#655d55]"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#29251f]/10 transition-colors group-hover:bg-[#29251f] group-hover:text-white">
                          <FiArrowLeft />
                        </span>
                        Back
                      </button>
                    ) : (
                      <span />
                    )}

                    {step < steps.length ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="group inline-flex items-center gap-4 rounded-full bg-[#29251f] py-2 pl-6 pr-2 text-[12px] font-semibold text-white"
                      >
                        Continue
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2e8da] text-[#29251f] transition-transform duration-300 group-hover:translate-x-1">
                          <FiArrowRight />
                        </span>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-4 rounded-full bg-[#29251f] py-2 pl-6 pr-2 text-[12px] font-semibold text-white"
                      >
                        Send on WhatsApp
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c9ae8a] text-[#29251f] transition-transform duration-300 group-hover:rotate-6">
                          <FiCheckCircle />
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </form>

              {/* ================= SUMMARY ================= */}

              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="overflow-hidden rounded-[28px] bg-[#29251f] p-6 text-white sm:p-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#c9ae8a]">
                        Your stay
                      </p>

                      <h2 className="mt-2 text-[24px] font-medium tracking-[-0.035em]">
                        Booking summary
                      </h2>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.08]">
                      <FaCat />
                    </div>
                  </div>

                  <div className="mt-7 space-y-4 border-t border-white/10 pt-6">
                    <SummaryRow
                      label="Cat"
                      value={formData.catName || "Not added"}
                    />

                    <SummaryRow label="Room" value={selectedRoom?.name} />

                    <SummaryRow
                      label="Check-in"
                      value={formatDate(formData.checkIn)}
                    />

                    <SummaryRow
                      label="Check-out"
                      value={formatDate(formData.checkOut)}
                    />

                    <SummaryRow
                      label="Duration"
                      value={
                        nights
                          ? `${nights} night${nights === 1 ? "" : "s"}`
                          : "—"
                      }
                    />
                  </div>

                  <div className="mt-7 rounded-[22px] bg-white/[0.06] p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/45">
                        Room rate
                      </span>

                      <span className="text-[13px]">
                        ₹{selectedRoom?.price}
                        /night
                      </span>
                    </div>

                    <div className="mt-4 flex items-end justify-between border-t border-white/10 pt-4">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                          Estimated total
                        </p>

                        <p className="mt-2 text-[28px] font-medium tracking-[-0.04em]">
                          ₹{estimatedTotal.toLocaleString("en-IN")}
                        </p>
                      </div>

                      <FiHeart className="text-[#c9ae8a]" />
                    </div>
                  </div>

                  <div className="mt-6 flex items-start gap-3">
                    <FiShield className="mt-1 shrink-0 text-[#c9ae8a]" />

                    <p className="text-[10px] leading-5 text-white/40">
                      This is an estimated room price. Final availability and
                      any additional services will be confirmed on WhatsApp
                      before your booking is finalized.
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-[24px] border border-[#29251f]/[0.06] bg-white/45 p-6">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#8c765a]">
                    Need help?
                  </p>

                  <p className="mt-3 text-[13px] leading-6 text-[#70675f]">
                    Not sure which room or service is right for your cat?
                  </p>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-[#29251f]"
                  >
                    WhatsApp us
                    <FiArrowRight />
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

/* =========================================================
   OWNER STEP
========================================================= */

const OwnerStep = ({ formData, errors, handleChange }) => {
  return (
    <>
      <StepHeading
        icon={FiUser}
        eyebrow="About you"
        title="Who should we contact?"
        description="We’ll use these details to discuss availability and confirm your cat’s stay."
      />

      <div className="mt-9 grid gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          placeholder="Your name"
          error={errors.ownerName}
          className="sm:col-span-2"
        />

        <Field
          label="Phone number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91"
          error={errors.phone}
          type="tel"
          icon={FiPhone}
        />

        <Field
          label="Email address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          error={errors.email}
          type="email"
          icon={FiMail}
        />
      </div>
    </>
  );
};

/* =========================================================
   CAT STEP
========================================================= */

const CatStep = ({ formData, errors, handleChange }) => {
  return (
    <>
      <StepHeading
        icon={FaCat}
        eyebrow="Meet your cat"
        title="Tell us who’s staying."
        description="A little information helps us understand their personality and prepare the right environment."
      />

      <div className="mt-9 grid gap-5 sm:grid-cols-2">
        <Field
          label="Cat's name"
          name="catName"
          value={formData.catName}
          onChange={handleChange}
          placeholder="e.g. Milo"
          error={errors.catName}
        />

        <Field
          label="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="e.g. 3 years"
          error={errors.age}
        />

        <SelectField
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          error={errors.gender}
          options={[
            {
              value: "",
              label: "Select gender",
            },
            {
              value: "male",
              label: "Male",
            },
            {
              value: "female",
              label: "Female",
            },
          ]}
        />

        <Field
          label="Breed"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
          placeholder="Optional"
        />

        <TextArea
          label="Personality & temperament"
          name="temperament"
          value={formData.temperament}
          onChange={handleChange}
          placeholder="Shy, playful, affectionate, nervous around strangers, likes quiet spaces..."
          className="sm:col-span-2"
        />
      </div>
    </>
  );
};

/* =========================================================
   STAY STEP
========================================================= */

const StayStep = ({ formData, errors, handleChange, nights }) => {
  return (
    <>
      <StepHeading
        icon={FiHome}
        eyebrow="Plan the stay"
        title="When are they staying?"
        description="Choose your dates and the room that feels right for your cat."
      />

      <div className="mt-9 grid gap-5 sm:grid-cols-2">
        <Field
          label="Check-in"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          type="date"
          error={errors.checkIn}
        />

        <Field
          label="Check-out"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          type="date"
          error={errors.checkOut}
        />
      </div>

      {nights > 0 && (
        <div className="mt-5 rounded-[18px] bg-white/45 px-5 py-4 text-[12px] text-[#655d55]">
          Stay duration:{" "}
          <span className="font-semibold text-[#29251f]">
            {nights} night
            {nights === 1 ? "" : "s"}
          </span>
        </div>
      )}

      <div className="mt-8">
        <p className="text-[11px] font-semibold text-[#29251f]">
          Choose a room
        </p>

        <div className="mt-4 grid gap-3">
          {rooms.map((room) => {
            const selected = formData.room === room.id;

            return (
              <label
                key={room.id}
                className={`cursor-pointer rounded-[22px] border p-5 transition-all duration-300 ${
                  selected
                    ? "border-[#29251f] bg-[#29251f] text-white"
                    : "border-[#29251f]/10 bg-white/35 text-[#29251f] hover:bg-white/60"
                }`}
              >
                <input
                  type="radio"
                  name="room"
                  value={room.id}
                  checked={selected}
                  onChange={handleChange}
                  className="sr-only"
                />

                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[17px] font-semibold">{room.name}</p>

                    <p
                      className={`mt-2 text-[12px] leading-6 ${
                        selected ? "text-white/50" : "text-[#756c63]"
                      }`}
                    >
                      {room.description}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-[19px] font-semibold">₹{room.price}</p>

                    <p
                      className={`mt-1 text-[9px] ${
                        selected ? "text-white/40" : "text-[#918579]"
                      }`}
                    >
                      per night
                    </p>
                  </div>
                </div>
              </label>
            );
          })}
        </div>

        {errors.room && (
          <p className="mt-2 text-[11px] text-red-700">{errors.room}</p>
        )}
      </div>
    </>
  );
};

/* =========================================================
   CARE STEP
========================================================= */

const CareStep = ({ formData, errors, handleChange }) => {
  return (
    <>
      <StepHeading
        icon={FiHeart}
        eyebrow="Care routine"
        title="Help us keep things familiar."
        description="Share feeding, medication and emergency information before your cat arrives."
      />

      <div className="mt-9 grid gap-5">
        <Field
          label="What food does your cat normally eat?"
          name="foodType"
          value={formData.foodType}
          onChange={handleChange}
          placeholder="Brand, wet/dry food, special diet..."
          error={errors.foodType}
        />

        <TextArea
          label="Feeding routine"
          name="feedingRoutine"
          value={formData.feedingRoutine}
          onChange={handleChange}
          placeholder="Example: 8 AM and 7 PM, half cup each meal..."
        />

        <div>
          <label className="text-[11px] font-semibold text-[#29251f]">
            Does your cat require medication?
          </label>

          <div className="mt-3 flex gap-3">
            {[
              {
                value: "no",
                label: "No",
              },
              {
                value: "yes",
                label: "Yes",
              },
            ].map((option) => (
              <label
                key={option.value}
                className={`cursor-pointer rounded-full border px-5 py-3 text-[11px] font-semibold transition-all ${
                  formData.medicationRequired === option.value
                    ? "border-[#29251f] bg-[#29251f] text-white"
                    : "border-[#29251f]/10 bg-white/35 text-[#655d55]"
                }`}
              >
                <input
                  type="radio"
                  name="medicationRequired"
                  value={option.value}
                  checked={formData.medicationRequired === option.value}
                  onChange={handleChange}
                  className="sr-only"
                />

                {option.label}
              </label>
            ))}
          </div>
        </div>

        {formData.medicationRequired === "yes" && (
          <TextArea
            label="Medication details"
            name="medicationDetails"
            value={formData.medicationDetails}
            onChange={handleChange}
            placeholder="Medication name, dose, timing and administration instructions..."
            error={errors.medicationDetails}
          />
        )}

        <TextArea
          label="Special instructions"
          name="specialInstructions"
          value={formData.specialInstructions}
          onChange={handleChange}
          placeholder="Favorite toys, fears, sleeping habits, handling preferences..."
        />

        <div className="mt-2 border-t border-[#29251f]/10 pt-7">
          <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#8c765a]">
            Emergency contact
          </p>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field
              label="Contact name"
              name="emergencyName"
              value={formData.emergencyName}
              onChange={handleChange}
              placeholder="Full name"
              error={errors.emergencyName}
            />

            <Field
              label="Phone number"
              name="emergencyPhone"
              value={formData.emergencyPhone}
              onChange={handleChange}
              placeholder="+91"
              error={errors.emergencyPhone}
              type="tel"
            />
          </div>
        </div>
      </div>
    </>
  );
};

/* =========================================================
   REVIEW STEP
========================================================= */

const ReviewStep = ({
  formData,
  errors,
  handleChange,
  room,
  nights,
  estimatedTotal,
}) => {
  return (
    <>
      <StepHeading
        icon={FiCheckCircle}
        eyebrow="Final review"
        title="Everything look right?"
        description="Review your details before opening the booking request in WhatsApp."
      />

      <div className="mt-9 space-y-4">
        <ReviewCard
          title="Owner"
          rows={[
            ["Name", formData.ownerName],
            ["Phone", formData.phone],
            ["Email", formData.email],
          ]}
        />

        <ReviewCard
          title="Cat"
          rows={[
            ["Name", formData.catName],
            ["Age", formData.age],
            ["Gender", formData.gender],
            ["Breed", formData.breed || "Not specified"],
          ]}
        />

        <ReviewCard
          title="Stay"
          rows={[
            ["Room", room?.name],
            ["Room rate", `₹${room?.price}/night`],
            ["Check-in", formatDate(formData.checkIn)],
            ["Check-out", formatDate(formData.checkOut)],
            ["Duration", `${nights} night${nights === 1 ? "" : "s"}`],
            [
              "Estimated room total",
              `₹${estimatedTotal.toLocaleString("en-IN")}`,
            ],
          ]}
        />

        <ReviewCard
          title="Care"
          rows={[
            ["Food", formData.foodType],
            ["Feeding routine", formData.feedingRoutine || "Not specified"],
            [
              "Medication",
              formData.medicationRequired === "yes"
                ? formData.medicationDetails
                : "None",
            ],
            ["Special instructions", formData.specialInstructions || "None"],
            [
              "Emergency contact",
              `${formData.emergencyName} — ${formData.emergencyPhone}`,
            ],
          ]}
        />
      </div>

      <label className="mt-7 flex cursor-pointer items-start gap-3 rounded-[20px] border border-[#29251f]/10 bg-white/35 p-5">
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          className="mt-1 h-4 w-4 accent-[#29251f]"
        />

        <span className="text-[11px] leading-6 text-[#655d55]">
          I confirm that the information provided above is correct. I understand
          that this is a booking request and final availability, policies and
          charges will be confirmed by Little Paws on WhatsApp.
        </span>
      </label>

      {errors.agree && (
        <p className="mt-2 text-[11px] text-red-700">{errors.agree}</p>
      )}
    </>
  );
};

/* =========================================================
   STEP HEADING
========================================================= */

const StepHeading = ({ icon: Icon, eyebrow, title, description }) => {
  return (
    <div>
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#29251f] text-white">
        <Icon size={16} />
      </div>

      <p className="mt-7 text-[9px] font-semibold uppercase tracking-[0.27em] text-[#8c765a]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-[clamp(2rem,5vw,3.8rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[#29251f]">
        {title}
      </h2>

      <p className="mt-4 max-w-[650px] text-[13px] leading-7 text-[#746b62]">
        {description}
      </p>
    </div>
  );
};

/* =========================================================
   FIELD
========================================================= */

const Field = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  className = "",
  icon: Icon,
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="text-[11px] font-semibold text-[#29251f]"
      >
        {label}
      </label>

      <div className="relative mt-2">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a8d80]" />
        )}

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`h-[54px] w-full rounded-[16px] border bg-white/55 px-4 text-[13px] text-[#29251f] outline-none transition-all placeholder:text-[#a69b90] focus:bg-white ${
            Icon ? "pl-11" : ""
          } ${
            error
              ? "border-red-400"
              : "border-[#29251f]/10 focus:border-[#8c765a]"
          }`}
        />
      </div>

      {error && <p className="mt-2 text-[11px] text-red-700">{error}</p>}
    </div>
  );
};

/* =========================================================
   SELECT FIELD
========================================================= */

const SelectField = ({ label, name, value, onChange, options, error }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[11px] font-semibold text-[#29251f]"
      >
        {label}
      </label>

      <div className="relative mt-2">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`h-[54px] w-full appearance-none rounded-[16px] border bg-white/55 px-4 pr-11 text-[13px] text-[#29251f] outline-none transition-all focus:bg-white ${
            error
              ? "border-red-400"
              : "border-[#29251f]/10 focus:border-[#8c765a]"
          }`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#81766b]" />
      </div>

      {error && <p className="mt-2 text-[11px] text-red-700">{error}</p>}
    </div>
  );
};

/* =========================================================
   TEXT AREA
========================================================= */

const TextArea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  className = "",
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="text-[11px] font-semibold text-[#29251f]"
      >
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={5}
        className={`mt-2 w-full resize-none rounded-[18px] border bg-white/55 p-4 text-[13px] leading-6 text-[#29251f] outline-none transition-all placeholder:text-[#a69b90] focus:bg-white ${
          error
            ? "border-red-400"
            : "border-[#29251f]/10 focus:border-[#8c765a]"
        }`}
      />

      {error && <p className="mt-2 text-[11px] text-red-700">{error}</p>}
    </div>
  );
};

/* =========================================================
   REVIEW CARD
========================================================= */

const ReviewCard = ({ title, rows }) => {
  return (
    <div className="rounded-[22px] border border-[#29251f]/[0.07] bg-white/40 p-5">
      <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8c765a]">
        {title}
      </p>

      <div className="mt-4 space-y-3">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-start justify-between gap-6">
            <span className="text-[11px] text-[#8e8378]">{label}</span>

            <span className="max-w-[65%] text-right text-[12px] font-medium text-[#29251f]">
              {value || "—"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================================================
   SUMMARY ROW
========================================================= */

const SummaryRow = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between gap-5">
      <span className="text-[10px] text-white/40">{label}</span>

      <span className="text-right text-[11px] font-medium text-white/75">
        {value || "—"}
      </span>
    </div>
  );
};

/* =========================================================
   DATE FORMAT
========================================================= */

const formatDate = (date) => {
  if (!date) {
    return "—";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
};

export default Booking;
