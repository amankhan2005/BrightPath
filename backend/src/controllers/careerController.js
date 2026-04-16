import Career from "../models/Career.js";
import { Resend } from "resend";
import {
  userCareerTemplate,
  adminCareerTemplate,
} from "../utils/careerTemplates.js";

 let resend;

const getResend = () => {
  if (!resend) {
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY missing in .env");
      throw new Error("Resend API key not configured");
    }
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
};

export const createCareer = async (req, res) => {
  try {
    const { name, email, phone, role } = req.body;

    // ✅ validation
    if (!name || !email || !phone || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // ✅ save to DB
    const career = await Career.create({ name, email, phone, role });

    // 🔥 EMAIL SECTION (SAFE)
    try {
      const resend = getResend();

      console.log("✅ RESEND KEY FOUND");

      // USER EMAIL
      await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: email,
        subject: `Application Received - ${process.env.COMPANY_NAME}`,
        html: userCareerTemplate({ name, role }),
      });

      // ADMIN EMAIL
      await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: process.env.ADMIN_EMAIL,
        subject: "New Career Application",
        html: adminCareerTemplate({ name, email, phone, role }),
      });

      console.log("✅ Career emails sent");

    } catch (emailError) {
      console.error("❌ EMAIL ERROR:", emailError.message);

       return res.status(500).json({
        success: false,
        message: "Application saved but email failed",
      });
    }

    // ✅ success
    return res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: career,
    });

  } catch (error) {
    console.error("❌ CONTROLLER ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};