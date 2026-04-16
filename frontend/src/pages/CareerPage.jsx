import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const PINK = "#E8194B";
const easeOut = [0.16, 1, 0.3, 1];

const roles = ["BCBA", "RBT", "Therapist", "BACB"];

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={PINK} opacity="0.15" />
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke={PINK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Change Lives",
    desc: "Help children with autism build skills that last a lifetime",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" fill={PINK} opacity="0.15" />
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" stroke={PINK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Grow With Us",
    desc: "Ongoing training, mentorship, and career advancement paths",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="3.5" fill={PINK} opacity="0.15" />
        <circle cx="9" cy="7" r="3.5" stroke={PINK} strokeWidth="1.5" />
        <circle cx="17" cy="7" r="2.5" fill={PINK} opacity="0.15" />
        <circle cx="17" cy="7" r="2.5" stroke={PINK} strokeWidth="1.5" />
        <path d="M2 21c0-3.87 3.13-7 7-7s7 3.13 7 7" stroke={PINK} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 14c2.21 0 4 1.79 4 4" stroke={PINK} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Supportive Team",
    desc: "Work alongside caring BCBAs and therapists who have your back",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill={PINK} opacity="0.15" />
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke={PINK} strokeWidth="1.5" />
        <path d="M8 12l2.5 2.5L16 9" stroke={PINK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Evidence-Based",
    desc: "Use proven ABA techniques with real, measurable outcomes",
  },
];

const inputStyle = {
  width: "100%",
  border: "1.5px solid #f0eff0",
  borderRadius: 14,
  padding: "14px 18px",
  fontSize: 15,
  fontFamily: "'Inter', sans-serif",
  color: "#111111",
  background: "#FAFAF8",
  outline: "none",
  transition: "border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
  letterSpacing: "-0.01em",
};

const selectStyle = {
  ...inputStyle,
  appearance: "none",
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6l4 4 4-4' stroke='%239ca3af' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 16px center",
  paddingRight: 44,
  cursor: "pointer",
};

export default function CareerPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = PINK;
    e.target.style.boxShadow = "0 0 0 3px rgba(232, 25, 75, 0.08)";
    e.target.style.background = "#ffffff";
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = "#f0eff0";
    e.target.style.boxShadow = "none";
    e.target.style.background = "#FAFAF8";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/careers/apply`,
        form
      );

      setSuccess("Application submitted successfully 🎉");
      setForm({ name: "", email: "", phone: "", role: "" });
    } catch (err) {
      alert("Something went wrong");
    }

    setLoading(false);
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

        {/* Blurred orbs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none bg-white" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none bg-[#ff6b8a]" />

        {/* Floating playful circles */}
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
        <motion.div
          className="absolute pointer-events-none"
          style={{ bottom: "30%", right: "20%", width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.16)" }}
          animate={{ y: [-4, 8, -4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
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
              Join our team
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
            Help Children With{" "}
            <span className="italic" style={{ color: "rgba(255,255,255,0.85)" }}>
              Autism Thrive
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
              maxWidth: 560,
              margin: "24px auto 0",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Join our ABA therapy team and make a real difference in the lives of
            children and families every single day.
          </motion.p>
        </div>
      </section>

      {/* ─── WHY WORK WITH US ─── */}
      <section
        className="relative overflow-hidden py-14 md:py-20 px-6"
        style={{ background: "#ffffff" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="text-center mb-10 md:mb-12"
            style={{
              fontSize: "4.75rem",
              fontWeight: 800,
              color: "#111111",
              letterSpacing: "-0.04em",
              lineHeight: 1.08,
            }}
          >
            Why Work{" "}
            <span style={{ color: PINK }}>With Us</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, ease: easeOut, delay: i * 0.07 }}
                className="flex gap-4 items-start"
                style={{
                  background: "#FAFAF8",
                  borderRadius: 16,
                  border: "1.5px solid #f0eff0",
                  padding: "22px 20px",
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
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(232, 25, 75, 0.06)",
                  }}
                >
                  {v.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 15.5,
                      fontWeight: 700,
                      color: "#111111",
                      letterSpacing: "-0.01em",
                      marginBottom: 4,
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#6b7280",
                      lineHeight: 1.6,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORM SECTION ─── */}
      <section
        className="relative overflow-hidden py-16 md:py-28 px-6"
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
            className="max-w-xl mx-auto"
            style={{
              background: "#ffffff",
              borderRadius: 18,
              border: "1.5px solid #f0eff0",
              boxShadow: "0 8px 30px rgba(232, 25, 75, 0.06), 0 4px 12px rgba(0,0,0,0.03)",
              padding: "36px 32px",
              fontFamily: "'Inter', sans-serif",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Left accent bar */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 36,
                bottom: 36,
                width: 4,
                background: PINK,
                borderRadius: "0 4px 4px 0",
              }}
            />

            {/* Top-right decorative soft circle */}
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

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.05 }}
            >
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.12em] mb-3"
                style={{
                  color: PINK,
                  background: "rgba(232, 25, 75, 0.06)",
                  padding: "5px 12px",
                  borderRadius: 100,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Open positions
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
              className="mb-2"
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#111111",
                letterSpacing: "-0.02em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Apply Now
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.15 }}
              className="mb-8"
              style={{
                fontSize: 14.5,
                color: "#6b7280",
                lineHeight: 1.6,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Fill out the form below and our team will reach out to you within 24 hours.
            </motion.p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
              >
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#374151",
                    marginBottom: 6,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="e.g. Sarah Johnson"
                  style={inputStyle}
                  required
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.15 }}
              >
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#374151",
                    marginBottom: 6,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="sarah@example.com"
                  style={inputStyle}
                  required
                />
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
              >
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#374151",
                    marginBottom: 6,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="(443) 000-0000"
                  style={inputStyle}
                  required
                />
              </motion.div>

              {/* Role */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.25 }}
              >
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#374151",
                    marginBottom: 6,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Position You're Applying For
                </label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={selectStyle}
                  required
                >
                  <option value="">Select a role</option>
                  {roles.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.3 }}
                className="mt-2"
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{
                    background: PINK,
                    color: "#ffffff",
                    padding: "15px 24px",
                    borderRadius: 14,
                    fontSize: 15,
                    fontWeight: 600,
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "-0.01em",
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    boxShadow: "0 8px 24px rgba(232, 25, 75, 0.2)",
                  }}
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </motion.div>

              {/* Success */}
              {success && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mt-1"
                  style={{
                    fontSize: 14.5,
                    fontWeight: 600,
                    color: "#16a34a",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {success}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}