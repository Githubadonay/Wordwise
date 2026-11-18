import type { Language } from '../data/languages'

type LanguageSelectorProps = {
  languages: readonly Language[]
  selectedLanguage: Language
  onLanguageChange: (language: Language) => void
}

function LanguageSelector({languages, selectedLanguage, onLanguageChange,}: LanguageSelectorProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-2">
      {languages.map((language) => {
        const isActive = selectedLanguage === language

        return (
          <button
            key={language}
            onClick={() => onLanguageChange(language)}
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
  )
}

export default LanguageSelector