import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import LanguageSelector from './LanguageSelector'

const languages = [
  'French',
  'Spanish',
  'Italian',
  'German',
  'Portuguese',
  'Japanese',
] as const

describe('LanguageSelector', () => {
  it('calls onLanguageChange when a language is clicked', async () => {
    const user = userEvent.setup()
    const onLanguageChange = vi.fn()

    render(
      <LanguageSelector
        languages={languages}
        selectedLanguage="French"
        onLanguageChange={onLanguageChange}
      />,
    )

    await user.click(
      screen.getByRole('button', { name: 'Spanish' }),
    )

    expect(onLanguageChange).toHaveBeenCalledWith('Spanish')
  })
})