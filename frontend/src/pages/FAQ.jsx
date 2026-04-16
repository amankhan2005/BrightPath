import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";

const PINK = "#E8194B";
const easeOut = [0.16, 1, 0.3, 1];

const faqs = [
  {
    question: "What is ABA therapy?",
    answer:
      "Applied Behavior Analysis (ABA) therapy is an evidence-based approach that helps children with autism improve communication, social skills, and behavior. It focuses on reinforcing positive behaviors and reducing challenges through structured techniques.",
  },
  {
    question: "How do I know if my child needs ABA therapy?",
    answer:
      "If your child has been diagnosed with Autism Spectrum Disorder or shows delays in communication, behavior, or social interaction, ABA therapy can be highly beneficial. A professional assessment helps determine the right plan.",
  },
  {
    question: "Do you offer personalized therapy plans?",
    answer:
      "Yes, every child receives a fully customized therapy plan based on their strengths, challenges, and developmental goals to ensure meaningful progress.",
  },
  {
    question: "Do you involve parents in the therapy process?",
    answer:
      "Absolutely. We work closely with parents and caregivers, providing guidance and strategies to support the child’s development at home and in daily life.",
  },
  {
    question: "How long does ABA therapy take?",
    answer:
      "The duration varies depending on the child’s needs and goals. Some children benefit from a few months of therapy, while others may require longer-term support.",
  },
  {
    question: "What skills can ABA therapy improve?",
    answer:
      "ABA therapy can help improve communication, social interaction, behavior management, attention, learning skills, and daily living abilities.",
  },
];

function FAQItem({ faq, index, isActive, onToggle }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: easeOut, delay: index * 0.06 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        background: isActive ? "#ffffff" : isHovered ? "#fdfdfd" : "transparent",
        borderRadius: 18,
        border: isActive ? "1.5px solid #f0eff0" : "1.5px solid transparent",
        overflow: "hidden",
        transition: "background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
        boxShadow: isActive 
          ? "0 8px 30px rgba(232, 25, 75, 0.06), 0 4px 12px rgba(0,0,0,0.03)" 
          : isHovered 
          ? "0 2px 10px rgba(0,0,0,0.02)" 
          : "none",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Animated Left Accent Bar */}
      <motion.div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: PINK,
          borderRadius: "0 4px 4px 0",
          transformOrigin: "top",
        }}
        animate={{ scaleY: isActive ? 1 : 0 }}
        transition={{ duration: 0.35, ease: easeOut }}
      />

      <div style={{ padding: isActive ? "24px 28px" : "16px 28px", transition: "padding 0.35s ease" }}>
        <button
          onClick={onToggle}
          className="w-full flex items-center text-left bg-transparent border-none outline-none cursor-pointer"
          style={{ padding: 0, gap: 16, display: "flex", alignItems: "center" }}
        >
          {/* Number */}
          <span
            style={{
              fontSize: 14,
              fontWeight: 800,
              minWidth: 32,
              color: isActive ? PINK : "#d1d5db",
              transition: "color 0.3s ease",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Question Text */}
          <span
            style={{
              flex: 1,
              fontSize: isActive ? 18 : 17,
              fontWeight: isActive ? 700 : 600,
              color: isActive ? "#111111" : "#374151",
              transition: "color 0.2s ease, font-size 0.2s ease",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.01em",
              lineHeight: 1.5,
            }}
          >
            {faq.question}
          </span>

          {/* Circular Toggle Icon */}
          <motion.div
            animate={{
              background: isActive ? PINK : isHovered ? "#f3f4f6" : "#f9fafb",
              rotate: isActive ? 180 : 0,
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              border: isActive ? "none" : "1.5px solid #f0eff0",
              transition: "border 0.3s ease",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              style={{
                transition: "stroke 0.3s ease",
                stroke: isActive ? "#ffffff" : "#9ca3af",
              }}
            >
              <path
                d="M4.5 6.75l4.5 4.5 4.5-4.5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </button>

        {/* Answer Section */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 20 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{
                height: { duration: 0.4, ease: easeOut },
                opacity: { duration: 0.3, ease: "easeOut", delay: 0.05 },
              }}
              style={{ overflow: "hidden", paddingLeft: 48 }}
            >
              <p
                style={{
                  fontSize: 15.5,
                  color: "#6b7280",
                  lineHeight: 1.8,
                  fontFamily: "'Inter', sans-serif",
                  paddingBottom: 4,
                }}
              >
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');`}
      </style>

      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #E8194B 0%, #c4123d 50%, #a00e32 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none bg-white" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none bg-[#ff6b8a]" />

        <Container className="relative pt-24 pb-16 md:pt-36 md:pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.12em] mb-5"
              style={{
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "6px 16px",
                borderRadius: 100,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Common questions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            className="leading-[1.08]"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4.75rem)",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.04em",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Frequently Asked{" "}
            <span style={{ color: "rgba(255,255,255,0.85)" }}>Questions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.25 }}
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7,
              maxWidth: 560,
              margin: "24px auto 0",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Find answers to common questions about ABA therapy and how we
            support your child’s development.
          </motion.p>
        </Container>
      </section>

      {/* ─── FAQ ACCORDION ─── */}
      <section
        className="relative overflow-hidden py-16 md:py-28"
        style={{ background: "#FAFAF8" }}
      >
        <div
          className="absolute top-20 left-[10%] w-72 h-72 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
          style={{ background: PINK }}
        />
        <div
          className="absolute bottom-20 right-[10%] w-64 h-64 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
          style={{ background: "#5aaa00" }}
        />

        <Container className="relative max-w-3xl">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isActive={activeIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #E8194B 0%, #c4123d 50%, #a00e32 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none bg-[#ff6b8a]" />
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none bg-white" />

       
        <Container className="relative py-20 md:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.12em] mb-5"
              style={{
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "6px 16px",
                borderRadius: 100,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Get started
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            style={{
              fontSize: "clamp(2rem, 4vw, 4.75rem)",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.035em",
              lineHeight: 1.08,
              margin: "0 0 24px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Start Your Child's{" "}
            <span style={{ color: "rgba(255,255,255,0.85)" }}>Journey Today</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.25 }}
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7,
              maxWidth: 520,
              margin: "0 auto",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Contact us today to learn how our ABA therapy services can support your child’s growth and success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <a
              href="tel:+14109003895"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[1.04] active:scale-[0.98]"
              style={{
                background: "#ffffff",
                color: PINK,
                fontFamily: "'Inter', sans-serif",
                boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mr-2">
                <path d="M3.62 1.5h2.76l1.42 3.5-1.72 1.2a10.36 10.36 0 0 0 4.72 4.72l1.2-1.72 3.5 1.42v2.76a1.12 1.12 0 0 1-1.1 1.12C7.78 14.2 1.8 8.22 1.5 2.6A1.12 1.12 0 0 1 3.62 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Call Now
            </a>

            <Link
              to="/contact-us"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[1.04] active:scale-[0.98]"
              style={{
                border: "1.5px solid rgba(255,255,255,0.35)",
                color: "#ffffff",
                background: "rgba(255,255,255,0.08)",
                fontFamily: "'Inter', sans-serif",
                backdropFilter: "blur(4px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.color = PINK;
                e.currentTarget.style.borderColor = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
              }}
            >
              Book Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-2">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

        
        </Container>
      </section>
    </div>
  );
}

export default FAQ;