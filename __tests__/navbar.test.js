// __tests__/index.test.jsx
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '../components/Navbar'
import userEvent from '@testing-library/user-event'

describe('Home', () => {
    it('renders a heading', async () => {
        render(<Navbar />)

        const element = screen.getByTestId('logo-link')
        userEvent.click(element);
        await screen.findAllByRole("heading", {
            name: /abc/i,
        })
        expect(element).toBeInTheDocument()
    })
})