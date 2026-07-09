import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import { LuRefreshCw } from "react-icons/lu";
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineChatBubbleLeftRight,
  HiOutlinePencilSquare,
} from "react-icons/hi2";
import { sendContactForm } from "../../apis/contact";

/* ─── Math CAPTCHA generator ─────────────────────────────────── */
const generateCaptcha = () => {
  const a   = Math.floor(Math.random() * 12) + 1;
  const b   = Math.floor(Math.random() * 12) + 1;
  const ops = ["+", "−", "×"];
  const op  = ops[Math.floor(Math.random() * ops.length)];
  let answer;
  if (op === "+") answer = a + b;
  else if (op === "−") answer = a - b;
  else answer = a * b;
  return { question: `${a} ${op} ${b}`, answer };
};

/* ─── Field config ───────────────────────────────────────────── */
const SUBJECTS = [
  "General Enquiry",
  "Project Request",
  "AI Integration",
  "Partnership",
  "Support",
  "Other",
];

const inputBase =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm " +
  "placeholder-gray-500 outline-none transition-all duration-300 " +
  "focus:border-[#C6FA50]/60 focus:ring-2 focus:ring-[#C6FA50]/15";

const errorBorder = "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/15";

/* ─── Single field wrapper ───────────────────────────────────── */
function Field({ label, required, icon, error, children }) {
  return (
    <div className="flex flex-col gap-y-1.5">
      <label className="text-sm font-medium text-gray-300 flex items-center gap-x-1">
        {icon && <span className="text-[#C6FA50]">{icon}</span>}
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-xs text-red-400 flex items-center gap-x-1"
          >
            <HiXCircle className="w-3.5 h-3.5" /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main ContactForm component ─────────────────────────────── */
function ContactForm() {
  const [captcha, setCaptcha]   = useState(generateCaptcha);
  const [form, setForm]         = useState({
    fullName: "", email: "", phone: "", subject: "", message: "", captchaInput: "",
  });
  const [errors, setErrors]     = useState({});
  const [status, setStatus]     = useState("idle"); // idle | loading | success | error
  const [serverMsg, setServerMsg] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  /* ── Handlers ── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const refreshCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha());
    setForm((prev) => ({ ...prev, captchaInput: "" }));
    setErrors((prev) => ({ ...prev, captchaInput: "" }));
  }, []);

  /* ── Validation ── */
  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Name is required.";
    if (!form.email.trim())   errs.email   = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                               errs.email   = "Enter a valid email address.";
    if (form.phone && !/^\+?[\d\s\-()]{7,15}$/.test(form.phone))
                               errs.phone   = "Enter a valid phone number.";
    if (!form.subject)         errs.subject = "Please select a subject.";
    if (!form.message.trim())  errs.message = "Message cannot be empty.";
    else if (form.message.trim().length < 20)
                               errs.message = "Message must be at least 20 characters.";
    if (!form.captchaInput.trim())
                               errs.captchaInput = "Please answer the CAPTCHA.";
    else if (parseInt(form.captchaInput, 10) !== captcha.answer)
                               errs.captchaInput = "Incorrect answer. Try again.";
    return errs;
  };

  /* ── Submit ── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("loading");
    try {
      const res = await sendContactForm({
        fullName:        form.fullName,
        email:           form.email,
        phone:           form.phone,
        subject:         form.subject,
        message:         form.message,
        captchaAnswer:   form.captchaInput,
        captchaExpected: captcha.answer,
      });
      setSubmittedEmail(form.email);
      setServerMsg(res.message);
      setStatus("success");
      setForm({ fullName: "", email: "", phone: "", subject: "", message: "", captchaInput: "" });
      setCaptcha(generateCaptcha());
    } catch (err) {
      setServerMsg(
        err?.response?.data?.message || "Something went wrong. Please try again."
      );
      setStatus("error");
      refreshCaptcha();
    }
  };

  /* ── Success screen ── */
  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 flex flex-col items-center text-center gap-y-6"
      >
        <div className="w-20 h-20 rounded-full bg-[#C6FA50]/15 border border-[#C6FA50]/40 flex items-center justify-center">
          <HiCheckCircle className="w-10 h-10 text-[#C6FA50]" />
        </div>
        <h3 className="text-3xl font-bold text-white">Message Sent! 🎉</h3>
        <p className="text-gray-400 max-w-sm leading-relaxed">{serverMsg}</p>
        {submittedEmail && (
          <p className="text-sm text-gray-500">
            We have sent a confirmation email to: <span className="text-[#C6FA50] font-semibold">{submittedEmail}</span>
          </p>
        )}
        <button
          onClick={() => setStatus("idle")}
          className="btn-primary px-8 py-3 text-sm"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card p-8 md:p-10 flex flex-col gap-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Send Us a Message</h2>
        <p className="text-sm text-gray-400">We typically respond within 2 business hours.</p>
      </div>

      {/* Error banner */}
      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-x-3 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3"
          >
            <HiXCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <p className="text-sm text-red-400">{serverMsg}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Full Name" required
          icon={<HiOutlineUser className="w-4 h-4" />}
          error={errors.fullName}
        >
          <input
            id="contact-name"
            name="fullName"
            type="text"
            placeholder="Rohit Kumar"
            value={form.fullName}
            onChange={handleChange}
            className={`${inputBase} ${errors.fullName ? errorBorder : ""}`}
          />
        </Field>

        <Field
          label="Email Address" required
          icon={<HiOutlineEnvelope className="w-4 h-4" />}
          error={errors.email}
        >
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            className={`${inputBase} ${errors.email ? errorBorder : ""}`}
          />
        </Field>
      </div>

      {/* Phone + Subject */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Phone Number"
          icon={<HiOutlinePhone className="w-4 h-4" />}
          error={errors.phone}
        >
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210  (optional)"
            value={form.phone}
            onChange={handleChange}
            className={`${inputBase} ${errors.phone ? errorBorder : ""}`}
          />
        </Field>

        <Field
          label="Subject" required
          icon={<HiOutlineChatBubbleLeftRight className="w-4 h-4" />}
          error={errors.subject}
        >
          <select
            id="contact-subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={`${inputBase} ${errors.subject ? errorBorder : ""}`}
            style={{ appearance: "none" }}
          >
            <option value="" disabled>Select a subject…</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s} className="bg-[#0a0f1e]">{s}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Message */}
      <Field
        label="Your Message" required
        icon={<HiOutlinePencilSquare className="w-4 h-4" />}
        error={errors.message}
      >
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell us about your project, goals, or questions…"
          value={form.message}
          onChange={handleChange}
          className={`${inputBase} resize-none ${errors.message ? errorBorder : ""}`}
        />
        <p className="text-xs text-gray-600 text-right">
          {form.message.length} / 2000
        </p>
      </Field>

      {/* CAPTCHA */}
      <Field
        label="Human Verification (CAPTCHA)" required
        error={errors.captchaInput}
      >
        <div className="flex items-center gap-x-4">
          <div className="flex-1 flex items-center gap-x-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
            <span className="text-[#C6FA50] font-bold font-mono text-lg tracking-widest select-none">
              {captcha.question} = ?
            </span>
          </div>
          <button
            type="button"
            onClick={refreshCaptcha}
            aria-label="Refresh CAPTCHA"
            className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#C6FA50] hover:border-[#C6FA50]/40 transition-all duration-300"
          >
            <LuRefreshCw className="w-5 h-5" />
          </button>
          <input
            id="contact-captcha"
            name="captchaInput"
            type="number"
            placeholder="Answer"
            value={form.captchaInput}
            onChange={handleChange}
            className={`w-28 ${inputBase} ${errors.captchaInput ? errorBorder : ""}`}
          />
        </div>
      </Field>

      {/* Submit */}
      <button
        id="contact-submit-btn"
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full py-4 text-base flex items-center justify-center gap-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            Sending…
          </>
        ) : (
          "Send Message →"
        )}
      </button>

      <p className="text-xs text-gray-600 text-center">
        By submitting you agree to our{" "}
        <a href="#" className="text-[#C6FA50]/70 hover:text-[#C6FA50] transition-colors">Privacy Policy</a>.
      </p>
    </motion.form>
  );
}

export default ContactForm;
