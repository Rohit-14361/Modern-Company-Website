const nodemailer = require("nodemailer");
const dns = require("dns").promises;

/* ─── Transporter Generator (Resolving host to IPv4 to bypass cloud IPv6 issues) ── */
let transporterPromise = null;

function getTransporter() {
  if (!transporterPromise) {
    transporterPromise = (async () => {
      const mailHost = process.env.MAIL_HOST || "smtp.gmail.com";
      let ipHost = mailHost;

      // Regular expression to check if mailHost is an IP address
      const isIP = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(mailHost);
      if (!isIP) {
        try {
          console.log(`Resolving SMTP host ${mailHost} to IPv4...`);
          const addresses = await dns.resolve4(mailHost);
          if (addresses && addresses.length > 0) {
            ipHost = addresses[0];
            console.log(`Successfully resolved ${mailHost} to IPv4: ${ipHost}`);
          }
        } catch (err) {
          console.error(`DNS lookup failed for ${mailHost}, falling back to hostname:`, err);
        }
      }

      const port = parseInt(process.env.MAIL_PORT, 10) || 465;
      const isSecure = process.env.MAIL_PORT ? (process.env.MAIL_SECURE === "true") : true;

      return nodemailer.createTransport({
        host: ipHost,
        port: port,
        secure: isSecure,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          servername: mailHost, // original hostname is required for TLS validation
        },
      });
    })();
  }
  return transporterPromise;
}


const sendAdminNotification = async ({ name, email, phone, subject, message }) => {
  const transporter = await getTransporter();
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

/* ─────────────────────────────────────────────────────────────── */
/**
 * Sends an auto-reply confirmation email to the user
 * who submitted the contact form.
 *
 * @param {{ name, email, subject, message }} data
 */
const sendUserAutoReply = async ({ name, email, subject, message }) => {
  const transporter = await getTransporter();
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

/* ─────────────────────────────────────────────────────────────── */
module.exports = { sendAdminNotification, sendUserAutoReply };
