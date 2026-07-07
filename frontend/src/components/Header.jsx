export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-zinc-800">

      <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5">

        {/* Left */}
        <div>

          <h1 className="text-4xl font-bold text-white tracking-tight">
            AI Voice Learning Tutor
          </h1>

          <p className="text-zinc-500 mt-2 text-sm">
            Multi-Agent AI Learning Assistant
          </p>

        </div>

        {/* Right */}
        <div className="flex flex-wrap gap-3">

          <span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 text-sm">
            🟢 Backend
          </span>

          <span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 text-sm">
            🎤 Voice
          </span>

          <span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 text-sm">
            🤖 AI
          </span>

          <span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 text-sm">
            📄 PDF
          </span>

        </div>

      </div>

    </header>
  );
}