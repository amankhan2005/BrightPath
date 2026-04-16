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

export default function InsuranceMarqueeHome() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');`}
      </style>

      <section
        className="relative overflow-hidden py-16 md:py-24 px-6"
        style={{ background: "#ffffff" }}
      >
        {/* Internal Marquee CSS */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee {
              display: flex;
              gap: 4rem;
              align-items: center;
              white-space: nowrap;
              animation: marquee 30s linear infinite;
            }
            .marquee:hover {
              animation-play-state: paused;
            }
          `}
        </style>

        {/* Decorative ambient blurs */}
        <div
          className="absolute top-10 left-[10%] w-72 h-72 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
          style={{ background: PINK }}
        />
        <div
          className="absolute bottom-10 right-[10%] w-64 h-64 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
          style={{ background: "#5aaa00" }}
        />

        <div className="relative max-w-7xl mx-auto text-center">
          {/* SEO Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="leading-[1.08]"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.75rem)",
              fontWeight: 800,
              color: "#111111",
              letterSpacing: "-0.04em",
            }}
          >
            Insurance Plans We{" "}
            <span className="italic" style={{ color: PINK }}>
              Accept
            </span>
          </motion.h2>

          {/* SEO Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
            style={{
              fontSize: 18,
              color: "#6b7280",
              lineHeight: 1.7,
              maxWidth: 640,
              margin: "20px auto 0",
            }}
          >
            BrightPath works with major insurance providers to make autism and ABA therapy accessible for families without delays or confusion.
          </motion.p>
        </div>

        {/* LOGO MARQUEE */}
        <div className="relative mt-12 md:mt-16 overflow-hidden">
          <div className="marquee">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="insurance provider"
                className="h-10 object-contain   transition-all duration-300 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}