import { Footer } from "../../Components/Footer"
import HeroText from "../../Components/HeroText"
import  Navbar from "../../Components/Navbar"
import ProductList from "./ProductList"


const Products = () => {
  return (
    <>
    <div className='h-screen md:bg-cover bg-[url("/assets/bg.png")]'>
        <Navbar/>
        <HeroText title="Our Products" subtitle="At JSpark, we create innovative products that help businesses across different industries achieve their goals. Our products include software solutions, AI-based programs, and customized solutions that are tailored to the specific needs of our clients."/>
    </div>
    {/* <div className="bg-[url('assets/trust.png')]"> */}
        <ProductList/>
        <Footer/>
    {/* </div> */}
    </>
  )
}

export default Products