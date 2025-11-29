import { Footer } from "../../Components/Footer"
import HeroText from "../../Components/HeroText"
import Navbar from "../../Components/Navbar"
import  SolList from "./SolList"

const Solutions = () => {
  return (
    <div className='h-screen md:bg-cover bg-[url("./assets/bg.png")]'>
        <Navbar/>
        <HeroText title="Solutions" subtitle="Welcome to JSpark, a pioneering startup headquartered in India, specializing in software development and AI & IoT-based solutions."/>
        <SolList/>
        <Footer/>
    </div>
  )
}

export default Solutions
