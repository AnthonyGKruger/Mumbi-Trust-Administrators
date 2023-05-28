import { Inter } from 'next/font/google'
import CallToAction from '@/components/UI/CallToAction'
import Services from '@/pages/services'
import About from '@/pages/About'
import Map from '@/components/UI/Map'
import MoreOnTrusts from '@/components/UI/MoreOnTrusts'
import ContactUs from '@/pages/ContactUs'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <main
      className={` ${inter.className}`}
    >
      <CallToAction/>
      <Services/>
      <About/>
      <Map/>
      <MoreOnTrusts/>
      <ContactUs/>
    </main>
  )
}

export default Home