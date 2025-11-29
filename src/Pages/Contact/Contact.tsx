
import { Footer } from "../../Components/Footer"
import Form from "./Form"
import HeroText from "../../Components/HeroText"
import Navbar from "../../Components/Navbar"


const Contact = () => {
  return (
    <div className='h-screen md:bg-cover bg-[url("./assets/bg.png")]'>
        <Navbar/>
        <HeroText title="Contact us" subtitle="We're here to help, whether your interest is in our products, you have inquiries about IoT deployment, or you're seeking for cooperation opportunities."/>
        <Form/>
        <div className="bg-cover h-100  bg-[url('src/assets/trust.png')] -mt-56"></div>
        <Footer/>
    </div>
  )
}

export default Contact