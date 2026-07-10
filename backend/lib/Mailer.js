const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
});

(async () => {
  try {
    await transporter.verify();
    console.log("Gmail SMTP Connected");
  } catch (err) {
    console.error("SMTP Error:", err);
  }
})();

const sendAdminNotification = async ({
  name,
  email,
  phone,
  subject,
  message,
}) => {
  return transporter.sendMail({
    from: `"Digi Labs Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    replyTo: email,
    subject: `[Contact Form] ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Subject:</strong> ${subject}</p>

      <hr>

      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  });
};

const sendUserAutoReply = async ({
  name,
  email,
  subject,
  message,
}) => {
  return transporter.sendMail({
    from: `"Digi Labs" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "We received your message - Digi Labs",
    html: `
      <h2>Hello ${name} 👋</h2>

      <p>Thank you for contacting Digi Labs.</p>

      <p>We have received your message and will reply as soon as possible.</p>

      <hr>

      <p><strong>Subject:</strong> ${subject}</p>

      <p>${message.slice(0, 200)}</p>

      <br>

      <p>Regards,<br>Digi Labs Team</p>
    `,
  });
};

module.exports = {
  sendAdminNotification,
  sendUserAutoReply,
};