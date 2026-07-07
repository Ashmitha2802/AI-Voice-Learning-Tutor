import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

// Chat API
export const chatAPI = async (query) => {
  const response = await API.get("/chat", {
    params: { query },
  });

  return response.data;
};

export default API;