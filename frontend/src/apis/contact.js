import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

/**
 * Send contact form data to the backend.
 * @param {Object} payload - { fullName, email, phone, subject, message, captchaAnswer, captchaExpected }
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export const sendContactForm = async (payload) => {
  const { data } = await axios.post(`${BASE_URL}/api/contact`, payload);
  return data;
};
