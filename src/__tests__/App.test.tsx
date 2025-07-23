import App from '@/App'
import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  test('renders intro animation with start button', async () => {
    render(<App />)

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /try it out/i })).toBeInTheDocument()
    }, { timeout: 3000 })
  })

})
