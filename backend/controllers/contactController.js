const Contact = require("../models/contact.model");
const { sendAdminNotification, sendUserAutoReply } = require("../lib/Mailer");

exports.createContact = async (req, res) => {
  try {
    const { fullName, email, phone, subject, message, captchaAnswer, captchaExpected } = req.body;

    /* ── 1. Required field validation ──────────────────────────── */
    if (!fullName || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Something is missing. Please fill all required fields.",
      });
    }

    /* ── 2. Email format check ─────────────────────────────────── */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (phone && !/^\+?[\d\s\-()]{7,15}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid phone number.",
      });
    }

    /* ── 4. CAPTCHA verification ────────────────────────────────── */
    if (parseInt(captchaAnswer, 10) !== parseInt(captchaExpected, 10)) {
      return res.status(400).json({
        success: false,
        message: "CAPTCHA answer is incorrect. Please try again.",
      });
    }

    /* ── 5. Save contact submission to MongoDB ──────────────────── */
    const newContact = await Contact.create({
      fullName,
      email,
      phone:   phone || "",
      subject,
      message,
    });

    /* ── 6. Send emails via Mailer ──────────────────────────────── */
    // Notify admin about new submission
    await sendAdminNotification({
      name:    fullName,
      email,
      phone,
      subject,
      message,
    });

    // Send auto-reply confirmation to the user
    await sendUserAutoReply({
      name:    fullName,
      email,
      subject,
      message,
    });

    /* ── 7. Success response ────────────────────────────────────── */
    return res.status(201).json({
      success: true,
      message: "Thank you for submitting the form. We'll be in touch soon!",
      data:    { id: newContact._id },
    });

  } catch (err) {
    console.error("createContact error:", err);

    // Mongoose validation error
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({
        success: false,
        message: errors[0],
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later!",
    });
  }
};
