
// __tests__/index.test.jsx
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Staj from '../pages/staj';

describe('Home', () => {
    it('Anasayfa Logosuna tıkladığımda anasayfaya gitmeyi bekliyorum ', async () => {
        render(<Staj />)

        // one
        const secondElement = screen.getByTestId('stajPageLink')
        userEvent.click(secondElement);
        // expect(screen.findByTestId('firstTypeChip')).toHaveTextContent(/oyun programlama/i);
        await screen.findByText(/başvur/i);

        // two 

        // await screen.findByRole("heading", {
        //     name: /özel/i,
        // })
        // expect(element).toBeInTheDocument()
    })
})






