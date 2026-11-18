type PracticeCardProps = {
  word: string
  language: string
  sentence: string
  onSentenceChange: (sentence: string) => void
}

function PracticeCard({
  word,
  language,
  sentence,
  onSentenceChange,
}: PracticeCardProps) {
  return (
    <article className="rounded-card bg-wordwise-dark p-8 text-white">
      <p className="text-xs font-bold tracking-[0.16rem] text-wordwise-gold">
        AI PRACTICE COACH
      </p>

      <h2 className="mt-5 font-display text-3xl">
        Use “{word}” in a sentence.
      </h2>

      <p className="mt-6 leading-7 text-gray-300">
        Write your own {language} sentence. Later, Wordwise will send it
        securely to our backend for AI feedback.
      </p>

      <textarea
        value={sentence}
        onChange={(event) => onSentenceChange(event.target.value)}
        placeholder={`Write a sentence in ${language}...`}
        maxLength={500}
        className="mt-6 min-h-[150px] w-full resize-y rounded-xl border border-gray-600 bg-[#242d26] p-4 text-white outline-none focus:ring-2 focus:ring-wordwise-gold"
      />

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-400">
          {sentence.length}/500
        </span>

        <button
          disabled={sentence.trim().length === 0}
          className="cursor-pointer rounded-full bg-wordwise-gold px-6 py-3 font-bold text-wordwise-text disabled:cursor-not-allowed disabled:opacity-40"
        >
          Check my sentence
        </button>
      </div>
    </article>
  )
}

export default PracticeCard