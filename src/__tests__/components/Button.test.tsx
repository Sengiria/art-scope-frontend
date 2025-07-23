import Button from '@/components/Button'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Button component', () => {
  it('renders with icon and text', () => {
    render(
      <Button
        text="Upload &"
        highlight="Predict"
        icon="🎨"
        backgroundUrl=""
        gradientFrom="#000"
        gradientTo="#fff"
        highlightColor="text-rose-700"
        shadowColor="#000"
      />
    )

    expect(screen.getByText(/Upload/i)).toBeInTheDocument()
    expect(screen.getByText(/Predict/i)).toBeInTheDocument()
    expect(screen.getAllByText('🎨')).toHaveLength(2)
  })

  it('calls onClick when clicked', () => {
    const onClick = vi.fn()

    render(
      <Button
        text="Upload &"
        highlight="Predict"
        icon="🎨"
        backgroundUrl=""
        gradientFrom="#000"
        gradientTo="#fff"
        highlightColor="text-rose-700"
        shadowColor="#000"
        onClick={onClick}
      />
    )

    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalled()
  })
})
