import { useState } from "react";
import Header from "./components/Header";
import FeatureCards from "./components/FeatureCards";
import ChatBox from "./components/ChatBox";
import ChatInput from "./components/ChatInput";
import { chatAPI } from "./services/api";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (query) => {
    const userMessage = {
      role: "User",
      content: query,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await chatAPI(query);

      const aiMessage = {
        role: response.Agent,
        content: response.Response,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "System",
          content: "❌ Unable to connect to backend.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#09090B]">

      <Header />

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* Hero Section */}
        <section className="mb-10">

          <div className="rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl p-10">

            <h1 className="text-5xl font-extrabold text-zinc-100">

              Welcome to Your AI Learning Assistant

            </h1>

            <p className="text-zinc-400 mt-5 text-lg leading-8 max-w-4xl">

              Learn smarter using Voice AI, Multi-Agent Intelligence,
              Quiz Generation, Smart Notes and PDF Export.

            </p>

            <div className="flex flex-wrap gap-3 mt-8">

              <span className="bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full text-zinc-300 text-sm">
                Teaching
              </span>

              <span className="bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full text-zinc-300 text-sm">
                Resources
              </span>

              <span className="bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full text-zinc-300 text-sm">
                Quiz
              </span>

              <span className="bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full text-zinc-300 text-sm">
                Notes
              </span>

              <span className="bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full text-zinc-300 text-sm">
                Voice Enabled
              </span>

            </div>

          </div>

        </section>

        {/* Feature Cards */}
        <section className="mb-10">
          <FeatureCards />
        </section>

        {/* Chat Section */}
        <section>

          <div className="rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden">

            {/* Chat Header */}
            <div className="flex justify-between items-center px-8 py-5 border-b border-zinc-800">

              <div>

                <h2 className="text-2xl font-bold text-white">
                  AI Chat
                </h2>

                <p className="text-zinc-500 text-sm mt-1">
                  Ask questions using text or voice.
                </p>

              </div>

              <span className="bg-zinc-800 border border-zinc-700 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                ● Online
              </span>

            </div>

            {/* Messages */}
            <div className="h-[650px] p-6 overflow-hidden">

              <ChatBox
                messages={messages}
                loading={loading}
              />

            </div>

            {/* Input */}
            <div className="border-t border-zinc-800">

              <ChatInput onSend={handleSend} />

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}