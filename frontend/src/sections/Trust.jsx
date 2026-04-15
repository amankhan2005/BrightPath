import { motion } from "framer-motion";
import Container from "../components/common/Container";

const PINK = "#E8194B";
const GREEN = "#5aaa00";

const items = [
  {
    number: "01",
    title: "Certified ABA Therapists",
    desc: "Our team includes trained and certified professionals dedicated to delivering high-quality therapy.",
    accent: PINK,
    accentBg: "#fff0f3",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="7" r="4" stroke={PINK} strokeWidth="1.6" />
        <path d="M3 19c0-4 3.6-7 8-7s8 3 8 7" stroke={PINK} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M15 10l1.5 1.5L19 9" stroke={PINK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Personalized Care Plans",
    desc: "Every child receives a customized therapy plan tailored to their unique strengths and needs.",
    accent: "#F06A00",
    accentBg: "#fff5ee",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="4" y="3" width="14" height="16" rx="2" stroke="#F06A00" strokeWidth="1.6" />
        <path d="M8 8h6M8 12h6M8 16h4" stroke="#F06A00" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="15" cy="15" r="3.5" fill="#fff5ee" stroke="#F06A00" strokeWidth="1.4" />
        <path d="M14 15l.8.8L16.2 14" stroke="#F06A00" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Family-Centered Approach",
    desc: "We actively involve parents and caregivers to ensure consistent progress at home and beyond.",
    accent: GREEN,
    accentBg: "#f2faeb",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="8" cy="7" r="3" stroke={GREEN} strokeWidth="1.6" />
        <circle cx="15" cy="8.5" r="2.5" stroke={GREEN} strokeWidth="1.6" />
        <path d="M2 18c0-3 2.7-5 6-5s6 2 6 5" stroke={GREEN} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M16 14c2 0 4 1.2 4 4" stroke={GREEN} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Safe & Supportive Environment",
    desc: "We create a positive, structured environment where children feel comfortable to learn and grow.",
    accent: "#8B5CF6",
    accentBg: "#f3f0ff",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3L4 6v5c0 4.4 3 8.5 7 9.5 4-1 7-5.1 7-9.5V6L11 3z" stroke="#8B5CF6" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8 11l2 2 4-4" stroke="#8B5CF6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.13,
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function TrustCard({ item, i }) {
  return (
    <motion.div
      custom={i}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      style={{
        background: "#ffffff",
        borderRadius: 20,
        border: "1.5px solid #f0eff0",
        padding: "28px 24px 26px",
        display: "flex",
        flexDirection: "column",
        gap: 0,
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
        transition={{ delay: i * 0.13 + 0.3, duration: 0.45, ease: "easeOut" }}
      />

      {/* Number + icon row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
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
          fontFamily: "'Inter', sans-serif",
          letterSpacing: "-0.02em",
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
    </motion.div>
  );
}

function Trust() {
  return (
    <section
      className="py-16 md:py-28"
      style={{ background: "#FAFAF8", fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`}</style>
      <Container>

        {/* Heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
            Why choose us
          </motion.span>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 4.75rem)",
              fontWeight: 800,
              color: "#0f0f0f",
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              margin: "0 0 26px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Why families trust{" "}
            <span style={{ color: PINK }}>BrightPath Autism</span>
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
            Quality care, personalized support, and meaningful progress for every child.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            marginTop: 52,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 20,
          }}
        >
          {items.map((item, i) => (
            <TrustCard key={i} item={item} i={i} />
          ))}
        </div>

      </Container>
    </section>
  );
}

export default Trust;