import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import PracticeCard from './PracticeCard'

describe('PracticeCard', () => {
  it('allows the user to type a sentence', async () => {
    const user = userEvent.setup()
    const onSentenceChange = vi.fn()

    render(
      <PracticeCard
        word="épanoui"
        language="French"
        sentence=""
        onSentenceChange={onSentenceChange}
      />,
    )

    const textbox = screen.getByRole('textbox')

    await user.type(textbox, 'Je suis heureux.')

    expect(onSentenceChange).toHaveBeenCalled()
  })

  it('disables the submit button when the sentence is empty', () => {
    render(
      <PracticeCard
        word="épanoui"
        language="French"
        sentence=""
        onSentenceChange={() => {}}
      />,
    )

    expect(
      screen.getByRole('button', { name: 'Check my sentence' }),
    ).toBeDisabled()
  })
})