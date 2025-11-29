import { Link } from "react-router-dom";


export const Footer = () => {
    const links =[{
        name: "HOME",
        link: "/",
    },{
        name: "SERVICES",
        link: "/services",
    },{
        name:"OUR SOLUTIONS",
        link: "/solutions",
    },{
        name:"PRODUCTS",
        link: "/products",
    },{
        name:"ABOUT US",
        link: "/about",
    },{
        name:"BLOGS",
        link: "/blogs",
    }
]
const year = new Date().getFullYear();

  return (
    <div className="bg-[#F5F6FF] mt-40 ">
        <div className=" flex flex-col md:flex-row items-center justify-around px-6 md:px-8 py-12 gap-8">
            {/* Image on top for mobile, right for desktop */}
            <div className="md:order-last -mt-40">
                <img className="max-w-[250px] md:max-w-xs" src="assets/img-3.png" alt="Innovation illustration"/>
            </div>
            <div className="font-bold text-center md:text-left">
                <div className="text-3xl xl:text-5xl text-[#0A133A]">
                    Stay Inspired <br/>
                    <span className="">Never Stop Innovating</span>
                </div>
                <div className="mt-5 text-[#5B669A]">
                    Let’s Connect with us
                </div>
            </div>
        </div>

        <div>
            <img src="assets/linear.png"/>
        </div>

        <div className="flex flex-col lg:flex-row justify-around items-center py-10 gap-5">

            <div className="">
                <div className="text-center xl:text-start text-[#0A133A]">
                    Contact info
                </div>
                <div className="flex flex-col font-bold md:flex-row justify-around items-center gap-5 mt-5">
                    <button className="flex border text-xs xl:text-sm rounded-2xl items-center gap-2 px-5 py-1"><img className="h-4" src="assets/linkedin.png"/>Jspark</button>
                    <button className="flex border text-xs xl:text-sm rounded-2xl items-center gap-2 px-5 py-1"><img className="h-4" src="assets/mail.png"/>sales@jspark.in</button>
                    <button className="flex border text-xs xl:text-sm rounded-2xl items-center gap-2 px-5 py-1"><img className="h-4" src="assets/globe.png"/>www.jspark.in</button>
                </div>
            </div>

            <div className="">
                <div className="text-center xl:text-start text-sm text-[#0A133A]">
                    Subscribe to our Newsletter
                </div>
                <div className="flex flex-col md:flex-row justify-around items-center gap-2 mt-5">
                    <input className="border text-xs xl:text-sm rounded-2xl  font-bold items-center gap-2 px-4 py-1 text-[#0A133A] " type="email" placeholder="Enter your email"/>
                    <button className="flex border text-xs xl:text-sm text-white rounded-2xl items-center gap-2 px-5 bg-[#235DD7] py-1">Subscribe</button>
                </div>
            </div>
        </div>

        <div className=" flex flex-col md:flex-row justify-around items-center md:bg-[#0A133A] gap-5 xl:h-15 py-5">
            <div className="flex items-center">
                <img className="h-5  hidden md:block" src="src\assets\logo2.png" alt="logo" />
                <img className="h-6 mt-2 md:hidden" src="src\assets\logo3.png" alt="logo" />
            </div>
            <div className="flex flex-col md:flex-row justify-between text-center  gap-3 lg:gap-10">
                {links.map((item) => (
                    <Link key={item.name} to={item.link} className="text-xs md:text-white 2xl:text-lg font-semibold">
                        {item.name}
                    </Link>
                ))}
            </div>
            <div className="text-[#7C8093] text-xs 2xl:text-lg font-semibold">
                © All Rights Reserved, {year}
            </div>
        </div>
    </div>
  )
}
