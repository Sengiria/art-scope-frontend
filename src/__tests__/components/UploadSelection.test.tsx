import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import * as api from '@/api'
import UploadSection from '@/components/UploadSelection'
import userEvent from '@testing-library/user-event'

vi.mock('@/api', () => ({
    uploadImage: vi.fn(() =>
        Promise.resolve({
            results: {
                result: {
                    artist_name: 'Vincent_van_Gogh',
                    score: 0.8419,
                },
            },
        })
    ),
}))

describe('UploadSection', () => {
    const mockResult = {
        artist_name: 'Vincent_van_Gogh',
        score: 0.8419,
        genre: 'nan',
        filename: 'Vincent_van_Gogh_001.jpg',
    }

    beforeEach(() => {
        vi.spyOn(api, 'uploadImage').mockResolvedValue({
            results: { result: mockResult },
        })
    })

    it('renders upload label and disabled button initially', () => {
        render(<UploadSection />)

        expect(screen.getByLabelText(/upload an image file/i)).toBeInTheDocument()
        expect(screen.getByText(/choose an image/i)).toBeInTheDocument()

        const button = screen.getByRole('button', { name: /upload & predict/i })
        expect(button).toBeDisabled()
    })

    it('enables button when file is selected and shows prediction on upload', async () => {
        render(<UploadSection />)

        const file = new File(['dummy content'], 'test.png', { type: 'image/png' })

        const input = screen.getByLabelText(/upload an image file/i)
        await userEvent.upload(input, file)

        const button = await screen.findByRole('button', { name: /upload & predict/i })

        // Wait for the button to become enabled
        await waitFor(() => {
            expect(button).not.toBeDisabled()
        })

        await userEvent.click(button)

        // Wait for prediction result to appear
        expect(await screen.findByText(/predicted/i)).toBeInTheDocument()
        expect(screen.getByText(/vincent van gogh/i)).toBeInTheDocument()
        expect(screen.getByText(/84.19%/i)).toBeInTheDocument()
    })
})
