import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AnimationIntro from '@/components/IntroAnimation'

describe('AnimationIntro', () => {
  it('shows the Try it button after delay and calls onStart when clicked', async () => {
    const onStartMock = vi.fn()
    render(<AnimationIntro onStart={onStartMock} />)
    expect(screen.queryByRole('button', { name: /try it/i })).not.toBeInTheDocument()
    const button = await screen.findByRole('button', { name: /try it/i }, { timeout: 4000 })
    expect(button).toBeInTheDocument()
    await userEvent.click(button)
    expect(onStartMock).toHaveBeenCalledTimes(1)
  })
})
