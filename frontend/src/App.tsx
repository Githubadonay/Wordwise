import { useState } from 'react'
import LanguageSelector from './components/LanguageSelector'
import VocabularyCard from './components/VocabularyCard'
import PracticeCard from './components/PracticeCard'
import {
  languages,
  vocabularyByLanguage,
  type Language,
} from './data/languages'

function App() {
  const [sentence, setSentence] = useState("");
  const [selectedLanguage, setSelectedLanguage] =
  useState<Language>('French')
const vocabulary = vocabularyByLanguage[selectedLanguage];
  function handleLanguageChange(language: Language) {
  setSelectedLanguage(language)
  setSentence('')
}

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
          Learn vocabulary, hear pronunciation, and practice using words in real
          sentences.
        </p>

        <LanguageSelector
          languages={languages}
          selectedLanguage={selectedLanguage}
          onLanguageChange={handleLanguageChange}
        />
      </section>

      <section className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 px-6 pb-20 md:grid-cols-2">
        <VocabularyCard vocabulary={vocabulary} />

        <PracticeCard
          word={vocabulary.word}
          language={vocabulary.language}
          sentence={sentence}
          onSentenceChange={setSentence}
        />
      </section>
    </main>
  );
}

export default App;
