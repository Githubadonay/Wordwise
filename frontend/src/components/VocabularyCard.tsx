import type { VocabularyWord } from '../types/vocabulary'

type VocabularyCardProps = {
  vocabulary: VocabularyWord
}

function VocabularyCard({ vocabulary }: VocabularyCardProps) {
  return (
    <article className="rounded-card border border-wordwise-border bg-white p-8">
      <p className="text-xs font-bold tracking-[0.16rem] text-wordwise-muted uppercase">
        {vocabulary.language} word
      </p>

      <div className="mt-3 flex items-start justify-between gap-5">
        <div>
          <h2 className="font-display text-5xl">
            {vocabulary.word}
          </h2>

          <p className="mt-1 text-wordwise-muted">
            {vocabulary.partOfSpeech}
          </p>
        </div>

        <button
          className="h-12 w-12 cursor-pointer rounded-full bg-wordwise-soft"
          aria-label={`Hear ${vocabulary.word} pronunciation`}
        >
          🔊
        </button>
      </div>

      <h3 className="mt-8 text-lg font-bold">
        {vocabulary.translation}
      </h3>

      <p className="mt-4 leading-7 text-wordwise-muted">
        {vocabulary.definition}
      </p>

      <div className="mt-7 rounded-xl bg-wordwise-bg p-5">
        <strong>Example</strong>

        <p className="mt-3">
          {vocabulary.exampleSentence}
        </p>

        <p className="mt-1 text-wordwise-muted">
          {vocabulary.exampleTranslation}
        </p>
      </div>
    </article>
  )
}

export default VocabularyCard