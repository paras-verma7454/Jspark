import { Footer } from "../../Components/Footer"
import  HeroText from "../../Components/HeroText"
import Navbar from "../../Components/Navbar"
import BlogList from "./BlogList"

const Blogs = () => {
  return (
    <div className='h-screen md:bg-cover bg-[url("./assets/bg.png")]'>
        <Navbar/>
        <HeroText title="Blogs" subtitle="Welcome to JSpark, a pioneering startup headquartered in India, specializing in software development and AI & IoT-based solutions."/>
        <BlogList/>
        <BlogList/>
        <Footer/>
    </div>
  )
}

export default Blogs