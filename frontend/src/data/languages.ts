import type { VocabularyWord } from '../types/vocabulary'

export const languages = [
  'French',
  'Spanish',
  'Italian',
  'German',
  'Portuguese',
  'Japanese',
] as const

export type Language = (typeof languages)[number]

export const vocabularyByLanguage: Record<Language, VocabularyWord> = {
  French: {
    wordId: 'fr-001',
    language: 'French',
    word: 'épanoui',
    partOfSpeech: 'adjective',
    translation: 'Fulfilled · thriving',
    definition:
      'Feeling happy, fulfilled, or fully developed in life, work, or another area.',
    exampleSentence: 'Elle se sent épanouie dans son travail.',
    exampleTranslation: 'She feels fulfilled in her work.',
  },

  Spanish: {
    wordId: 'es-001',
    language: 'Spanish',
    word: 'alegre',
    partOfSpeech: 'adjective',
    translation: 'Cheerful · happy',
    definition:
      'Feeling or showing happiness and positive energy.',
    exampleSentence: 'Ella está alegre hoy.',
    exampleTranslation: 'She is happy today.',
  },

  Italian: {
    wordId: 'it-001',
    language: 'Italian',
    word: 'sereno',
    partOfSpeech: 'adjective',
    translation: 'Calm · peaceful',
    definition:
      'Feeling calm, peaceful, and free from worry.',
    exampleSentence: 'Oggi mi sento sereno.',
    exampleTranslation: 'Today I feel calm.',
  },

  German: {
    wordId: 'de-001',
    language: 'German',
    word: 'glücklich',
    partOfSpeech: 'adjective',
    translation: 'Happy · fortunate',
    definition:
      'Feeling happiness or satisfaction.',
    exampleSentence: 'Ich bin heute glücklich.',
    exampleTranslation: 'I am happy today.',
  },

  Portuguese: {
    wordId: 'pt-001',
    language: 'Portuguese',
    word: 'tranquilo',
    partOfSpeech: 'adjective',
    translation: 'Calm · relaxed',
    definition:
      'Feeling peaceful, relaxed, or free from stress.',
    exampleSentence: 'Hoje estou tranquilo.',
    exampleTranslation: 'Today I am calm.',
  },

  Japanese: {
    wordId: 'ja-001',
    language: 'Japanese',
    word: '幸せ',
    partOfSpeech: 'adjective',
    translation: 'Happy · fortunate',
    definition:
      'A state of happiness or good fortune.',
    exampleSentence: '私は幸せです。',
    exampleTranslation: 'I am happy.',
  },
}