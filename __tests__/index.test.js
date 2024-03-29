// __tests__/index.test.jsx
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Home from '../pages/index';


describe('Home', () => {
    it('Anasayfa Logosuna tıkladığımda anasayfaya gitmeyi bekliyorum ', async () => {
        render(<Home />)

        // one
        const element = screen.getByTestId('mainPageLink')
        userEvent.click(element);
        await screen.findByText(/Teknoloji Kariyerine ilk adımı atmak için Fırat Üniversitesi öğrencilerine özel ilanlara hemen başvur!/i);
        // screen.getByTestId("banner-text")

        // two 

        // await screen.findByRole("heading", {
        //     name: /özel/i,
        // })
        // expect(element).toBeInTheDocument()
    })
})