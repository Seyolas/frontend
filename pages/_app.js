import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Banner from '../components/Banner';



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Banner />
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
