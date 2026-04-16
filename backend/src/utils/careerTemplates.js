const COMPANY = process.env.COMPANY_NAME || "BrightPath Autism";
const WEBSITE = process.env.WEBSITE_URL || "#";

// ─── Design Tokens ───────────────────────────────────────────────────────────
const color = {
  primary: "#C8143D",
  primaryDark: "#9E0F30",
  primaryLight: "#FDEEF2",
  accent: "#FF4D74",
  text: "#1A1A2E",
  textMuted: "#6B7280",
  textLight: "#9CA3AF",
  border: "#F0D4DA",
  white: "#FFFFFF",
  bgOuter: "#F8F0F3",
};

const gradient = {
  header: `linear-gradient(135deg, ${color.primaryDark} 0%, ${color.primary} 50%, ${color.accent} 100%)`,
  subtle: `linear-gradient(135deg, ${color.primaryLight} 0%, #FFF5F7 100%)`,
};

const font = {
  base: `'Georgia', 'Times New Roman', serif`,
  sans: `'Helvetica Neue', Arial, sans-serif`,
};

// ─── Shared Partials ─────────────────────────────────────────────────────────

/**
 * Outer wrapper — now includes:
 * - Preheader text (inbox preview snippet)
 * - xmlns for Outlook VML support
 * - Text-size-adjust for mobile scaling fix
 * - Background color on outer table (not just body) for Yahoo Mail
 */
const emailWrapper = (content, preheader = "") => `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>${COMPANY}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:${color.bgOuter};font-family:${font.sans};-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  ${preheader ? `
  <div style="display:none!important;visibility:hidden;mso-hide:all;font-size:1px;line-height:1px;color:${color.bgOuter};max-height:0;max-width:0;opacity:0;overflow:hidden;">
    ${preheader}
  </div>` : ""}
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:${color.bgOuter};">
    <tr>
      <td align="center" style="padding:48px 16px 40px;">
        ${content}
      </td>
    </tr>
  </table>
</body>
</html>`;

/**
 * Card container — now includes:
 * - `width="560"` attribute (Outlook ignores max-width but respects width)
 * - Refined dual-layer shadow (tight base + wide brand tint)
 */
const emailCard = (header, body, footer = "") => `
<table role="presentation" width="560" cellspacing="0" cellpadding="0" border="0"
  style="max-width:560px;width:100%;margin:0 auto;background:${color.white};border-radius:16px;
         overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(200,20,61,0.07);">
  ${header}
  ${body}
  ${footer}
</table>`;

/**
 * Header — now includes:
 * - `background-color` fallback (Outlook strips background-image gradients)
 * - Subtitle wrapped in flanking divider lines for visual containment
 */
const emailHeader = (title, subtitle = "") => `
<tr>
  <td style="background-color:${color.primaryDark};background-image:${gradient.header};padding:40px 40px 36px;text-align:center;">
    <p style="margin:0 0 6px;font-family:${font.sans};font-size:11px;font-weight:700;
              letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.7);">
      ${COMPANY}
    </p>
    <h1 style="margin:0;font-family:${font.base};font-size:26px;font-weight:400;
               color:${color.white};letter-spacing:0.3px;line-height:1.3;">
      ${title}
    </h1>
    ${subtitle ? `
    <table role="presentation" cellspacing="0" cellpadding="0" align="center" style="margin:16px auto 0;">
      <tr>
        <td style="height:1px;width:40px;background:rgba(255,255,255,0.25);"></td>
        <td style="padding:0 14px;">
          <span style="font-size:13px;color:rgba(255,255,255,0.8);letter-spacing:0.5px;">${subtitle}</span>
        </td>
        <td style="height:1px;width:40px;background:rgba(255,255,255,0.25);"></td>
      </tr>
    </table>` : ""}
  </td>
</tr>`;

/**
 * Footer — now includes:
 * - Optional unsubscribe link (CAN-SPAM compliance)
 * - Smart URL display (shows domain or fallback text)
 */
const emailFooter = ({ unsubUrl = "" } = {}) => `
<tr>
  <td style="padding:24px 40px;border-top:1px solid ${color.border};text-align:center;">
    <p style="margin:0 0 4px;font-size:12px;color:${color.textLight};line-height:1.6;">
      © ${new Date().getFullYear()} ${COMPANY}. All rights reserved.
    </p>
    <p style="margin:0;font-size:12px;line-height:1.6;">
      <a href="${WEBSITE}" style="color:${color.primary};text-decoration:none;">${WEBSITE === "#" ? "Visit our website" : WEBSITE.replace(/^https?:\/\//, "")}</a>
      ${unsubUrl ? `&nbsp;&nbsp;·&nbsp;&nbsp;<a href="${unsubUrl}" style="color:${color.textLight};text-decoration:underline;">Unsubscribe</a>` : ""}
    </p>
  </td>
</tr>`;

// ─── Reusable Components ─────────────────────────────────────────────────────

/** Horizontal divider with configurable top spacing */
const emailDivider = (top = 24) => `
<tr>
  <td style="padding:${top}px 40px 0;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
      <tr><td style="height:1px;background:${color.border};"></td></tr>
    </table>
  </td>
</tr>`;

/** CTA button — gradient primary or outlined secondary */
const emailButton = (text, href, variant = "primary") => {
  const isPrimary = variant === "primary";
  const bg = isPrimary
    ? `background-color:${color.primaryDark};background-image:${gradient.header};`
    : `background-color:${color.white};border:1px solid ${color.border};`;
  const txt = isPrimary ? `color:${color.white};` : `color:${color.text};`;
  const shadow = isPrimary ? `box-shadow:0 2px 8px rgba(200,20,61,0.2);` : "";

  return `
  <table role="presentation" cellspacing="0" cellpadding="0">
    <tr>
      <td style="border-radius:999px;${bg}${shadow}">
        <a href="${href}"
           style="display:inline-block;padding:13px 28px;font-size:13px;font-weight:600;
                  ${txt}text-decoration:none;letter-spacing:0.3px;font-family:${font.sans};">
          ${text}
        </a>
      </td>
    </tr>
  </table>`;
};

/** Left-bordered callout — "action" (red accent) or "info" (subtle) */
const emailCallout = (text, type = "info") => {
  const isAction = type === "action";
  const box = isAction
    ? `background:${color.primaryLight};border-left:4px solid ${color.primary};`
    : `background:${gradient.subtle};background-color:${color.primaryLight};border-left:4px solid ${color.border};`;
  const txt = isAction
    ? `color:${color.primaryDark};font-weight:600;`
    : `color:${color.textMuted};`;

  return `
  <div style="${box}border-radius:0 8px 8px 0;padding:14px 18px;">
    <p style="margin:0;font-size:13px;line-height:1.6;${txt}">${text}</p>
  </div>`;
};

/** Data fields container — replaces the padding-hack table */
const dataCard = (content) => `
<table role="presentation" width="100%" cellspacing="0" cellpadding="0"
  style="background:${color.bgOuter};border-radius:12px;border:1px solid ${color.border};">
  <tr><td style="padding:8px 20px;">${content}</td></tr>
</table>`;

/** Numbered steps container */
const stepsCard = (label, stepsHtml) => `
<div style="background:${gradient.subtle};background-color:${color.primaryLight};border-radius:12px;
            padding:24px;margin-bottom:24px;border:1px solid ${color.border};">
  <p style="margin:0 0 16px;font-size:11px;font-weight:700;letter-spacing:2px;
            text-transform:uppercase;color:${color.primary};">${label}</p>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
    ${stepsHtml}
  </table>
</div>`;

// ─── Builders ────────────────────────────────────────────────────────────────

const buildSteps = (steps) =>
  steps
    .map((step, i) => {
      const isLast = i === steps.length - 1;
      return `
    <tr>
      <td style="padding:12px 0;${!isLast ? `border-bottom:1px solid ${color.border};` : ""}">
        <table role="presentation" cellspacing="0" cellpadding="0" width="100%">
          <tr>
            <td width="36" valign="middle" style="padding-right:16px;">
              <table role="presentation" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="width:28px;height:28px;border-radius:50%;
                              background-color:${color.primaryDark};background-image:${gradient.header};
                              text-align:center;vertical-align:middle;
                              font-size:12px;font-weight:700;color:white;line-height:28px;">
                    ${i + 1}
                  </td>
                </tr>
              </table>
            </td>
            <td style="font-size:14px;color:${color.text};font-family:${font.sans};line-height:1.5;">
              ${step}
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
    })
    .join("");

const buildFields = (fields) =>
  fields
    .map((f, i) => {
      const isLast = i === fields.length - 1;
      return `
    <tr>
      <td style="padding:16px 0;${!isLast ? `border-bottom:1px solid ${color.border};` : ""}">
        <table role="presentation" cellspacing="0" cellpadding="0" width="100%">
          <tr>
            <td width="36" valign="top" style="padding-right:12px;padding-top:1px;font-size:16px;">
              ${f.icon}
            </td>
            <td>
              <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:1.5px;
                         text-transform:uppercase;color:${color.textLight};font-family:${font.sans};">
                ${f.label}
              </p>
              <p style="margin:0;font-size:15px;color:${color.text};font-family:${font.sans};line-height:1.5;">
                ${f.value}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
    })
    .join("");

// ─── User Career Application Confirmation ────────────────────────────────────
export const userCareerTemplate = ({ name, role }) => {
  const steps = [
    "Application received &amp; under review",
    "Shortlisting of candidates",
    "Interview scheduling &amp; coordination",
  ];

  const body = `
  <tr>
    <td style="padding:40px 40px 0;">
      <p style="margin:0 0 8px;font-size:20px;font-family:${font.base};color:${color.text};font-weight:400;">
        Dear ${name},
      </p>
      <p style="margin:0 0 28px;font-size:14px;color:${color.textMuted};line-height:1.7;">
        Thank you for your interest in the <strong style="color:${color.text};font-weight:600;">${role}</strong>
        position at ${COMPANY}. We have received your application and are pleased to confirm receipt.
      </p>

      ${stepsCard("What Happens Next", buildSteps(steps))}

      <p style="margin:0 0 32px;font-size:14px;color:${color.textMuted};line-height:1.7;">
        Our hiring team typically responds within <strong style="color:${color.text};">5–7 business days</strong>.
        We appreciate your patience and look forward to learning more about you.
      </p>

      ${emailButton("Visit Our Website →", WEBSITE)}
    </td>
  </tr>

  ${emailDivider(32)}

  <tr>
    <td style="padding:0 40px 40px;">
      <p style="margin:0;font-size:14px;color:${color.textMuted};line-height:1.7;">
        Warm regards,<br/>
        <span style="color:${color.text};font-family:${font.base};font-size:16px;font-weight:400;">
          The ${COMPANY} Team
        </span>
      </p>
    </td>
  </tr>`;

  return emailWrapper(
    emailCard(
      emailHeader("Application Received", "We'll be in touch soon"),
      body,
      emailFooter()
    ),
    `Your application for ${role} at ${COMPANY} has been received.`
  );
};

// ─── Admin New Application Notification ──────────────────────────────────────
export const adminCareerTemplate = ({ name, email, phone, role }) => {
  const fields = [
    { label: "Applicant Name", value: name, icon: "👤" },
    {
      label: "Email Address",
      value: `<a href="mailto:${email}" style="color:${color.primary};text-decoration:none;">${email}</a>`,
      icon: "✉️",
    },
    {
      label: "Phone Number",
      value: phone
        ? `<a href="tel:${phone}" style="color:${color.primary};text-decoration:none;">${phone}</a>`
        : `<span style="color:${color.textLight};font-style:italic;">Not provided</span>`,
      icon: "📞",
    },
    {
      label: "Position Applied",
      value: `<strong style="color:${color.text};">${role}</strong>`,
      icon: "💼",
    },
  ];

  const dateStr = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const body = `
  <tr>
    <td style="padding:32px 40px 24px;">
      <p style="margin:0 0 24px;font-size:14px;color:${color.textMuted};line-height:1.7;">
        A new candidate has submitted an application through the careers portal.
        Please review their details below and take appropriate action.
      </p>

      ${dataCard(buildFields(fields))}
    </td>
  </tr>

  <tr>
    <td style="padding:0 40px 28px;">
      ${emailCallout("Action Required — Please review this application and reach out to schedule an interview if suitable.", "action")}
    </td>
  </tr>

  <tr>
    <td style="padding:0 40px 36px;">
      ${emailButton(`Reply to ${name} →`, `mailto:${email}`)}
    </td>
  </tr>`;

  return emailWrapper(
    emailCard(
      emailHeader("New Application", `Received · ${dateStr}`),
      body,
      emailFooter()
    ),
    `New career application from ${name} for ${role}.`
  );
};