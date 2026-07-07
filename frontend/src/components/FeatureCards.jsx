export default function FeatureCards() {

  const cards = [
    {
      icon: "🧠",
      title: "Teaching Agent",
      description: "Explains concepts with AI in an easy-to-understand manner."
    },
    {
      icon: "📚",
      title: "Resource Agent",
      description: "Finds books, references and learning resources."
    },
    {
      icon: "❓",
      title: "Quiz Agent",
      description: "Generates quizzes to test your knowledge."
    },
    {
      icon: "📝",
      title: "Notes Agent",
      description: "Creates structured notes with PDF export."
    },
    {
      icon: "🎤",
      title: "Voice Assistant",
      description: "Supports speech input and AI voice responses."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

      {cards.map((card) => (

        <div
          key={card.title}
          className="
            group
            rounded-3xl
            bg-zinc-900
            border
            border-zinc-800
            p-6
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-zinc-600
            hover:shadow-2xl
            hover:shadow-black/40
            cursor-pointer
          "
        >

          {/* Icon */}

          <div className="
            w-16
            h-16
            rounded-2xl
            bg-zinc-800
            flex
            items-center
            justify-center
            text-3xl
            group-hover:scale-110
            transition
          ">

            {card.icon}

          </div>

          {/* Title */}

          <h2 className="text-white text-xl font-semibold mt-6">

            {card.title}

          </h2>

          {/* Description */}

          <p className="text-zinc-500 text-sm leading-6 mt-3">

            {card.description}

          </p>

          {/* Footer */}

          <div className="flex justify-between items-center mt-6">

            <span className="text-zinc-400 text-sm">

              Ready

            </span>

            <span className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition">

              →

            </span>

          </div>

        </div>

      ))}

    </div>
  );
}