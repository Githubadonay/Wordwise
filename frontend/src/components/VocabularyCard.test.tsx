import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import VocabularyCard from './VocabularyCard'

describe('VocabularyCard', () => {
  it('displays vocabulary information', () => {
    const vocabulary = {
      wordId: 'fr-001',
      language: 'French' as const,
      word: 'épanoui',
      partOfSpeech: 'adjective',
      translation: 'Fulfilled · thriving',
      definition: 'Feeling happy and fulfilled.',
      exampleSentence: 'Elle se sent épanouie.',
      exampleTranslation: 'She feels fulfilled.',
    }

    render(<VocabularyCard vocabulary={vocabulary} />)

    expect(screen.getByText('épanoui')).toBeInTheDocument()
    expect(screen.getByText('Fulfilled · thriving')).toBeInTheDocument()
    expect(screen.getByText('French word')).toBeInTheDocument()
    expect(screen.getByText('Elle se sent épanouie.')).toBeInTheDocument()
  })
})