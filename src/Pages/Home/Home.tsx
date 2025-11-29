import Navbar from "../../Components/Navbar"
import { Footer } from "../../Components/Footer"
import Hero from "./Hero"
import Team from "./Team"
import Trusted from "./Trusted"
import Vision from "../../Components/Vision"
import Services from "./Services"

const Home = () => {
  return (
    <>
      <div className='h-screen md:bg-cover bg-[url("/assets/bg.png")]'>
        <Navbar />
        <Hero/>
      </div>
        <Trusted/>
        <Services/>
        <Vision/>
        <Team/>
        <Footer/>
    </>
  )
}

export default Home