import { useState } from "react";
import Navbar from "../components/Navbar";
import ChatBox from "../components/ChatBox";
import ChatInput from "../components/ChatInput";
import API from "../services/api";

function Home() {

  const [messages, setMessages] = useState([]);

  const sendMessage = async (query) => {

    setMessages((prev) => [
      ...prev,
      {
        role: "User",
        content: query,
      },
    ]);

    try {

      const response = await API.get("/chat", {
        params: {
          query,
        },
      });

      setMessages((prev) => [
        ...prev,
        {
          role: response.data.Agent,
          content:
            typeof response.data.Response === "string"
              ? response.data.Response
              : JSON.stringify(response.data.Response, null, 2),
        },
      ]);

    } catch (error) {

      setMessages((prev) => [
        ...prev,
        {
          role: "System",
          content: "Error connecting to backend.",
        },
      ]);
    }
  };

  return (
    <div>
      <Navbar />

      <ChatBox messages={messages} />

      <ChatInput onSend={sendMessage} />
    </div>
  );
}

export default Home;