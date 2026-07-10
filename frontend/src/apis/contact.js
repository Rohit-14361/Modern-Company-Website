import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://32.199.161.49";


export const sendContactForm = async (payload) => {
  const { data } = await axios.post(`${BASE_URL}/api/contact`, payload);
  return data;
};
