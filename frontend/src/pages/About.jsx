import { motion } from "framer-motion";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";
import Insurance from "../sections/Insurance";

const PINK = "#E8194B";
const ORANGE = "#F06A00";
const GREEN = "#5aaa00";
const VIOLET = "#8B5CF6";
const easeOut = [0.16, 1, 0.3, 1];

const missionItems = [
  {
    number: "01",
    title: "Our Mission",
    desc: "To empower children with autism through personalized ABA therapy and help them achieve meaningful growth.",
    accent: ORANGE,
    accentBg: "#fff5ee",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke={ORANGE} strokeWidth="1.6" />
        <circle cx="11" cy="11" r="4" stroke={ORANGE} strokeWidth="1.6" />
        <circle cx="11" cy="11" r="1" fill={ORANGE} />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Our Vision",
    desc: "To create a future where every child has the support and opportunity to thrive independently.",
    accent: VIOLET,
    accentBg: "#f3f0ff",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M2 11s3.5-7 9-7 9 7 9 7-3.5 7-9 7S2 11 2 11Z" stroke={VIOLET} strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="11" cy="11" r="3" stroke={VIOLET} strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Our Commitment",
    desc: "We are committed to delivering compassionate care and measurable results for every family.",
    accent: GREEN,
    accentBg: "#f2faeb",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3L4 7v5c0 4.4 3 8.5 7 9.5 4-1 7-5.1 7-9.5V7L11 3Z" stroke={GREEN} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8 11l2 2 4-4" stroke={GREEN} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const servicesList = [
  "Communication & Language Development",
  "Social Interaction Skills",
  "Behavior Management",
  "Play & Learning Skills",
];

function About() {
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
        {/* Grid texture */}
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
        {/* Blurs */}
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
              About us
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
            About BrightPath{" "}
            <span style={{ color: "rgba(255,255,255,0.85)" }}>Autism LLC</span>
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
            Providing compassionate, evidence-based ABA therapy to help
            children with autism grow, communicate, and thrive.
          </motion.p>
        </Container>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section className="py-16 md:py-24 bg-white">
        <Container className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                height: 3,
                width: 48,
                borderRadius: 4,
                background: PINK,
                transformOrigin: "left",
                marginBottom: 20,
              }}
            />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeOut }}
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 800,
                color: "#0f0f0f",
                letterSpacing: "-0.035em",
                lineHeight: 1.15,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Who We Are
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeOut, delay: 0.15 }}
              style={{
                marginTop: 24,
                fontSize: 15.5,
                color: "#6b7280",
                lineHeight: 1.75,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <p>
                BrightPath Autism LLC is a dedicated provider of Applied
                Behavior Analysis (ABA) therapy services in the United States,
                focused on helping children with Autism Spectrum Disorder (ASD)
                achieve meaningful and lasting progress.
              </p>
              <p style={{ marginTop: 16 }}>
                Our approach is rooted in evidence-based practices,
                compassionate care, and a deep understanding that every child
                is unique. We specialize in building communication, social
                interaction, behavior regulation, and learning skills that
                empower children to thrive.
              </p>
              <p style={{ marginTop: 16 }}>
                Our team works closely with families to create personalized
                therapy plans and provide ongoing support for long-term success.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl group">
              <img
                src="/about/about1.jpg"
                alt="ABA therapy child learning"
                className="w-full h-[320px] md:h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `linear-gradient(to top, ${PINK}15, transparent 60%)`,
                }}
              />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ─── SERVICES OVERVIEW ─── */}
      <section className="py-16 md:py-24" style={{ background: "#FAFAF8" }}>
        <Container className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl group">
              <img
                src="/about/about2.jpg"
                alt="Autism therapy session"
                className="w-full h-[320px] md:h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `linear-gradient(to top, ${GREEN}15, transparent 60%)`,
                }}
              />
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                height: 3,
                width: 48,
                borderRadius: 4,
                background: GREEN,
                transformOrigin: "left",
                marginBottom: 20,
              }}
            />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeOut }}
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 800,
                color: "#0f0f0f",
                letterSpacing: "-0.035em",
                lineHeight: 1.15,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Our Services Overview
            </motion.h2>

            <motion.ul
              className="mt-8 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeOut, delay: 0.15 }}
            >
              {servicesList.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <div
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: "#f2faeb" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2.5 6l2.5 2.5 4.5-5"
                        stroke={GREEN}
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: 15.5,
                      color: "#374151",
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-8"
            >
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                style={{
                  color: PINK,
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = "10px")}
                onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
              >
                Learn More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
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
          </div>
        </Container>
      </section>
       {/* ─── MISSION / VISION ─── */}
      <section className="py-16 md:py-28 bg-white relative overflow-hidden">
        {/* Decorative blurs */}
        <div
          className="absolute top-10 right-[10%] w-72 h-72 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
          style={{ background: VIOLET }}
        />
        <div
          className="absolute bottom-10 left-[10%] w-64 h-64 rounded-full opacity-[0.07] blur-3xl pointer-events-none"
          style={{ background: ORANGE }}
        />

        <Container className="relative">
          {/* Section Heading - 4.75rem */}
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
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
              Our foundation
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
                fontSize: 18,
                color: "#6b7280",
                lineHeight: 1.7,
                maxWidth: 480,
                margin: "0 auto",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Everything we do is guided by purpose, driven by care.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 22,
            }}
          >
            {missionItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.14,
                  duration: 0.6,
                  ease: easeOut,
                }}
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
            ))}
          </div>
        </Container>
      </section>

      <Insurance />

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

export default About;