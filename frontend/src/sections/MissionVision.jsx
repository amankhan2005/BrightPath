 import { motion } from "framer-motion";
import Container from "../components/common/Container";

const PINK = "#E8194B";
const ORANGE = "#F06A00";
const GREEN = "#5aaa00";

const items = [
  {
    number: "01",
    label: "Purpose",
    title: "Our Mission",
    desc: "To empower children with autism through personalized ABA therapy, helping them develop essential life skills and achieve meaningful progress.",
    accent: PINK,
    accentBg: "#fff0f3",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke={PINK} strokeWidth="1.6" />
        <circle cx="12" cy="12" r="5" stroke={PINK} strokeWidth="1.6" />
        <circle cx="12" cy="12" r="1.5" fill={PINK} />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke={PINK} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "Future",
    title: "Our Vision",
    desc: "To create a future where every child with autism has the support, confidence, and opportunities to thrive independently.",
    accent: ORANGE,
    accentBg: "#fff5ee",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"
          stroke={ORANGE}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" stroke={ORANGE} strokeWidth="1.6" />
        <path d="M12 9v0" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "Promise",
    title: "Our Commitment",
    desc: "We are committed to delivering compassionate care, measurable results, and continuous support for both children and their families.",
    accent: GREEN,
    accentBg: "#f2faeb",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
          stroke={GREEN}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M8 11l2 2 4-4" stroke={GREEN} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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
      delay: i * 0.14,
      duration: 0.6,
      ease: easeOut,
    },
  }),
};

function MVCard({ item, i }) {
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
        borderRadius: 22,
        border: "1.5px solid #f0eff0",
        padding: "32px 28px 28px",
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
          borderRadius: "22px 22px 0 0",
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: i * 0.14 + 0.3,
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
          marginBottom: 22,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: item.accent,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {item.label}
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: "#d1d5db",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            {item.number}
          </span>
        </div>

        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 14,
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
          fontSize: 19,
          fontWeight: 800,
          color: "#111111",
          margin: "0 0 12px",
          lineHeight: 1.25,
          letterSpacing: "-0.025em",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {item.title}
      </h3>

      {/* Desc */}
      <p
        style={{
          fontSize: 14.5,
          color: "#6b7280",
          margin: 0,
          lineHeight: 1.7,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {item.desc}
      </p>

      {/* Bottom accent line */}
      <motion.div
        style={{
          marginTop: 24,
          height: 3,
          borderRadius: 4,
          maxWidth: 48,
          background: item.accent,
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: i * 0.14 + 0.5,
          duration: 0.45,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );
}

function MissionVision() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#FAFAF8", fontFamily: "'Inter', sans-serif" }}
    >
      {/* Decorative blurs */}
      <div
        className="absolute top-10 left-[10%] w-72 h-72 rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: PINK }}
      />
      <div
        className="absolute bottom-10 right-[10%] w-64 h-64 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: GREEN }}
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
            Who we are
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
              Mission, Vision &{" "}
              <span style={{ color: PINK }}>Commitment</span>
            </h2>

          <p
            style={{
              fontSize: 17,
              color: "#6b7280",
              lineHeight: 1.7,
              maxWidth: 460,
              margin: "0 auto",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Everything we do is guided by purpose, driven by care, and
            focused on your child's success.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 22,
          }}
        >
          {items.map((item, i) => (
            <MVCard key={i} item={item} i={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default MissionVision;