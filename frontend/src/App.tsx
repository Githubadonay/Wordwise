import { useState } from 'react'
import './App.css'

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
    <main className="app">
      <section className="hero">
        <p className="eyebrow">WORDWISE</p>

        <h1>Discover a new word every day.</h1>

        <p className="subtitle">
          Learn vocabulary, hear pronunciation, and practice using words
          in real sentences.
        </p>

        <div className="language-list">
          {languages.map((language) => (
            <button
              key={language}
              className={
                selectedLanguage === language
                  ? 'language-button active'
                  : 'language-button'
              }
              onClick={() => setSelectedLanguage(language)}
            >
              {language}
            </button>
          ))}
        </div>
      </section>

      <section className="content">
        <div className="word-card">
          <p className="label">{selectedLanguage} word</p>

          <div className="word-heading">
            <div>
              <h2>épanoui</h2>
              <p className="part-of-speech">adjective</p>
            </div>

            <button className="speaker-button" aria-label="Hear pronunciation">
              🔊
            </button>
          </div>

          <h3>Fulfilled · thriving</h3>

          <p>
            Feeling happy, fulfilled, or fully developed in life,
            work, or another area.
          </p>

          <div className="example">
            <strong>Example</strong>
            <p>Elle se sent épanouie dans son travail.</p>
            <span>She feels fulfilled in her work.</span>
          </div>
        </div>

        <div className="practice-card">
          <p className="practice-label">AI PRACTICE COACH</p>

          <h2>Use “épanoui” in a sentence.</h2>

          <p>
            Write your own French sentence. Later, Wordwise will send it
            securely to our backend for AI feedback.
          </p>

          <textarea
            value={sentence}
            onChange={(event) => setSentence(event.target.value)}
            placeholder="Type your sentence..."
            maxLength={500}
          />

          <div className="practice-footer">
            <span>{sentence.length}/500</span>
            <button disabled={sentence.trim().length === 0}>
              Check my sentence
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App