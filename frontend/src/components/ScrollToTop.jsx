import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
  IMPORTANT: To fully prevent iOS zoom on input focus, ensure your index.html has:
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
*/

// ── Design tokens ─────────────────────────────────────────────────────────────
const T = {
  bg:      "#FAFAF8",
  surface: "#fff0f3",
  primary: "#E8194B",
  accent:  "#ff6b8a",
  dark:    "#111111",
  text:    "#374151",
  muted:   "#9ca3af",
  border:  "#f0eff0",
  white:   "#FFFFFF",
};

// ── Inject smooth-scrollbar styles once ──────────────────────────────────────
if (typeof document !== "undefined" && !document.getElementById("bp-chat-scrollbar-style")) {
  const tag = document.createElement("style");
  tag.id = "bp-chat-scrollbar-style";
  tag.textContent = `
    .bp-messages-scroll {
      scrollbar-width: thin;
      scrollbar-color: rgba(232,25,75,0.25) transparent;
    }
    .bp-messages-scroll::-webkit-scrollbar { width: 5px; }
    .bp-messages-scroll::-webkit-scrollbar-track { background: transparent; }
    .bp-messages-scroll::-webkit-scrollbar-thumb {
      background: rgba(232,25,75,0.22);
      border-radius: 999px;
      transition: background 0.2s;
    }
    .bp-messages-scroll::-webkit-scrollbar-thumb:hover {
      background: rgba(232,25,75,0.4);
    }
  `;
  document.head.appendChild(tag);
}

// Safeguard: prevent iOS zoom on input focus
if (typeof document !== "undefined") {
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport && !viewport.content.includes("maximum-scale")) {
    viewport.content = "width=device-width, initial-scale=1, maximum-scale=1";
  }
}

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

// ── SVG Icons ─────────────────────────────────────────────────────────────────
const ChatIcon = ({ size = 16, color = T.primary }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
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

const ArrowIcon = ({ size = 10, color = T.white }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

// ── SYSTEM PROMPT (for future AI upgrade) ────────────────────────────────────
// const SYSTEM_PROMPT = `
// You are BrightPath Care Assistant for BrightPath Autism.
// Help parents understand ABA therapy, insurance, and getting started.
// Be warm, simple, and supportive.
// Key info:
// Phone: +1 (410) 900-3895
// Email: arutere@bpautism.com
// Location: Silver Spring, Maryland
// Rules:
// - Keep answers short and clear
// - Guide user to call or contact
// - Show call button when user asks for number
// - Reassure privacy (HIPAA safe)
// `;

// ── Reply content ─────────────────────────────────────────────────────────────
const REPLIES = {
  services: {
    text: `We provide personalized ABA therapy to help children improve communication, behavior, and social skills.\n\n✔ Communication development\n✔ Social interaction\n✔ Behavior support\n✔ Play-based learning\n\nEach plan is tailored to your child.`,
    showContactBtn: true,
  },
  insurance: {
    text: `Yes, we accept most major insurance plans.\n\n✔ Free verification\n✔ Authorization support\n✔ Ongoing help\n\nWe handle everything for you.`,
    showContactBtn: true,
  },
  call: {
    text: `You can speak directly with our care team.\n\n📞 +1 (410) 900-3895\n\nTap below to call now.`,
    showCallBtn: true,
  },
  safety: {
    text: `Yes — your child's information is completely safe.\n\nWe follow strict HIPAA guidelines.\n\n✔ Secure data\n✔ No sharing\n✔ Fully confidential`,
    showContactBtn: false,
  },
  career: {
    text: `We are hiring BCBAs, RBTs, and therapists.\n\nJoin BrightPath Autism and make a real impact.\n\n👉 Contact us to apply.`,
    showContactBtn: true,
  },
  booking: {
    text: `Getting started is easy.\n\n✔ Free consultation\n✔ Insurance verification\n✔ Personalized plan\n\nWe guide you step-by-step.`,
    showContactBtn: true,
  },
  cost: {
    text: `Costs depend on your insurance and child's needs.\n\nGood news — many plans cover ABA therapy.\n\nWe verify everything for you first.`,
    showContactBtn: true,
  },
  contact: {
    text: `You can reach us here:\n\n📞 +1 (410) 900-3895\n📧 arutere@bpautism.com\n📍 Silver Spring, MD\n\nWe respond within one business day.`,
    showContactBtn: true,
  },
  default: {
    text: `I can help with:\n\n• Therapy services\n• Insurance\n• Booking consultation\n• Speaking with our team\n\nWhat would you like to know?`,
    showContactBtn: false,
  },
};

// ── Intent detection ──────────────────────────────────────────────────────────
function getBotReply(msg) {
  const t = msg.toLowerCase();
  if (/service|therapy|autism|aba/.test(t))   return REPLIES.services;
  if (/insur|cover|plan/.test(t))             return REPLIES.insurance;
  if (/call|phone|number/.test(t))            return REPLIES.call;
  if (/safe|privacy|hipaa/.test(t))           return REPLIES.safety;
  if (/career|job|hir/.test(t))               return REPLIES.career;
  if (/book|consult|start/.test(t))           return REPLIES.booking;
  if (/cost|price|fee/.test(t))               return REPLIES.cost;
  if (/contact|email|reach/.test(t))          return REPLIES.contact;
  return REPLIES.default;
}

// ── Quick suggestion chips ────────────────────────────────────────────────────
const QUICK_CHIPS = [
  "What services do you offer?",
  "Do you accept insurance?",
  "Is my child's info safe?",
  "How do I get started?",
  "Call your team",
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

// ── Call Now button ───────────────────────────────────────────────────────────
const CallButton = () => (
  <motion.a
    href="tel:+14109003895"
    whileHover={{ scale: 1.03, boxShadow: "0 0.375rem 1.125rem rgba(232, 25, 75, 0.25)" }}
    whileTap={{ scale: 0.97 }}
    style={{
      alignSelf: "flex-start",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.375rem",
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
    }}
    aria-label="Call BrightPath Autism"
  >
    📞 Call Now
  </motion.a>
);

// ── Contact Us button ─────────────────────────────────────────────────────────
const ContactButton = () => (
  <motion.a
    href="/contact-us"
    whileHover={{ scale: 1.03, boxShadow: "0 0.375rem 1.125rem rgba(17, 17, 17, 0.18)" }}
    whileTap={{ scale: 0.97 }}
    style={{
      alignSelf: "flex-start",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.3125rem",
      padding: "0.5rem 0.875rem",
      borderRadius: "999px",
      background: T.dark,
      color: T.white,
      fontSize: "0.8125rem",
      fontWeight: 700,
      fontFamily: "'Inter', sans-serif",
      border: "none",
      cursor: "pointer",
      letterSpacing: "0.02em",
      boxShadow: "0 0.25rem 0.75rem rgba(17, 17, 17, 0.15)",
      outline: "none",
      textDecoration: "none",
      WebkitTapHighlightColor: "transparent",
    }}
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
        overflowWrap: "break-word",
      }}>
        <div style={msg.sender === "user" ? s.bubble.user : s.bubble.bot}>
          {msg.text}
        </div>
        {msg.sender === "bot" && msg.showCallBtn && <CallButton />}
        {msg.sender === "bot" && msg.showContactBtn && <ContactButton />}
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
      showCallBtn: false,
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
      { sender: "user", text: trimmed, showContactBtn: false, showCallBtn: false },
    ]);
    setTyping(true);
    setTimeout(() => {
      const reply = getBotReply(trimmed);
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: reply.text,
          showContactBtn: !!reply.showContactBtn,
          showCallBtn: !!reply.showCallBtn,
        },
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
            <div
              className="bp-messages-scroll"
              style={s.messages}
              role="log"
              aria-live="polite"
            >
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

      {/* FAB */}
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
  const touchTarget = "2.75rem";

  return {
    card: {
      position: "fixed",
      right: isMobile ? "0.75rem" : "1.5rem",
      top: isMobile ? "auto" : "40%",
      bottom: isMobile ? "5.5rem" : "auto",
      transform: isMobile ? "none" : "translateY(-50%)",
      width: "min(92vw, 22rem)",
      height: isMobile ? "70vh" : "32rem",
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
      flexShrink: 0,
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
        background: "#f9fafb",
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
      fontSize: "1rem",
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