const nodemailer = require("nodemailer");

/* ─── Transporter Configuration ──────────────────────────────── */
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || "smtp-relay.brevo.com",
  port: parseInt(process.env.MAIL_PORT, 10) || 587,
  secure: process.env.MAIL_SECURE === "true", // false for 587, true for 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  family: 4, // Force IPv4 to prevent connection issues on cloud platforms like Render
});

// Verify SMTP connection config at startup
transporter.verify((err, success) => {
  if (err) {
    console.error("SMTP VERIFY ERROR:", err);
  } else {
    console.log("SMTP READY");
  }
});

/**
 * Sends a notification email to the admin summarizing a new contact form submission.
 */
const sendAdminNotification = async ({ name, email, phone, subject, message }) => {
  await transporter.sendMail({
    from:    `"Digi Labs Contact" <${process.env.EMAIL_USER}>`,
    to:      process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
    replyTo: email,
    subject: `[Contact Form] ${subject}`,
    html: `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:auto;
                  background:#0a0f1e;color:#f0f4ff;padding:32px;border-radius:12px;">

        <h2 style="color:#C6FA50;margin-bottom:24px;">
          New Contact Form Submission
        </h2>

        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0;color:#8892a4;width:120px;">Name</td>
            <td style="padding:8px 0;font-weight:600;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#8892a4;">Email</td>
            <td style="padding:8px 0;">
              <a href="mailto:${email}" style="color:#C6FA50;">${email}</a>
            </td>
          </tr>
          ${phone
            ? `<tr>
                <td style="padding:8px 0;color:#8892a4;">Phone</td>
                <td style="padding:8px 0;">${phone}</td>
               </tr>`
            : ""}
          <tr>
            <td style="padding:8px 0;color:#8892a4;">Subject</td>
            <td style="padding:8px 0;font-weight:600;">${subject}</td>
          </tr>
        </table>

        <hr style="border-color:#1e2740;margin:20px 0;" />

        <p style="color:#8892a4;margin-bottom:8px;">Message</p>
        <p style="background:#0d1117;padding:16px;border-radius:8px;
                  border-left:3px solid #C6FA50;line-height:1.7;">
          ${message.replace(/\n/g, "<br/>")}
        </p>

        <p style="color:#4a5568;font-size:12px;margin-top:24px;">
          Sent from Digi Labs Contact Form &middot; ${new Date().toLocaleString()}
        </p>
      </div>
    `,
  });
};

/**
 * Sends a confirmation auto-reply email to the customer who filled out the contact form.
 */
const sendUserAutoReply = async ({ name, email, subject, message }) => {
  await transporter.sendMail({
    from:    `"Digi Labs" <${process.env.EMAIL_USER}>`,
    to:      email,
    subject: "We received your message — Digi Labs",
    html: `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:auto;
                  background:#0a0f1e;color:#f0f4ff;padding:32px;border-radius:12px;">

        <h2 style="color:#C6FA50;">Thanks, ${name}! 👋</h2>

        <p style="color:#8892a4;line-height:1.7;">
          We've received your message and our team will get back to you within
          <strong style="color:#fff;">2 business hours</strong>.
        </p>

        <p style="color:#8892a4;">Here's a summary of what you sent:</p>

        <div style="background:#0d1117;padding:16px;border-radius:8px;
                    border-left:3px solid #C6FA50;margin:16px 0;">
          <p style="margin:0 0 8px 0;font-size:13px;color:#8892a4;">
            Submitted Email: <strong style="color:#fff;">${email}</strong>
          </p>
          <strong>${subject}</strong><br/>
          <span style="color:#8892a4;">
            ${message.slice(0, 200)}${message.length > 200 ? "…" : ""}
          </span>
        </div>

        <p style="color:#4a5568;font-size:12px;margin-top:24px;">
          — The Digi Labs Team &middot; digilabs.io
        </p>
      </div>
    `,
  });
};

module.exports = { sendAdminNotification, sendUserAutoReply };
