import { motion } from "framer-motion";
import Container from "../components/common/Container";

const PINK = "#E8194B";
const ORANGE = "#F06A00";
const GREEN = "#5aaa00";
const VIOLET = "#8B5CF6";

const values = [
  {
    number: "01",
    title: "Compassion",
    desc: "We treat every child with empathy, patience, and genuine care to create a supportive environment.",
    accent: PINK,
    accentBg: "#fff0f3",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 4C8 4 5.5 6 4 8.5c0 0 2 4 7 4s7-4 7-4C16.5 6 14 4 11 4Z" stroke={PINK} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M11 4V2M7.5 5L6 3.5M14.5 5L16 3.5M4 8.5H2M20 8.5h-2" stroke={PINK} strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="11" cy="9" r="2" stroke={PINK} strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Individualized Care",
    desc: "Every child is unique, and we tailor our therapy plans to fit their specific needs and strengths.",
    accent: ORANGE,
    accentBg: "#fff5ee",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="7" stroke={ORANGE} strokeWidth="1.6" />
        <circle cx="11" cy="11" r="2.5" stroke={ORANGE} strokeWidth="1.6" />
        <path d="M11 4V2M11 20v-2M4 11H2M20 11h-2" stroke={ORANGE} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M6.3 6.3l-1.4-1.4M17.1 17.1l-1.4-1.4M6.3 15.7l-1.4 1.4M17.1 4.9l-1.4 1.4" stroke={ORANGE} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Integrity",
    desc: "We are committed to transparency, honesty, and ethical practices in everything we do.",
    accent: GREEN,
    accentBg: "#f2faeb",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3L4 7v5c0 4.4 3 8.5 7 9.5 4-1 7-5.1 7-9.5V7L11 3Z" stroke={GREEN} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8 11l2 2 4-4" stroke={GREEN} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Collaboration",
    desc: "We work closely with families, caregivers, and educators to ensure consistent progress.",
    accent: VIOLET,
    accentBg: "#f3f0ff",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="8" cy="7" r="3" stroke={VIOLET} strokeWidth="1.6" />
        <circle cx="15" cy="8.5" r="2.5" stroke={VIOLET} strokeWidth="1.6" />
        <path d="M2 18c0-3 2.7-5 6-5s6 2 6 5" stroke={VIOLET} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M16 14c2 0 4 1.2 4 4" stroke={VIOLET} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

const easeOut = [0.16, 1, 0.3, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: easeOut,
    },
  }),
};

function ValueCard({ item, i }) {
  return (
    <motion.div
      custom={i}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{
        y: -8,
        transition: { duration: 0.28, ease: "easeOut" },
      }}
      style={{
        background: "#ffffff",
        borderRadius: 20,
        border: "1.5px solid #f0eff0",
        padding: "28px 24px 26px",
        display: "flex",
        flexDirection: "column",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Accent top bar */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: item.accent,
          borderRadius: "20px 20px 0 0",
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: i * 0.12 + 0.3,
          duration: 0.5,
          ease: "easeOut",
        }}
      />

      {/* Number + Icon */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 20,
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: item.accent,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {item.number}
        </span>
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: 12,
            background: item.accentBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item.icon}
        </div>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: 17,
          fontWeight: 700,
          color: "#111111",
          margin: "0 0 10px",
          lineHeight: 1.25,
          letterSpacing: "-0.02em",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {item.title}
      </h3>

      {/* Desc */}
      <p
        style={{
          fontSize: 14,
          color: "#6b7280",
          margin: 0,
          lineHeight: 1.65,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {item.desc}
      </p>

      {/* Bottom accent line */}
      <motion.div
        style={{
          marginTop: 22,
          height: 3,
          borderRadius: 4,
          maxWidth: 44,
          background: item.accent,
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: i * 0.12 + 0.5,
          duration: 0.45,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );
}

function CoreValues() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#ffffff", fontFamily: "'Inter', sans-serif" }}
    >
      {/* Decorative blurs */}
      <div
        className="absolute top-0 right-[15%] w-72 h-72 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: VIOLET }}
      />
      <div
        className="absolute bottom-0 left-[10%] w-64 h-64 rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: ORANGE }}
      />

      <Container className="relative py-16 md:py-28">
        {/* Heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <motion.span
            style={{
              display: "inline-block",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: PINK,
              textTransform: "uppercase",
              marginBottom: 14,
              fontFamily: "'Inter', sans-serif",
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            What drives us
          </motion.span>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 4.75rem)",
              fontWeight: 800,
              color: "#0f0f0f",
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              margin: "0 0 22px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Our Core{" "}
            <span style={{ color: PINK }}>Values</span>
          </h2>

          <p
            style={{
              fontSize: 18,
              color: "#6b7280",
              lineHeight: 1.7,
              maxWidth: 480,
              margin: "0 auto",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Our work is guided by strong values that shape every
            interaction, every decision, and every success story.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 20,
          }}
        >
          {values.map((item, i) => (
            <ValueCard key={i} item={item} i={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CoreValues;