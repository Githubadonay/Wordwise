import { useState } from 'react'

const languages = [
  'French',
  'Spanish',
  'Italian',
  'German',
  'Portuguese',
  'Japanese',
]

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('French')
  const [sentence, setSentence] = useState('')

  return (
    <main className="min-h-screen bg-wordwise-bg text-wordwise-text">
      <section className="mx-auto max-w-[1100px] px-6 pb-12 pt-20">
        <p className="text-xs font-bold tracking-[0.16rem] text-wordwise-green">
          WORDWISE
        </p>

        <h1 className="mt-3 max-w-[720px] font-display text-5xl leading-[0.95] font-medium md:text-7xl">
          Discover a new word every day.
        </h1>

        <p className="mt-5 max-w-[600px] text-lg leading-7 text-wordwise-muted">
          Learn vocabulary, hear pronunciation, and practice using words
          in real sentences.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {languages.map((language) => {
            const isActive = selectedLanguage === language

            return (
              <button
                key={language}
                onClick={() => setSelectedLanguage(language)}
                className={`cursor-pointer rounded-full border px-5 py-2 transition ${
                  isActive
                    ? 'border-wordwise-green bg-wordwise-green text-white'
                    : 'border-wordwise-border bg-transparent hover:bg-white'
                }`}
              >
                {language}
              </button>
            )
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 px-6 pb-20 md:grid-cols-2">
        <article className="rounded-card border border-wordwise-border bg-white p-8">
          <p className="text-xs font-bold tracking-[0.16rem] text-wordwise-muted uppercase">
            {selectedLanguage} word
          </p>

          <div className="mt-3 flex items-start justify-between gap-5">
            <div>
              <h2 className="font-display text-5xl">épanoui</h2>
              <p className="mt-1 text-wordwise-muted">adjective</p>
            </div>

            <button
              className="h-12 w-12 cursor-pointer rounded-full bg-wordwise-soft"
              aria-label="Hear pronunciation"
            >
              🔊
            </button>
          </div>

          <h3 className="mt-8 text-lg font-bold">
            Fulfilled · thriving
          </h3>

          <p className="mt-4 leading-7 text-wordwise-muted">
            Feeling happy, fulfilled, or fully developed in life,
            work, or another area.
          </p>

          <div className="mt-7 rounded-xl bg-wordwise-bg p-5">
            <strong>Example</strong>

            <p className="mt-3">
              Elle se sent épanouie dans son travail.
            </p>

            <p className="mt-1 text-wordwise-muted">
              She feels fulfilled in her work.
            </p>
          </div>
        </article>

        <article className="rounded-card bg-wordwise-dark p-8 text-white">
          <p className="text-xs font-bold tracking-[0.16rem] text-wordwise-gold">
            AI PRACTICE COACH
          </p>

          <h2 className="mt-5 font-display text-3xl">
            Use “épanoui” in a sentence.
          </h2>

          <p className="mt-6 leading-7 text-gray-300">
            Write your own French sentence. Later, Wordwise will send it
            securely to our backend for AI feedback.
          </p>

          <textarea
            value={sentence}
            onChange={(event) => setSentence(event.target.value)}
            placeholder="Type your sentence..."
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
      </section>
    </main>
  )
}

export default App