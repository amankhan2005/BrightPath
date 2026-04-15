import { motion } from "framer-motion";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";

const PINK = "#E8194B";
const ORANGE = "#F06A00";
const GREEN = "#5aaa00";
const VIOLET = "#8B5CF6";

const services = [
  {
    id: "communication",
    number: "01",
    label: "Service",
    title: "Communication & Language Development",
    desc: "Communication is a foundational skill that shapes how children interact with the world. Our ABA therapy programs focus on helping children improve both verbal and non-verbal communication. We guide children to express needs, follow instructions, and build meaningful conversations.",
    desc2: "Each therapy plan is personalized based on the child's abilities and goals. We also work closely with families to ensure communication skills are reinforced at home, leading to consistent and lasting progress.",
    accent: PINK,
    accentBg: "#fff0f3",
    image: "/service/communication.jpg",
    imageAlt: "Communication therapy session",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" stroke={PINK} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M19 10v1a7 7 0 0 1-14 0v-1" stroke={PINK} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 18v4M8 22h8" stroke={PINK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "social",
    number: "02",
    label: "Service",
    title: "Social Interaction Skills",
    desc: "Social interaction can be challenging for children with autism. Our structured ABA therapy helps children learn essential social behaviors like eye contact, turn-taking, and understanding social cues.",
    desc2: "We create supportive environments where children can practice real-life interactions. This helps build confidence, improve relationships, and develop emotional understanding over time.",
    accent: ORANGE,
    accentBg: "#fff5ee",
    image: "/service/social.jpg",
    imageAlt: "Social skills group therapy",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="3" stroke={ORANGE} strokeWidth="1.6" />
        <circle cx="17" cy="7" r="2.5" stroke={ORANGE} strokeWidth="1.6" />
        <path d="M2 20c0-3.5 3.1-6 7-6s7 2.5 7 6" stroke={ORANGE} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M17.5 14c2.5.5 4.5 2.3 4.5 6" stroke={ORANGE} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "behavior",
    number: "03",
    label: "Service",
    title: "Behavior Management",
    desc: "Our behavior management programs focus on understanding and improving challenging behaviors. Using ABA techniques, we identify triggers and replace negative behaviors with positive alternatives.",
    desc2: "We work closely with families to ensure consistency across home and therapy settings. This helps children develop better focus, emotional regulation, and independence.",
    accent: GREEN,
    accentBg: "#f2faeb",
    image: "/service/behavior.jpg",
    imageAlt: "Behavior management therapy",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke={GREEN} strokeWidth="1.6" />
        <path d="M8 12l3 3 5-6" stroke={GREEN} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "play",
    number: "04",
    label: "Service",
    title: "Play & Learning Skills",
    desc: "Play is a powerful way for children to learn and grow. Our play-based ABA therapy helps develop cognitive, attention, and problem-solving skills in an engaging way.",
    desc2: "We use structured activities that promote independence, focus, and creativity. This approach ensures children enjoy learning while building essential life skills.",
    accent: VIOLET,
    accentBg: "#f3f0ff",
    image: "/service/play.jpg",
    imageAlt: "Play-based learning session",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5Z" stroke={VIOLET} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" stroke={VIOLET} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" stroke={VIOLET} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const easeOut = [0.16, 1, 0.3, 1];

function ServiceBlock({ service, index }) {
  const isReversed = index % 2 !== 0;

  return (
    <section
      id={service.id}
className="pt-10 pb-16 md:pt-14 md:pb-20"
      style={{ background: index % 2 === 0 ? "#ffffff" : "#FAFAF8" }}
    >
      <Container>
        <div
          className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
          style={{ direction: isReversed ? "rtl" : "ltr" }}
        >
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              ease: easeOut,
              delay: 0.1,
            }}
            style={{ direction: "ltr" }}
          >
            <div className="relative overflow-hidden rounded-2xl group">
              <img
                src={service.image}
                alt={service.imageAlt}
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Accent overlay gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(to top, ${service.accent}15, transparent 60%)`,
                }}
              />
            </div>

            {/* Floating number badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 md:-bottom-5 md:-right-5 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: service.accent }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: easeOut,
                delay: 0.4,
              }}
            >
              <span
                className="text-white font-extrabold text-lg md:text-xl"
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.02em" }}
              >
                {service.number}
              </span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            style={{ direction: "ltr" }}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.65,
              ease: easeOut,
              delay: 0.2,
            }}
          >
            {/* Label row */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: service.accentBg }}
              >
                {service.icon}
              </div>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{
                  color: service.accent,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {service.label}
              </span>
            </div>

            {/* Title */}
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight"
              style={{
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "-0.03em",
              }}
            >
              {service.title}
            </h2>

            {/* Description */}
            <div className="mt-6 space-y-4">
              <p
                className="text-neutral-600 leading-relaxed text-[15px] md:text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {service.desc}
              </p>
              <p
                className="text-neutral-500 leading-relaxed text-[15px] md:text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {service.desc2}
              </p>
            </div>

            {/* Accent underline */}
            <motion.div
              className="mt-8 h-[3px] rounded-full"
              style={{
                maxWidth: 64,
                background: service.accent,
              }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.5,
              }}
            />

            {/* CTA Link */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Link
                to={`/services `}
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                style={{
                  color: service.accent,
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.gap = "10px")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.gap = "8px")
                }
              >
                Learn more
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{ transition: "transform 0.2s ease" }}
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');`}
      </style>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        
    
<Container className="relative pt-20 pb-6 md:pt-20 md:pb-8 text-center">
              <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.12em] mb-5"
              style={{ color: PINK, fontFamily: "'Inter', sans-serif" }}
            >
              What we offer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            className="text-neutral-900 leading-[1.08]"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Our ABA Therapy{" "}
            <span style={{ color: PINK }}>Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.25 }}
            className="mt-7 text-neutral-500 max-w-xl mx-auto leading-relaxed text-base md:text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
          Helping children with autism build communication, behavior, and social skills through personalized ABA therapy.
          </motion.p>

           
        </Container>
      </section>

      {/* ─── SERVICE BLOCKS ─── */}
      {services.map((service, index) => (
        <ServiceBlock
          key={service.id}
          service={service}
          index={index}
        />
      ))}

       
    </div>
  );
}

export default Services;