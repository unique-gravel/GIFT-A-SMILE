import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-[#FFAB76]'>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
