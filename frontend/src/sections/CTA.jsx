import { motion } from "framer-motion";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";

const PINK = "#E8194B";
const easeOut = [0.16, 1, 0.3, 1];

function CTA() {
  return (
    <section className="relative overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #E8194B 0%, #c4123d 50%, #a00e32 100%)",
        }}
      />

      {/* Subtle grid pattern */}
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

      {/* Decorative blurs */}
      <div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "#ffffff" }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#ff6b8a" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "#ffffff" }}
      />

      <Container className="relative py-24 md:py-36">
        <div className="text-center max-w-3xl mx-auto">

          {/* Label */}
          <motion.span
            style={{
              display: "inline-block",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "rgba(255,255,255,0.7)",
              textTransform: "uppercase",
              marginBottom: 20,
              fontFamily: "'Inter', sans-serif",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "6px 16px",
              borderRadius: 100,
            }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            Get started
          </motion.span>

          {/* Heading */}
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

          {/* Subtext */}
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
            Get expert ABA therapy support tailored to your child's unique
            needs. Let's build a brighter future together.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            {/* Call Button */}
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
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="mr-2"
              >
                <path
                  d="M3.62 1.5h2.76l1.42 3.5-1.72 1.2a10.36 10.36 0 0 0 4.72 4.72l1.2-1.72 3.5 1.42v2.76a1.12 1.12 0 0 1-1.1 1.12C7.78 14.2 1.8 8.22 1.5 2.6A1.12 1.12 0 0 1 3.62 1.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Call Now
            </a>

            {/* Contact Button */}
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
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5"
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
  );
}

export default CTA;