import { useState, useRef } from "react";

export default function ChatInput({ onSend }) {
  const [query, setQuery] = useState("");
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null);

  // Voice Recognition
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognitionRef.current = recognition;

    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setListening(true);

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
    };
  };

  const handleSend = () => {
    if (!query.trim()) return;

    onSend(query);
    setQuery("");
  };

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border-t border-slate-700 p-6">

      <div className="flex items-center gap-4">

        {/* Input */}
        <div className="flex-1 relative">

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
            placeholder="Ask your AI Tutor anything..."
            className="
              w-full
              bg-slate-800
              text-white
              placeholder-slate-400
              rounded-2xl
              border
              border-slate-700
              px-6
              py-4
              pr-14
              text-lg
              outline-none
              focus:ring-2
              focus:ring-cyan-500
              transition
            "
          />

          <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500">
            💡
          </span>

        </div>

        {/* Voice Button */}
        <button
          onClick={startListening}
          className={`
            h-14
            px-6
            rounded-2xl
            font-semibold
            shadow-lg
            transition-all
            duration-300

            ${
              listening
                ? "bg-red-600 animate-pulse scale-105"
                : "bg-gradient-to-r from-red-500 to-rose-500 hover:scale-105"
            }

            text-white
          `}
        >
          {listening ? "🔴 Listening..." : "🎤 Voice"}
        </button>

        {/* Send Button */}
        <button
          onClick={handleSend}
          className="
            h-14
            px-8
            rounded-2xl
            font-bold
            text-white
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            hover:scale-105
            transition-all
            duration-300
            shadow-lg
          "
        >
          ➜ Send
        </button>

      </div>

      {/* Footer Text */}
      <div className="mt-3 flex justify-between text-xs text-slate-500">

        <span>🎤 Voice Enabled</span>

        <span>Press Enter to Send</span>

      </div>

    </div>
  );
}