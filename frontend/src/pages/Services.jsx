import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";

const PINK = "#E8194B";
const easeOut = [0.16, 1, 0.3, 1];

const services = [
  {
    id: 1,
    title1: "Communication & Language",
    title2: "Development",
    desc: "Communication is a foundational skill that shapes how children interact with the world around them. At BrightPath Autism LLC, our communication and language development programs are designed to help children with autism improve both verbal and non-verbal communication skills using evidence-based ABA therapy techniques.",
    extra: [
      "Expressive and receptive language building",
      "Augmentative and alternative communication (AAC)",
      "Functional communication training for daily needs",
      "Parent-coaching for consistent home reinforcement",
    ],
    img: "/service/communication.jpg",
  },
  {
    id: 2,
    title1: "Social Interaction",
    title2: "Skills",
    desc: "Social interaction can be challenging for children with autism, but with the right guidance, these skills can be developed effectively. Our social skills programs focus on helping children build meaningful connections with peers, family members, and others in their environment through structured ABA therapy sessions.",
    extra: [
      "Eye contact and non-verbal cue recognition",
      "Turn-taking and cooperative play strategies",
      "Group dynamic integration and practice",
      "Emotional regulation in social settings",
    ],
    img: "/service/social.jpg",
  },
  {
    id: 3,
    title1: "Behavior",
    title2: "Management",
    desc: "Managing challenging behaviors is a key part of helping children with autism succeed in daily life. Our behavior management programs focus on identifying the root causes of behaviors and implementing positive, sustainable strategies to address them effectively using proven ABA techniques.",
    extra: [
      "Functional behavior assessments (FBA)",
      "Positive behavior intervention plans (PBIP)",
      "Reduction of tantrums and aggression triggers",
      "Self-monitoring and independence skill building",
    ],
    img: "/service/behavior.jpg",
  },
  {
    id: 4,
    title1: "Play & Learning",
    title2: "Skills",
    desc: "Play is an essential part of learning and development. Our play-based ABA therapy programs help children develop cognitive, attention, and problem-solving skills in a fun and engaging way, ensuring they build confidence while reinforcing positive behaviors naturally.",
    extra: [
      "Structured play and cognitive skill building",
      "Attention span and task-completion focus",
      "Problem-solving and adaptive learning techniques",
      "Creating a joyful environment for natural growth",
    ],
    img: "/service/play.jpg",
  },
];

function ServiceBlock({ service, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      style={{
        background: index % 2 === 0 ? "#ffffff" : "#FAFAF8",
        fontFamily: "'Inter', sans-serif",
      }}
      className="py-16 md:py-28"
    >
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Image Column */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <div className="relative overflow-hidden rounded-2xl group" style={{ aspectRatio: '4/3' }}>
              <img
                src={service.img}
                alt={`${service.title1} ${service.title2}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(to top, ${PINK}10, transparent 50%)`,
                }}
              />
            </div>
            {/* Decorative number */}
            <div
              className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl flex items-center justify-center -z-10 hidden lg:flex"
              style={{ background: index % 2 === 0 ? "#fff0f3" : "#f3f0ff" }}
            >
              <span style={{ fontSize: 48, fontWeight: 900, color: index % 2 === 0 ? "#E8194B20" : "#8B5CF620", fontFamily: "'Inter', sans-serif" }}>
                {String(service.id).padStart(2, '0')}
              </span>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
          >
            <div style={{ maxWidth: 600 }}>
              {/* Label */}
              <span
                style={{
                  display: "inline-block",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: PINK,
                  textTransform: "uppercase",
                  marginBottom: 16,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Service {String(service.id).padStart(2, '0')}
              </span>

              {/* 4.75rem Black & Pink Heading */}
              <h2
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 4.75rem)",
                  fontWeight: 800,
                  color: "#111111",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.05,
                  marginBottom: 24,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {service.title1}{" "}
                <span style={{ color: PINK }}>
                  {service.title2}
                </span>
              </h2>

              {/* Description */}
              <p
                style={{
                  fontSize: 16,
                  color: "#6b7280",
                  lineHeight: 1.75,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {service.desc}
              </p>

              {/* "Know More" Toggle Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-8 flex items-center gap-2 bg-transparent border-none outline-none cursor-pointer group/btn"
                style={{ padding: 0, fontFamily: "'Inter', sans-serif" }}
              >
                <span
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
                  style={{
                    border: "1.5px solid #f0eff0",
                    background: isExpanded ? PINK : "transparent",
                    color: isExpanded ? "#ffffff" : PINK,
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{
                      transition: "transform 0.3s ease",
                      transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <path
                      d="M8 3v10M3 8h10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#374151",
                    transition: "color 0.2s",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  className="group-hover/btn:text-black"
                >
                  {isExpanded ? "Show Less" : "Know More"}
                </span>
              </button>

              {/* Expandable Content */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, ease: easeOut }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="grid sm:grid-cols-2 gap-4 p-6 rounded-2xl"
                      style={{
                        background: index % 2 === 0 ? "#FAFAF8" : "#ffffff",
                        border: "1.5px solid #f0eff0",
                      }}
                    >
                      {service.extra.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div
                            className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                            style={{ background: "#fff0f3" }}
                          >
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5l2.5 2.5L8 3.5" stroke={PINK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <span
                            style={{
                              fontSize: 14.5,
                              color: "#374151",
                              lineHeight: 1.5,
                              fontWeight: 500,
                              fontFamily: "'Inter', sans-serif",
                            }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}

function Services() {
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
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
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
              What we offer
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
            Our ABA Therapy{" "}
            <span style={{ color: "rgba(255,255,255,0.85)" }}>Services</span>
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
            Personalized ABA therapy programs designed to improve communication, behavior, and social development in children with autism.
          </motion.p>
        </Container>
      </section>

      {/* ─── SERVICE BLOCKS ─── */}
      {services.map((service, index) => (
        <ServiceBlock key={service.id} service={service} index={index} />
      ))}

      {/* ─── BOTTOM CTA ─── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #E8194B 0%, #c4123d 50%, #a00e32 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
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

export default Services;