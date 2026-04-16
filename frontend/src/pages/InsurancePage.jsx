import { motion } from "framer-motion";

const PINK = "#E8194B";
const easeOut = [0.16, 1, 0.3, 1];

const logos = [
  "/insurance/aetna.png",
  "/insurance/unitedhealthcare.png",
  "/insurance/optum.png",
  "/insurance/cigna.png",
  "/insurance/bcbs.png",
  "/insurance/medicaid.png",
  "/insurance/kaiser.png",
  "/insurance/tricare.png",
];

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M5 13l4 4L19 7" stroke={PINK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function InsurancePage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
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

        <motion.div
          className="absolute pointer-events-none"
          style={{ top: "15%", left: "8%", width: 12, height: 12, borderRadius: "50%", background: "rgba(255,255,255,0.18)" }}
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute pointer-events-none"
          style={{ top: "25%", right: "12%", width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.14)" }}
          animate={{ y: [6, -10, 6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute pointer-events-none"
          style={{ bottom: "20%", left: "15%", width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.12)" }}
          animate={{ y: [-6, 6, -6], x: [2, -2, 2] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute pointer-events-none"
          style={{ top: "40%", right: "6%", width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }}
          animate={{ y: [5, -7, 5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />

        <div className="relative max-w-7xl mx-auto pt-24 pb-16 md:pt-36 md:pb-24 px-6 text-center">
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
              Insurance & Coverage
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            className="leading-[1.08]"
            style={{
              fontSize: "4.75rem",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.04em",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            ABA Therapy{" "}
            <span className="italic" style={{ color: "rgba(255,255,255,0.85)" }}>
              Insurance Coverage
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.25 }}
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7,
              maxWidth: 640,
              margin: "24px auto 0",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            At <span className="font-semibold" style={{ color: "#ffffff" }}>BrightPath</span>, we believe autism therapy should be accessible to every family. Let us handle the complexities of ABA therapy insurance coverage so you can focus on what matters most—your child's growth.
          </motion.p>
        </div>
      </section>

      {/* ─── LOGO MARQUEE ─── */}
      <section
        className="py-10 md:py-14 overflow-hidden"
        style={{ background: "#ffffff" }}
      >
        <div className="flex gap-14 animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              className="h-9 object-contain   transition-all duration-300"
              alt="insurance partner"
            />
          ))}
        </div>
      </section>

      {/* ─── IMAGE + TEXT ─── */}
      <section
        className="relative overflow-hidden py-16 md:py-24 px-6"
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

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="bg-white rounded-[18px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 overflow-hidden"
            style={{
              border: "1.5px solid #f0eff0",
              boxShadow: "0 8px 30px rgba(232, 25, 75, 0.06), 0 4px 12px rgba(0,0,0,0.03)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 48,
                bottom: 48,
                width: 4,
                background: PINK,
                borderRadius: "0 4px 4px 0",
              }}
            />
            <div
              className="absolute pointer-events-none"
              style={{
                top: -30,
                right: -30,
                width: 100,
                height: 100,
                borderRadius: "50%",
                background: "rgba(232, 25, 75, 0.03)",
              }}
            />

            <div className="flex-1">
              <img
                src="/kids/child1.jpg"
                alt="Child receiving autism therapy"
                className="w-full max-w-sm mx-auto rounded-2xl"
                style={{ boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
              />
            </div>

            <div className="flex-1">
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#111111",
                  letterSpacing: "-0.02em",
                  marginBottom: 24,
                  lineHeight: 1.25,
                }}
              >
                How We Support Families With Insurance
              </h2>

              <ul className="space-y-5">
                {[
                  "Insurance verification for ABA therapy",
                  "Authorization and reauthorization support",
                  "Required clinical documentation",
                  "Ongoing insurance communication",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: easeOut, delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 10,
                        background: "rgba(232, 25, 75, 0.06)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <CheckIcon />
                    </div>
                    <span
                      style={{
                        fontSize: 15.5,
                        color: "#374151",
                        fontWeight: 500,
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── INSURANCE PLANS ─── */}
      <section className="relative overflow-hidden py-16 md:py-24 px-6" style={{ background: "#ffffff" }}>
        <div className="relative max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="text-center mb-4 leading-[1.08]"
            style={{
              fontSize: "4.75rem",
              fontWeight: 800,
              color: "#111111",
              letterSpacing: "-0.04em",
            }}
          >
            Insurance Plans We{" "}
            <span style={{ color: PINK }}>Accept</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
            className="text-center"
            style={{
              fontSize: 18,
              color: "#6b7280",
              lineHeight: 1.7,
              maxWidth: 520,
              margin: "0 auto 48px",
            }}
          >
            We work with major insurance providers to ensure your child gets the
            care they need.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* COMMERCIAL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
              className="p-8 overflow-hidden relative"
              style={{
                background: "#FAFAF8",
                borderRadius: 18,
                border: "1.5px solid #f0eff0",
                transition: "box-shadow 0.35s ease, border-color 0.35s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(232, 25, 75, 0.07), 0 2px 8px rgba(0,0,0,0.03)";
                e.currentTarget.style.borderColor = "rgba(232, 25, 75, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#f0eff0";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 32,
                  bottom: 32,
                  width: 4,
                  background: PINK,
                  borderRadius: "0 4px 4px 0",
                }}
              />
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#111111",
                  letterSpacing: "-0.02em",
                  marginBottom: 20,
                }}
              >
                Commercial Insurance Plans
              </h3>
              <ul className="space-y-3">
                {["Blue Cross Blue Shield", "Optum", "Carelon Behavioral Health", "Kaiser Permanente"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: PINK, flexShrink: 0 }} />
                    <span style={{ fontSize: 15, color: "#6b7280" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* MEDICAID */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.15 }}
              className="p-8 overflow-hidden relative"
              style={{
                background: "#FAFAF8",
                borderRadius: 18,
                border: "1.5px solid #f0eff0",
                transition: "box-shadow 0.35s ease, border-color 0.35s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(232, 25, 75, 0.07), 0 2px 8px rgba(0,0,0,0.03)";
                e.currentTarget.style.borderColor = "rgba(232, 25, 75, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#f0eff0";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 32,
                  bottom: 32,
                  width: 4,
                  background: PINK,
                  borderRadius: "0 4px 4px 0",
                }}
              />
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#111111",
                  letterSpacing: "-0.02em",
                  marginBottom: 20,
                }}
              >
                Maryland Medicaid & Managed Care
              </h3>
              <ul className="space-y-3">
                {["Maryland Physicians Care", "MedStar Family Choice", "Priority Partners", "Wellpoint Medicaid"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: PINK, flexShrink: 0 }} />
                    <span style={{ fontSize: 15, color: "#6b7280" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── COVERAGE ─── */}
      <section
        className="relative overflow-hidden py-16 md:py-24 px-6"
        style={{ background: "#FAFAF8" }}
      >
        <div
          className="absolute top-20 right-[10%] w-72 h-72 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
          style={{ background: PINK }}
        />

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="mb-12 leading-[1.08]"
            style={{
              fontSize: "4.75rem",
              fontWeight: 800,
              color: "#111111",
              letterSpacing: "-0.04em",
            }}
          >
            What Insurance Typically{" "}
            <span style={{ color: PINK }}>Covers</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto text-left">
            {[
              "ABA assessments",
              "Individualized treatment plans",
              "Ongoing therapy sessions",
              "Parent training & supervision",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeOut, delay: i * 0.07 }}
                className="flex items-center gap-4 p-5 bg-white"
                style={{
                  borderRadius: 16,
                  border: "1.5px solid #f0eff0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                  transition: "box-shadow 0.35s ease, border-color 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(232, 25, 75, 0.07), 0 2px 8px rgba(0,0,0,0.03)";
                  e.currentTarget.style.borderColor = "rgba(232, 25, 75, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.02)";
                  e.currentTarget.style.borderColor = "#f0eff0";
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(232, 25, 75, 0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <CheckIcon />
                </div>
                <span
                  style={{
                    fontSize: 15.5,
                    fontWeight: 600,
                    color: "#374151",
                  }}
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section
        className="relative overflow-hidden py-16 md:py-24 px-6"
        style={{ background: "#ffffff" }}
      >
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
          {[
            {
              title: "In-Home ABA Therapy",
              desc: "Focus on daily skills, communication, and real-life behavior support at home.",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 9L12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill={PINK} opacity="0.15" />
                  <path d="M3 9L12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke={PINK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 22V12h6v10" stroke={PINK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
            },
            {
              title: "School-Based Therapy",
              desc: "Support with routines, behavior, and peer interaction in school settings.",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M2 3h20v14H2z" fill={PINK} opacity="0.15" />
                  <path d="M2 3h20v14H2z" stroke={PINK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 7h20M12 7v10" stroke={PINK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 21h8M12 17v4" stroke={PINK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
            },
            {
              title: "Telehealth ABA",
              desc: "Parent coaching, supervision, and consultations covered by many plans.",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" fill={PINK} opacity="0.15" />
                  <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke={PINK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, ease: easeOut, delay: i * 0.08 }}
              className="p-7"
              style={{
                background: "#FAFAF8",
                borderRadius: 16,
                border: "1.5px solid #f0eff0",
                transition: "box-shadow 0.35s ease, border-color 0.35s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(232, 25, 75, 0.07), 0 2px 8px rgba(0,0,0,0.03)";
                e.currentTarget.style.borderColor = "rgba(232, 25, 75, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#f0eff0";
              }}
            >
              <div
                className="flex items-center justify-center mb-5"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(232, 25, 75, 0.06)",
                }}
              >
                {service.icon}
              </div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#111111",
                  letterSpacing: "-0.01em",
                  marginBottom: 8,
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  color: "#6b7280",
                  lineHeight: 1.7,
                }}
              >
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
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

        <div className="relative max-w-7xl mx-auto py-20 md:py-28 text-center px-6">
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
              fontSize: "4.75rem",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.04em",
              lineHeight: 1.08,
              margin: "0 0 24px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Let’s Verify Your{" "}
            <span className="italic" style={{ color: "rgba(255,255,255,0.85)" }}>Insurance</span>
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
            We'll guide you through coverage and get your child started quickly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.4 }}
            className="mt-10"
          >
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[1.04] active:scale-[0.98]"
              style={{
                background: "#ffffff",
                color: PINK,
                fontFamily: "'Inter', sans-serif",
                boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
              }}
            >
              Get Started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-2">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}