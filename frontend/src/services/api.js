import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-voice-learning-tutor.onrender.com/",
});

// Chat API
export const chatAPI = async (query) => {
  const response = await API.get("/chat", {
    params: { query },
  });

  return response.data;
};

export default API;