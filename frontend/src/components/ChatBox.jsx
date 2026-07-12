import ReactMarkdown from "react-markdown";
import { useEffect, useRef } from "react";

export default function ChatBox({ messages, loading }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const speak = (text) => {
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="h-full overflow-y-auto pr-2 space-y-8">

      {/* Welcome */}
      {messages.length === 0 && !loading && (

        <div className="flex flex-col items-center justify-center h-full text-center">

          <div className="w-24 h-24 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-5xl shadow-xl mb-8">
            🤖
          </div>

          <h1 className="text-4xl font-bold text-white">
            AI Voice Learning Tutor
          </h1>

          <p className="text-zinc-500 text-lg max-w-2xl mt-5 leading-8">

            Ask questions using text or voice.
            Generate quizzes, notes, resources and learn faster
            with your personal AI assistant.

          </p>

        </div>

      )}

      {/* Messages */}

      {messages.map((msg, index) => (

        <div
          key={index}
          className={`flex ${
            msg.role === "User"
              ? "justify-end"
              : "justify-start"
          }`}
        >

          <div
            className={`max-w-4xl rounded-3xl px-6 py-5 shadow-xl transition-all duration-300

            ${
              msg.role === "User"
                ? "bg-zinc-700 text-white"
                : "bg-zinc-900 border border-zinc-800 text-white"
            }`}
          >

            {/* Header */}

            <div className="flex justify-between items-center mb-5">

              <div>

                <h2 className="font-semibold text-lg">

                  {msg.role === "User"
                    ? "You"
                    : `${msg.role} Agent`}

                </h2>

                {msg.role !== "User" && (

                  <p className="text-xs text-zinc-500 mt-1">

                    AI Generated Response

                  </p>

                )}

              </div>

              {msg.role !== "User" && (

                <div className="flex gap-3">

  <button
    onClick={() => speak(msg.content)}
    className="
      bg-zinc-800
      hover:bg-zinc-700
      border
      border-zinc-700
      px-4
      py-2
      rounded-xl
      text-sm
      transition
    "
  >
    🔊 Listen
  </button>

  {msg.role === "Notes" && msg.topic && (

    <button
      onClick={() =>
        window.open(
          `https://ai-voice-learning-tutor.onrender.com/download_pdf?topic=${encodeURIComponent(msg.topic)}`,
          "_blank"
        )
      }
      className="
        bg-emerald-700
        hover:bg-emerald-600
        px-4
        py-2
        rounded-xl
        text-sm
        transition
      "
    >
      📄 Download PDF
    </button>

  )}

</div>

              )}

            </div>

            {/* Markdown */}

            <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-strong:text-white">

              <ReactMarkdown>

                {msg.content}

              </ReactMarkdown>

            </div>

          </div>

        </div>

      ))}

      {/* Typing */}

      {loading && (

        <div className="flex justify-start">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl">

            <h2 className="font-semibold text-white mb-5">

              AI Assistant

            </h2>

            <div className="flex gap-3">

              <span className="w-3 h-3 rounded-full bg-white animate-bounce"></span>

              <span
                className="w-3 h-3 rounded-full bg-white animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></span>

              <span
                className="w-3 h-3 rounded-full bg-white animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></span>

            </div>

          </div>

        </div>

      )}

      <div ref={bottomRef}></div>

    </div>
  );
}