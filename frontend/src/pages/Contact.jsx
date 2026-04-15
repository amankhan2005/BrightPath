import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/common/Container";
import toast from "react-hot-toast";

const PINK = "#E8194B";
const easeOut = [0.16, 1, 0.3, 1];

function generateCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  return captcha;
}

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3.62 1.5h2.76l1.42 3.5-1.72 1.2a10.36 10.36 0 0 0 4.72 4.72l1.2-1.72 3.5 1.42v2.76a1.12 1.12 0 0 1-1.1 1.12C7.78 14.2 1.8 8.22 1.5 2.6A1.12 1.12 0 0 1 3.62 1.5Z" stroke={PINK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "(443) 900-3895",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4.5" width="16" height="11" rx="2" stroke={PINK} strokeWidth="1.5" />
        <path d="M2 7l8 5 8-5" stroke={PINK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "arutere@bpautism.com",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 1.5C7 1.5 4 4 3 7c0 0 2.5 5 7 5s7-5 7-5C16 4 13 1.5 10 1.5Z" stroke={PINK} strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="10" cy="7.5" r="2" stroke={PINK} strokeWidth="1.5" />
        <path d="M6 14.5c0-2.5 1.8-4 4-4s4 1.5 4 4" stroke={PINK} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    text: "3501 Sheffield Manor Terrace, Silver Spring, MD 20904",
  },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [captcha, setCaptcha] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    refreshCaptcha();
  }, []);

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setInputCaptcha("");
    setVerified(false);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleCaptcha = (e) => {
    const value = e.target.value;
    setInputCaptcha(value);
    setVerified(value === captcha);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return toast.error("Please fill required fields");
    if (!verified) return toast.error("Captcha incorrect ❌");

    try {
      setLoading(true);
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      toast.success("Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" });
      refreshCaptcha();
    } catch {
      toast.error("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  const inputBase = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 12,
    border: "1.5px solid #e5e7eb",
    background: "#fafafa",
    fontSize: 15,
    color: "#111111",
    outline: "none",
    fontFamily: "'Inter', sans-serif",
    transition: "all 0.2s ease",
    boxSizing: "border-box",
  };

  const focusStyle = (e) => {
    e.target.style.borderColor = PINK;
    e.target.style.background = "#ffffff";
    e.target.style.boxShadow = "0 0 0 3px rgba(232, 25, 75, 0.1)";
  };

  const blurStyle = (e) => {
    e.target.style.borderColor = "#e5e7eb";
    e.target.style.background = "#fafafa";
    e.target.style.boxShadow = "none";
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');`}
      </style>

      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #E8194B 0%, #c4123d 50%, #a00e32 100%)" }}
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
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: easeOut }}>
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.12em] mb-5"
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.2)", padding: "6px 16px", borderRadius: 100 }}
            >
              Get in touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            className="leading-[1.08]"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4.75rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.04em" }}
          >
            Contact <span style={{ color: "rgba(255,255,255,0.85)" }}>Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: easeOut, delay: 0.25 }}
            style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, maxWidth: 520, margin: "24px auto 0" }}
          >
            Get in touch with our team and start your child’s journey today.
          </motion.p>
        </Container>
      </section>

      {/* ─── MAIN ─── */}
      <section className="relative overflow-hidden py-16 md:py-28" style={{ background: "#FAFAF8" }}>
        <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full opacity-[0.06] blur-3xl pointer-events-none" style={{ background: PINK }} />
        <div className="absolute bottom-20 left-[10%] w-64 h-64 rounded-full opacity-[0.07] blur-3xl pointer-events-none" style={{ background: "#5aaa00" }} />

        <Container className="relative grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT INFO */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: easeOut }}>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ height: 3, width: 48, borderRadius: 4, background: PINK, transformOrigin: "left", marginBottom: 24 }}
            />
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800, color: "#0f0f0f", letterSpacing: "-0.035em", lineHeight: 1.15, marginBottom: 24 }}>
              Let's Connect
            </h2>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.75, marginBottom: 40, maxWidth: 440 }}>
              We’re here to support your child’s growth with personalized ABA therapy. Reach out to us for consultations, questions, or to get started.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mt-0.5" style={{ background: "#fff0f3", border: "1px solid rgba(232, 25, 75, 0.1)" }}>
                    {item.icon}
                  </div>
                  <p style={{ fontSize: 15.5, color: "#374151", lineHeight: 1.5, fontWeight: 500, paddingTop: 2 }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

         
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
            style={{ background: "#ffffff", borderRadius: 24, border: "1.5px solid #f0eff0", padding: "32px 28px 28px", boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}
          >
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111111", letterSpacing: "-0.02em", marginBottom: 28 }}>
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" name="name" placeholder="Full Name *" value={form.name} onChange={handleChange} required style={inputBase} onFocus={focusStyle} onBlur={blurStyle} />
              <input type="email" name="email" placeholder="Email Address *" value={form.email} onChange={handleChange} required style={inputBase} onFocus={focusStyle} onBlur={blurStyle} />
              <textarea name="message" placeholder="Your Message *" rows="4" value={form.message} onChange={handleChange} required style={{ ...inputBase, resize: "none" }} onFocus={focusStyle} onBlur={blurStyle} />

              {/* CAPTCHA */}
              <div>
                <div className="flex justify-between items-center px-5 py-3.5 rounded-xl" style={{ background: "#FAFAF8", border: "1.5px solid #f0eff0" }}>
                  <span style={{ fontFamily: "'Courier New', monospace", fontSize: 20, fontWeight: 700, letterSpacing: "0.2em", color: "#374151", userSelect: "none" }}>
                    {captcha}
                  </span>
                  <button type="button" onClick={refreshCaptcha} style={{ background: "transparent", border: "none", cursor: "pointer", color: "#9ca3af", padding: 4 }}
                    onMouseEnter={(e) => e.currentTarget.style.color = PINK} onMouseLeave={(e) => e.currentTarget.style.color = "#9ca3af"}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10a6 6 0 0 1 9.2-5.1M16 10a6 6 0 0 1-9.2 5.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M13.5 2.5v4h-4M6.5 17.5v-4h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <input
                  type="text"
                  placeholder="Enter captcha above"
                  value={inputCaptcha}
                  onChange={handleCaptcha}
                  style={{
                    ...inputBase,
                    marginTop: 12,
                    borderColor: verified ? "#5aaa00" : (inputCaptcha.length > 0 && !verified ? "#ef4444" : "#e5e7eb"),
                    background: verified ? "#f2faeb" : "#fafafa",
                  }}
                  onFocus={(e) => { if (!verified) focusStyle(e); }}
                  onBlur={(e) => { if (!verified) blurStyle(e); }}
                />

                <div className="h-6 mt-2">
                  {verified && (
                    <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-1.5 text-sm" style={{ color: "#5aaa00", fontWeight: 600 }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      Captcha verified successfully
                    </motion.p>
                  )}
                  {!verified && inputCaptcha.length > 0 && (
                    <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-1.5 text-sm" style={{ color: "#ef4444", fontWeight: 500 }}>
                      Incorrect captcha, please try again
                    </motion.p>
                  )}
                </div>
              </div>

              {/* SUBMIT AREA */}
              <div className="min-h-[56px]">
                <AnimatePresence mode="wait">
                  {!verified ? (
                    <motion.div
                      key="locked"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-sm"
                      style={{ background: "#f3f4f6", color: "#9ca3af", fontWeight: 500, border: "1.5px dashed #e5e7eb" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                        <path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                        <circle cx="8" cy="10.5" r="1" fill="currentColor" />
                      </svg>
                      Solve captcha to unlock submit
                    </motion.div>
                  ) : (
                    <motion.button
                      key="unlocked"
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: easeOut }}
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl text-[15px] font-semibold transition-all duration-300 disabled:opacity-70 hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
                      style={{ background: loading ? "#d1d5db" : PINK, color: "#ffffff", border: "none", cursor: loading ? "not-allowed" : "pointer" }}
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </>
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>

        </Container>
      </section>
    </div>
  );
}

export default Contact;