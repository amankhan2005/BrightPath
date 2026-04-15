import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const COLORS = {
  pink: "#E8194B",
  orange: "#F06A00",
  green: "#5aaa00",
  yellow: "#F5C800",
  magenta: "#C0006A",
};

function Blob({ color, style, delay = 0 }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        background: color,
        opacity: 0.15,
        ...style,
      }}
      animate={{
        borderRadius: [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "30% 60% 70% 40% / 50% 60% 30% 60%",
          "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
        scale: [1, 1.08, 1],
        rotate: [0, 6, 0],
      }}
      transition={{ duration: 9, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function Dot({ x, y, color, size, delay }) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={size}
      fill={color}
      opacity={0.55}
      animate={{ cy: [y, y - 8, y], opacity: [0.55, 0.85, 0.55] }}
      transition={{ duration: 4 + delay, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

const DOTS = [
  { x: 80, y: 60, color: COLORS.pink, size: 5, delay: 0 },
  { x: 160, y: 130, color: COLORS.orange, size: 3, delay: 0.5 },
  { x: 260, y: 50, color: COLORS.yellow, size: 6, delay: 1 },
  { x: 340, y: 140, color: COLORS.green, size: 4, delay: 1.5 },
  { x: 430, y: 70, color: COLORS.magenta, size: 3, delay: 0.8 },
  { x: 510, y: 160, color: COLORS.pink, size: 5, delay: 2 },
  { x: 600, y: 40, color: COLORS.orange, size: 4, delay: 0.3 },
  { x: 680, y: 120, color: COLORS.green, size: 3, delay: 1.2 },
  { x: 750, y: 60, color: COLORS.yellow, size: 6, delay: 0.7 },
  { x: 820, y: 150, color: COLORS.pink, size: 4, delay: 1.8 },
  { x: 900, y: 80, color: COLORS.magenta, size: 5, delay: 0.4 },
  { x: 960, y: 170, color: COLORS.orange, size: 3, delay: 2.2 },
  { x: 1040, y: 55, color: COLORS.green, size: 4, delay: 0.9 },
  { x: 1120, y: 140, color: COLORS.yellow, size: 5, delay: 1.6 },
  { x: 1200, y: 70, color: COLORS.pink, size: 3, delay: 0.2 },
];

function SpectrumBar() {
  return (
    <div className="flex gap-1 items-end h-8 mt-6">
      {[COLORS.pink, COLORS.magenta, COLORS.orange, COLORS.yellow, COLORS.green].map((c, i) => (
        <motion.div
          key={c}
          className="rounded-full w-2"
          style={{ background: c }}
          initial={{ height: 8, opacity: 0 }}
          animate={{
            height: [8, 28 - i * 2, 16, 28, 12, 24][i % 6] || 18,
            opacity: 1,
          }}
          transition={{ delay: 1.2 + i * 0.1, duration: 0.6, ease: "backOut" }}
        />
      ))}
      <motion.span
        className="text-xs font-medium ml-2 self-center"
        style={{ color: "#888", letterSpacing: "0.12em", fontFamily: "'Inter', sans-serif" }}
        initial={{ opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8 }}
      >
        every mind is different
      </motion.span>
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white border border-white/40 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-white/40 focus:outline-none transition-all duration-200 text-sm";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Something went wrong. Please try again.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSuccess(true);
    } catch (err) {
      setError(err.message || "Failed to send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      className="relative rounded-3xl shadow-2xl overflow-hidden w-full"
      style={{ background: COLORS.pink }}
      initial={{ opacity: 0, y: 32, scale: 0.93 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.0, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Glossy top sheen */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "38%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.0) 100%)",
          borderRadius: "inherit",
          zIndex: 1,
        }}
      />

      {/* Ambient gloss orb top-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 260,
          height: 260,
          top: -80,
          left: -60,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.07)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 md:p-9">
        {/* Heading */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15 }}
        >
          <h2
            className="text-xl md:text-2xl font-bold text-white mb-1"
            style={{ letterSpacing: "-0.02em", fontFamily: "'Inter', sans-serif" }}
          >
            Get in Touch
          </h2>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'Inter', sans-serif" }}>
            Our care team typically responds within one business day.
          </p>
        </motion.div>

        {success ? (
          <motion.div
            className="flex flex-col items-center justify-center py-12 gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "backOut" }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold"
              style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
            >
              ✓
            </div>
            <p className="text-white font-semibold text-lg text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
              Thanks! We'll get back to you shortly.
            </p>
            <p
              className="text-center max-w-xs text-sm"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Inter', sans-serif" }}
            >
              A member of our team will reach out to discuss how we can support your family.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-1 text-xs underline"
              style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Inter', sans-serif" }}
            >
              Submit another enquiry
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25 }}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className={inputClass}
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.33 }}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className={inputClass}
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.41 }}>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className={inputClass}
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.49 }}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help? Tell us about your child…"
                rows={4}
                required
                className={inputClass}
                style={{ resize: "none", fontFamily: "'Inter', sans-serif" }}
              />
            </motion.div>

            {error && (
              <motion.p
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Inter', sans-serif" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ⚠ {error}
              </motion.p>
            )}

            <motion.button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-xl bg-white font-semibold text-[15px] transition-all duration-300"
              style={{
                color: COLORS.pink,
                cursor: submitting ? "not-allowed" : "pointer",
                opacity: submitting ? 0.8 : 1,
                fontFamily: "'Inter', sans-serif",
              }}
              whileHover={!submitting ? { scale: 1.02, backgroundColor: "#f3f4f6" } : {}}
              whileTap={!submitting ? { scale: 0.97 } : {}}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.58 }}
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    style={{ color: COLORS.pink }}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending…
                </span>
              ) : (
                "Request Consultation"
              )}
            </motion.button>

            <motion.p
              className="text-center text-xs mt-1"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
            >
              🔒 HIPAA-conscious. Your information is never shared.
            </motion.p>
          </form>
        )}
      </div>
    </motion.div>
  );
}

export default function AutismHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });
  const blobX = useTransform(springX, [0, 1], [-18, 18]);
  const blobY = useTransform(springY, [0, 1], [-14, 14]);

  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative md:min-h-screen flex flex-col justify-center overflow-hidden bg-[#FAFAF8]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');`}</style>

      {/* Dot constellation background */}
      <svg
        className="absolute inset-0 w-full"
        style={{ height: 220, top: 0, opacity: 0.7 }}
        viewBox="0 0 1280 200"
        preserveAspectRatio="xMidYMid slice"
      >
        {DOTS.map((d, i) => <Dot key={i} {...d} />)}
        {[
          [80, 60, 160, 130], [160, 130, 260, 50], [260, 50, 340, 140],
          [510, 160, 600, 40], [750, 60, 820, 150], [900, 80, 960, 170],
          [1040, 55, 1120, 140], [1120, 140, 1200, 70],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ccc" strokeWidth="0.8" opacity="0.5" />
        ))}
      </svg>

      {/* Blobs */}
      <motion.div style={{ x: blobX, y: blobY }} className="absolute inset-0 pointer-events-none">
        <Blob color={COLORS.pink} delay={0} style={{ width: 420, height: 360, top: "10%", right: "5%" }} />
        <Blob color={COLORS.green} delay={2} style={{ width: 300, height: 280, bottom: "12%", left: "2%" }} />
        <Blob color={COLORS.orange} delay={4} style={{ width: 220, height: 200, top: "55%", right: "18%" }} />
        <Blob color={COLORS.yellow} delay={1.5} style={{ width: 180, height: 160, top: "30%", left: "25%" }} />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-0 pb-0 w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 md:items-stretch">

        {/* Left: text */}
        <div className="text-center md:text-left flex flex-col justify-center py-16 md:py-20">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-8xl leading-[1.08] text-gray-900 mb-5"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "-0.03em" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            You belong{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 600,
                color: COLORS.pink,
              }}
            >
              exactly
            </span>{" "}
            as you are.
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-gray-500 leading-relaxed mx-auto md:mx-0 max-w-md mb-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.55 }}
          >
            BrightPath Autism helps children build confidence, communication, and independence through compassionate, individualized care.
          </motion.p>

          <div className="flex justify-center md:justify-start">
            <SpectrumBar />
          </div>

          <motion.div
            className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
          >
            <motion.a
              href="/contact-us"
              className="px-7 py-3.5 rounded-full text-white font-semibold text-[15px] no-underline"
              style={{ background: COLORS.green, fontFamily: "'Inter', sans-serif" }}
              whileHover={{ scale: 1.04, backgroundColor: "#243a0b" }}
              whileTap={{ scale: 0.97 }}
            >
              Get Support →
            </motion.a>
            <motion.a
              href="/about-us"
              className="px-7 py-3.5 rounded-full font-semibold text-[15px] border border-gray-200 bg-white text-gray-700 no-underline"
              style={{ fontFamily: "'Inter', sans-serif" }}
              whileHover={{ scale: 1.03, borderColor: COLORS.green }}
              whileTap={{ scale: 0.97 }}
            >
              Know More
            </motion.a>
          </motion.div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex flex-col justify-center py-8 md:py-16 mt-6 md:mt-0">
          <ContactForm />
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z" fill="#F0EEE8" opacity="0.6" />
        </svg>
      </div>
    </section>
  );
}