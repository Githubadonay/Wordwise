import type { Language } from '../data/languages'

export type VocabularyWord = {
  wordId: string
  language: Language
  word: string
  partOfSpeech: string
  translation: string
  definition: string
  exampleSentence: string
  exampleTranslation: string
}