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
const emailWrapper = (content) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${COMPANY}</title>
</head>
<body style="margin:0;padding:0;background-color:${color.bgOuter};font-family:${font.sans};">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
    <tr>
      <td align="center" style="padding:40px 16px;">
        ${content}
      </td>
    </tr>
  </table>
</body>
</html>
`;

const emailCard = (header, body, footer = "") => `
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
  style="max-width:560px;margin:0 auto;background:${color.white};border-radius:16px;
         overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.05), 0 20px 40px rgba(200,20,61,0.08);">
  ${header}
  ${body}
  ${footer}
</table>
`;

const emailHeader = (title, subtitle = "") => `
<tr>
  <td style="background:${gradient.header};padding:36px 40px;text-align:center;">
    <p style="margin:0 0 4px;font-family:${font.sans};font-size:11px;font-weight:700;
              letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.7);">
      ${COMPANY}
    </p>
    <h1 style="margin:0;font-family:${font.base};font-size:26px;font-weight:400;
               color:${color.white};letter-spacing:0.3px;line-height:1.3;">
      ${title}
    </h1>
    ${subtitle ? `<p style="margin:10px 0 0;font-size:13px;color:rgba(255,255,255,0.8);letter-spacing:0.5px;">${subtitle}</p>` : ""}
  </td>
</tr>
`;

const emailFooter = () => `
<tr>
  <td style="padding:20px 40px;border-top:1px solid ${color.border};text-align:center;">
    <p style="margin:0;font-size:12px;color:${color.textLight};line-height:1.6;">
      © ${new Date().getFullYear()} ${COMPANY}. All rights reserved.<br/>
      <a href="${WEBSITE}" style="color:${color.primary};text-decoration:none;">Visit our website</a>
    </p>
  </td>
</tr>
`;

// ─── User Career Application Confirmation ────────────────────────────────────
export const userCareerTemplate = ({ name, role }) => {
  const steps = ["Application received &amp; under review", "Shortlisting of candidates", "Interview scheduling &amp; coordination"];

  const stepsHtml = steps
    .map(
      (step, i) => `
    <tr>
      <td style="padding:10px 0;border-bottom:${i < steps.length - 1 ? `1px solid ${color.border}` : "none"};">
        <table role="presentation" cellspacing="0" cellpadding="0" width="100%">
          <tr>
            <td width="32" valign="middle" style="padding-right:14px;">
              <div style="width:28px;height:28px;border-radius:50%;background:${gradient.header};
                          text-align:center;line-height:28px;font-size:12px;font-weight:700;color:white;">
                ${i + 1}
              </div>
            </td>
            <td style="font-size:14px;color:${color.text};font-family:${font.sans};line-height:1.5;">
              ${step}
            </td>
          </tr>
        </table>
      </td>
    </tr>`
    )
    .join("");

  const body = `
  <tr>
    <td style="padding:40px 40px 32px;">
      <p style="margin:0 0 6px;font-size:20px;font-family:${font.base};color:${color.text};font-weight:400;">
        Dear ${name},
      </p>
      <p style="margin:0 0 24px;font-size:14px;color:${color.textMuted};line-height:1.7;">
        Thank you for your interest in the <strong style="color:${color.text};font-weight:600;">${role}</strong>
        position at ${COMPANY}. We have received your application and are pleased to confirm receipt.
      </p>

      <div style="background:${gradient.subtle};border-radius:12px;padding:24px;margin-bottom:24px;
                  border:1px solid ${color.border};">
        <p style="margin:0 0 16px;font-size:11px;font-weight:700;letter-spacing:2px;
                  text-transform:uppercase;color:${color.primary};">
          What Happens Next
        </p>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
          ${stepsHtml}
        </table>
      </div>

      <p style="margin:0 0 28px;font-size:14px;color:${color.textMuted};line-height:1.7;">
        Our hiring team typically responds within <strong style="color:${color.text};">5–7 business days</strong>.
        We appreciate your patience and look forward to learning more about you.
      </p>

      <table role="presentation" cellspacing="0" cellpadding="0">
        <tr>
          <td style="border-radius:999px;background:${gradient.header};">
            <a href="${WEBSITE}"
               style="display:inline-block;padding:13px 28px;font-size:13px;font-weight:600;
                      color:white;text-decoration:none;letter-spacing:0.5px;font-family:${font.sans};">
              Visit Our Website →
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <tr>
    <td style="padding:0 40px 32px;">
      <p style="margin:0;font-size:14px;color:${color.textMuted};line-height:1.7;">
        Warm regards,<br/>
        <strong style="color:${color.text};font-family:${font.base};font-size:16px;font-weight:400;">
          The ${COMPANY} Team
        </strong>
      </p>
    </td>
  </tr>
  `;

  return emailWrapper(emailCard(emailHeader("Application Received", "We'll be in touch soon"), body, emailFooter()));
};

// ─── Admin New Application Notification ──────────────────────────────────────
export const adminCareerTemplate = ({ name, email, phone, role }) => {
  const fields = [
    { label: "Applicant Name", value: name, icon: "👤" },
    { label: "Email Address", value: `<a href="mailto:${email}" style="color:${color.primary};text-decoration:none;">${email}</a>`, icon: "✉️" },
    { label: "Phone Number", value: `<a href="tel:${phone}" style="color:${color.primary};text-decoration:none;">${phone}</a>`, icon: "📞" },
    { label: "Position Applied", value: `<strong style="color:${color.text};">${role}</strong>`, icon: "💼" },
  ];

  const fieldsHtml = fields
    .map(
      (f) => `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid ${color.border};">
        <table role="presentation" cellspacing="0" cellpadding="0" width="100%">
          <tr>
            <td width="36" valign="top" style="padding-right:12px;padding-top:2px;font-size:16px;">
              ${f.icon}
            </td>
            <td>
              <p style="margin:0 0 3px;font-size:11px;font-weight:700;letter-spacing:1.5px;
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
    </tr>`
    )
    .join("");

  const body = `
  <tr>
    <td style="padding:32px 40px 24px;">
      <p style="margin:0 0 24px;font-size:14px;color:${color.textMuted};line-height:1.7;">
        A new candidate has submitted an application through the careers portal.
        Please review their details below and take appropriate action.
      </p>

      <table role="presentation" width="100%" cellspacing="0" cellpadding="0"
        style="background:${color.bgOuter};border-radius:12px;padding:0 20px;border:1px solid ${color.border};">
        <tr><td style="padding:4px 0;">${""}</td></tr>
        ${fieldsHtml}
        <tr><td style="padding:4px 0;">${""}</td></tr>
      </table>
    </td>
  </tr>

  <tr>
    <td style="padding:0 40px 32px;">
      <div style="background:${color.primaryLight};border-left:4px solid ${color.primary};
                  border-radius:0 8px 8px 0;padding:14px 18px;">
        <p style="margin:0;font-size:13px;color:${color.primaryDark};font-weight:600;line-height:1.6;">
          Action Required — Please review this application and reach out to schedule an interview if suitable.
        </p>
      </div>
    </td>
  </tr>

  <tr>
    <td style="padding:0 40px 32px;">
      <table role="presentation" cellspacing="0" cellpadding="0">
        <tr>
          <td style="border-radius:999px;background:${gradient.header};margin-right:12px;">
            <a href="mailto:${email}"
               style="display:inline-block;padding:12px 24px;font-size:13px;font-weight:600;
                      color:white;text-decoration:none;letter-spacing:0.5px;font-family:${font.sans};">
              Reply to Applicant →
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  `;

  return emailWrapper(emailCard(emailHeader("New Application", `Received · ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`), body, emailFooter()));
};