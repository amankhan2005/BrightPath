import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* 
  IMPORTANT: To fully prevent iOS zoom on input focus, ensure your index.html has:
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
*/

// ── Design tokens (Aligned with BrightPath Premium Theme) ─────────────────
const T = {
  bg:      "#FAFAF8",
  surface: "#fff0f3", // Light pink tint
  primary: "#E8194B", // Hot Pink
  accent:  "#ff6b8a", // Soft Pink
  dark:    "#111111", // Near Black
  text:    "#374151", // Gray 700
  muted:   "#9ca3af", // Gray 400
  border:  "#f0eff0", // Soft Border
  white:   "#FFFFFF",
};

// ── Responsive hook ───────────────────────────────────────────────────────────
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

// Safeguard: Inject viewport meta tag if missing
if (typeof document !== "undefined") {
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport && !viewport.content.includes("maximum-scale")) {
    viewport.content = "width=device-width, initial-scale=1, maximum-scale=1";
  }
}

// ── SVG Icons ─────────────────────────────────────────────────────────────────
const ChatIcon = ({ size = 16, color = T.primary }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
);

const PhoneIcon = ({ size = 14, color = T.white }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
  </svg>
);

const SendIcon = ({ size = 15, color = T.white }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const CloseIcon = ({ size = 11, color = "rgba(255,255,255,0.7)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.8" strokeLinecap="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const ArrowIcon = ({ size = 11, color = T.white }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

// ── Reply content (BrightPath Autism Branded) ──────────────────────────────
const REPLIES = {
  services: {
    text: `At BrightPath Autism, we provide compassionate ABA therapy services designed to support your child's growth and development.\n\nOur services include:\n• Communication & Language Development\n• Social Interaction Skills\n• Behavior Management\n• Play & Learning Skills\n\nEach therapy plan is personalized based on your child’s unique needs, helping them build confidence, communication, and independence.`,
    showContactBtn: true,
  },
  about: {
    text: `BrightPath Autism LLC is a dedicated provider of Applied Behavior Analysis (ABA) therapy services in the United States.\n\nWe focus on helping children with autism build communication, social, and life skills through personalized and compassionate care.\n\nOur team works closely with families to create individualized therapy plans and provide ongoing support for long-term success.`,
    showContactBtn: false,
  },
  call: {
    text: `You can speak directly with our care team for guidance and support.\n\nPhone: (443) 900-3895\nWe are here to help you get started with the right care for your child.`,
    showContactBtn: false,
  },
  book: {
    text: `Getting started is simple. You can request a consultation and our team will guide you through the next steps.\n\nWe will understand your child's needs and create a personalized therapy plan for the best possible outcomes.`,
    showContactBtn: true,
  },
  contact: {
    text: `You can reach BrightPath Autism through the following:\n\nPhone: (443) 900-3895\nEmail: arutere@bpautism.com\nAddress: Silver Spring, MD\n\nOur team typically responds within one business day.`,
    showContactBtn: true,
  },
  confidential: {
    text: `Your privacy is extremely important to us.\n\nAll services at BrightPath Autism are HIPAA-conscious and your information is always kept safe and confidential.`,
    showContactBtn: false,
  },
  insurance: {
    text: `We work with many insurance providers and can help verify your coverage before starting services.\n\nOur goal is to make quality care accessible and stress-free for families.`,
    showContactBtn: true,
  },
  cost: {
    text: `The cost of therapy depends on your child’s needs and insurance coverage.\n\nWe provide clear guidance and support so you understand everything before starting.`,
    showContactBtn: true,
  },
  location: {
    text: `We provide services in the United States, including in-person and telehealth sessions.\n\nThis allows your child to receive care in a comfortable and supportive environment.`,
    showContactBtn: false,
  },
  default: {
    text: `I'm here to help you with our services, getting started, or any questions about your child’s care at BrightPath Autism.\n\nHow can I assist you today?`,
    showContactBtn: false,
  },
};

// ── Smart keyword detection ───────────────────────────────────────────────────
function getBotReply(msg) {
  const t = msg.toLowerCase();
  if (/service|offer|treat|therapy|program|autism|behavioral/.test(t)) return REPLIES.services;
  if (/about|mission|vision|who are|company/.test(t))                  return REPLIES.about;
  if (/number|phone|call me|contact number/.test(t))                   return REPLIES.call;
  if (/book|appointment|schedule|get started|begin|consult/.test(t))   return REPLIES.book;
  if (/contact|reach|location|address/.test(t))                        return REPLIES.contact;
  if (/confiden|private|hipaa|secure/.test(t))                         return REPLIES.confidential;
  if (/insur|cover|plan|pay/.test(t))                                  return REPLIES.insurance;
  if (/cost|price|fee|rate/.test(t))                                   return REPLIES.cost;
  if (/virtual|telehealth|online|office|where/.test(t))                return REPLIES.location;
  return REPLIES.default;
}

// ── Quick suggestion chips ────────────────────────────────────────────────────
const QUICK_CHIPS = [
  "What services do you offer?",
  "How do I get started?",
  "Is my child's info safe?",
];

// ── Framer Motion variants ────────────────────────────────────────────────────
const cardVariants = {
  hidden:  { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 26 },
  },
  exit: {
    opacity: 0, y: 16, scale: 0.97,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const fabVariants = {
  hidden:  { opacity: 0, scale: 0.4 },
  visible: {
    opacity: 1, scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 22 },
  },
  exit: { opacity: 0, scale: 0.4, transition: { duration: 0.15 } },
};

const bubbleVariants = {
  hidden:  { opacity: 0, y: 8, scale: 0.94 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 360, damping: 24 },
  },
};

// ── Typing indicator ──────────────────────────────────────────────────────────
const TypingIndicator = ({ isMobile }) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 4 }}
    transition={{ duration: 0.18 }}
    style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
  >
    <div style={makeStyles(isMobile).botAvatar}>
      <ChatIcon size={11} color={T.primary} />
    </div>
    <div style={{
      ...makeStyles(isMobile).bubble.bot,
      display: "flex", gap: "0.3125rem", padding: "0.625rem 0.8125rem",
    }}>
      {[0, 150, 300].map((delay) => (
        <motion.div
          key={delay}
          style={{ width: 5, height: 5, borderRadius: "50%", background: T.muted }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.85, repeat: Infinity, delay: delay / 1000, ease: "easeInOut" }}
        />
      ))}
    </div>
  </motion.div>
);

// ── In-bubble Contact button ──────────────────────────────────────────────────
const ContactButton = () => (
  <motion.a
    href="/contact-us"
    whileHover={{ scale: 1.03, boxShadow: "0 0.375rem 1.125rem rgba(232, 25, 75, 0.25)" }}
    whileTap={{ scale: 0.97 }}
    style={makeStyles(false).contactBtn}
    aria-label="Visit contact page"
  >
    Contact Us
    <ArrowIcon size={10} color={T.white} />
  </motion.a>
);

// ── Message bubble ────────────────────────────────────────────────────────────
const Message = ({ msg, isMobile }) => {
  const s = makeStyles(isMobile);
  return (
    <motion.div
      variants={bubbleVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: "flex",
        justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
        alignItems: "flex-end",
        gap: "0.5rem",
      }}
    >
      {msg.sender === "bot" && (
        <div style={s.botAvatar}>
          <ChatIcon size={12} color={T.primary} />
        </div>
      )}
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "0.5rem", 
        maxWidth: "85%", 
        overflowWrap: "break-word" 
      }}>
        <div style={msg.sender === "user" ? s.bubble.user : s.bubble.bot}>
          {msg.text}
        </div>
        {msg.sender === "bot" && msg.showContactBtn && (
          <ContactButton />
        )}
      </div>
    </motion.div>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
export default function FloatingAIChat() {
  const isMobile = useIsMobile();

  const [open, setOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768;
    }
    return true;
  });
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there! I'm the BrightPath Care Assistant. I'm here to help you learn about our ABA therapy services, answer questions, or help you get started.",
      showContactBtn: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [chipsVisible, setChipsVisible] = useState(true);
  const messagesEndRef = useRef(null);
  const s = makeStyles(isMobile);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, typing]);

  const handleSend = (text) => {
    const trimmed = (typeof text === "string" ? text : input).trim();
    if (!trimmed) return;
    setInput("");
    setChipsVisible(false);
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: trimmed, showContactBtn: false },
    ]);
    setTyping(true);
    setTimeout(() => {
      const reply = getBotReply(trimmed);
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: reply.text, showContactBtn: reply.showContactBtn },
      ]);
    }, 850 + Math.random() * 400);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="BrightPath Care Assistant chat"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={s.card}
          >
            {/* Header */}
            <div style={s.header}>
              <div style={s.headerAvatar}>
                <ChatIcon size={16} color={T.white} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={s.headerName}>BrightPath Care Assistant</div>
                <div style={s.headerStatus}>
                  <motion.div
                    style={s.statusDot}
                    animate={{ opacity: [1, 0.35, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                  />
                  <span style={s.headerStatusText}>Online — replies instantly</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                style={s.closeBtn}
                aria-label="Close chat"
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              >
                <CloseIcon size={11} />
              </button>
            </div>

            {/* Quick chips */}
            <AnimatePresence>
              {chipsVisible && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.22 }}
                  style={s.chipsWrap}
                >
                  {QUICK_CHIPS.map((chip) => (
                    <motion.button
                      key={chip}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleSend(chip)}
                      style={s.chip}
                    >
                      {chip}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div style={s.divider} />

            {/* Messages */}
            <div style={s.messages} role="log" aria-live="polite">
              {messages.map((msg, i) => (
                <Message key={i} msg={msg} isMobile={isMobile} />
              ))}
              <AnimatePresence>
                {typing && <TypingIndicator isMobile={isMobile} />}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input row */}
            <div style={s.inputRow}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                style={s.input}
                aria-label="Chat message input"
                inputMode="text"
                autoComplete="off"
              />
              <motion.button
                whileHover={{ scale: 1.08, opacity: 0.9 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => handleSend()}
                style={s.sendBtn}
                aria-label="Send message"
              >
                <SendIcon size={15} />
              </motion.button>
            </div>

      
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FAB ── */}
      <AnimatePresence>
        {!open && (
          <motion.button
            onClick={() => setOpen(true)}
            variants={fabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{ scale: 1.1, boxShadow: "0 0.625rem 1.875rem rgba(232, 25, 75, 0.4)" }}
            whileTap={{ scale: 0.92 }}
            style={s.fab}
            aria-label="Open chat assistant"
          >
            <ChatIcon size={20} color={T.white} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

// ── Responsive styles factory ─────────────────────────────────────────────────
function makeStyles(isMobile) {
  const touchTarget = "2.75rem"; // 44px
  
  return {
    card: {
      position: "fixed",
      right: isMobile ? "0.75rem" : "1.5rem",
      top: isMobile ? "auto" : "20%", 
      bottom: isMobile ? "5.5rem" : "auto",
      transform: isMobile ? "none" : "translateY(-50%)",
      width: "min(92vw, 22rem)",
      maxHeight: isMobile ? "85vh" : "80vh",
      zIndex: 9999,
      background: T.white,
      borderRadius: isMobile ? "1.125rem" : "1.375rem",
      border: `1px solid ${T.border}`,
      boxShadow: `0 0.75rem 2.5rem rgba(232, 25, 75, 0.08), 0 0.125rem 0.625rem rgba(0,0,0,0.04)`,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      fontFamily: "'Inter', sans-serif",
    },

    header: {
      background: T.dark,
      padding: isMobile ? "0.625rem 0.75rem" : "0.875rem 1rem",
      display: "flex",
      alignItems: "center",
      gap: "0.625rem",
      flexShrink: 0,
    },

    headerAvatar: {
      width: "2.25rem",
      height: "2.25rem",
      borderRadius: "50%",
      background: T.primary,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },

    headerName: {
      fontSize: isMobile ? "0.8125rem" : "0.875rem",
      fontWeight: 700,
      color: T.white,
      lineHeight: 1.2,
      letterSpacing: "0.01em",
    },

    headerStatus: {
      display: "flex",
      alignItems: "center",
      gap: "0.3125rem",
      marginTop: "0.125rem",
    },

    statusDot: {
      width: "0.375rem",
      height: "0.375rem",
      borderRadius: "50%",
      background: "#22c55e",
      flexShrink: 0,
    },

    headerStatusText: {
      fontSize: "0.6875rem",
      color: "rgba(255,255,255,0.6)",
      letterSpacing: "0.01em",
    },

    closeBtn: {
      width: touchTarget,
      height: touchTarget,
      borderRadius: "50%",
      border: "1px solid rgba(255,255,255,0.15)",
      background: "rgba(255,255,255,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "background 0.15s",
      outline: "none",
      flexShrink: 0,
      WebkitTapHighlightColor: "transparent",
    },

    chipsWrap: {
      padding: isMobile ? "0.5rem 0.625rem 0" : "0.625rem 0.75rem 0",
      display: "flex",
      gap: "0.375rem",
      flexWrap: "wrap",
      overflow: "hidden",
    },

    chip: {
      fontSize: isMobile ? "0.6875rem" : "0.75rem",
      fontWeight: 600,
      color: T.primary,
      background: T.surface,
      border: `1px solid rgba(232, 25, 75, 0.15)`,
      borderRadius: "999px",
      padding: isMobile ? "0.4375rem 0.625rem" : "0.5rem 0.75rem",
      cursor: "pointer",
      outline: "none",
      whiteSpace: "nowrap",
      fontFamily: "'Inter', sans-serif",
      transition: "background 0.15s",
      WebkitTapHighlightColor: "transparent",
    },

    divider: {
      height: "1px",
      background: T.border,
      margin: isMobile ? "0.5rem 0 0" : "0.625rem 0 0",
      opacity: 0.6,
      flexShrink: 0,
    },

    messages: {
      padding: isMobile ? "0.625rem" : "0.875rem",
      display: "flex",
      flexDirection: "column",
      gap: isMobile ? "0.625rem" : "0.75rem",
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      scrollBehavior: "smooth",
      scrollbarWidth: "thin",
      scrollbarColor: `${T.border} transparent`,
      WebkitOverflowScrolling: "touch",
    },

    botAvatar: {
      width: "1.625rem",
      height: "1.625rem",
      borderRadius: "50%",
      background: T.surface,
      border: `1px solid rgba(232, 25, 75, 0.15)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      marginBottom: "0.125rem",
    },

    bubble: {
      bot: {
        padding: isMobile ? "0.625rem 0.75rem" : "0.75rem 0.875rem",
        borderRadius: "1rem 1rem 1rem 0.25rem",
        background: "#f9fafb", // Tailwind gray-50 for soft contrast
        color: T.text,
        fontSize: isMobile ? "0.875rem" : "0.9375rem",
        lineHeight: 1.6,
        whiteSpace: "pre-wrap",
        overflowWrap: "break-word",
        wordBreak: "break-word",
        border: `1px solid ${T.border}`,
      },
      user: {
        padding: isMobile ? "0.625rem 0.75rem" : "0.75rem 0.875rem",
        borderRadius: "1rem 1rem 0.25rem 1rem",
        background: T.dark,
        color: T.white,
        fontSize: isMobile ? "0.875rem" : "0.9375rem",
        lineHeight: 1.6,
        whiteSpace: "pre-wrap",
        overflowWrap: "break-word",
        wordBreak: "break-word",
      },
    },

    contactBtn: {
      alignSelf: "flex-start",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.3125rem",
      padding: "0.5rem 0.875rem",
      borderRadius: "999px",
      background: T.primary,
      color: T.white,
      fontSize: "0.8125rem",
      fontWeight: 700,
      fontFamily: "'Inter', sans-serif",
      border: "none",
      cursor: "pointer",
      letterSpacing: "0.02em",
      boxShadow: "0 0.25rem 0.75rem rgba(232, 25, 75, 0.25)",
      outline: "none",
      textDecoration: "none",
      WebkitTapHighlightColor: "transparent",
    },

    inputRow: {
      padding: isMobile ? "0.5rem 0.625rem" : "0.625rem 0.75rem",
      borderTop: `1px solid ${T.border}`,
      display: "flex",
      gap: "0.5rem",
      alignItems: "center",
      flexShrink: 0,
    },

    input: {
      flex: 1,
      height: touchTarget,
      padding: "0 1rem",
      borderRadius: "999px",
      border: `1.5px solid ${T.border}`,
      fontFamily: "'Inter', sans-serif",
      fontSize: "1rem", // 16px to prevent iOS zoom
      color: T.text,
      background: T.bg,
      outline: "none",
      transition: "border-color 0.18s",
      WebkitTextSizeAdjust: "100%",
    },

    sendBtn: {
      width: touchTarget,
      height: touchTarget,
      borderRadius: "50%",
      background: T.primary,
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      outline: "none",
      boxShadow: "0 0.1875rem 0.625rem rgba(232, 25, 75, 0.25)",
      WebkitTapHighlightColor: "transparent",
    },

    ctaWrap: {
      padding: isMobile ? "0.5rem 0.625rem 0.75rem" : "0.625rem 0.75rem 0.875rem",
      borderTop: `1px solid ${T.border}`,
      flexShrink: 0,
    },

    ctaBtn: {
      width: "100%",
      padding: "0.875rem 0",
      borderRadius: "999px",
      border: "none",
      background: T.primary,
      color: T.white,
      fontFamily: "'Inter', sans-serif",
      fontSize: "0.875rem",
      fontWeight: 700,
      letterSpacing: "0.025em",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      boxShadow: "0 0.3125rem 1.125rem rgba(232, 25, 75, 0.3)",
      outline: "none",
      textDecoration: "none",
      WebkitTapHighlightColor: "transparent",
    },

    fab: {
      position: "fixed",
      bottom: isMobile ? "1.25rem" : "1.5rem",
      right: isMobile ? "0.75rem" : "1.5rem",
      zIndex: 9999,
      width: "3.5rem",
      height: "3.5rem",
      borderRadius: "50%",
      background: T.primary,
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 0.375rem 1.5rem rgba(232, 25, 75, 0.4)",
      outline: "none",
      WebkitTapHighlightColor: "transparent",
    },
  };
}