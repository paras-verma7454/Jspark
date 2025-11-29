import { Footer } from "../../Components/Footer"
import HeroText from "../../Components/HeroText"
import Navbar from "../../Components/Navbar"
import Vision from "../../Components/Vision"
import AboutComp from "./AboutComp"

const About = () => {
  return (
    <>
    <div className='h-screen md:bg-cover bg-[url("assets/bg.png")]'>
        <Navbar/>
        <HeroText title="About Us" subtitle="Welcome to JSpark, a pioneering startup headquartered in India, specializing in software development and AI & IoT-based solutions."/>
        <AboutComp/>
        <Vision/>
        <Footer/>
    </div>
    </>
  )
}

export default About