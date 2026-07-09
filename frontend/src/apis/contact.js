import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "https://modern-company-website-qq8t.onrender.com";


export const sendContactForm = async (payload) => {
  const { data } = await axios.post(`${BASE_URL}/api/contact`, payload);
  return data;
};
