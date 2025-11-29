import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"



const Navbar = () => {

    const[isOpen, setIsOpen] = useState(false)

    function toggleMenu(){
        setIsOpen(!isOpen)
    }
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
const location = useLocation()
const path = location.pathname
const navigate = useNavigate()

  return (
    <>
    
    <div className="flex h-[82px] backdrop-blur-xs justify-between items-center gap-5 px-3 lg:px-8 py-4">
        <div className="flex items-center">
                <img className="h-6" src="src/assets/logo.png" alt="logo" />
        </div>

        <div className="md:flex  hidden justify-between  gap-3 lg:gap-10">
            {links.map((item) => (
                <Link key={item.name} to={item.link} className={`text-xs 2xl:text-lg font-semibold ${path === item.link ? "text-[#3472F5]" : ""} ${path === "/" ? "text-black" : ""}`}>
                    {item.name}
                </Link>
            ))}
        </div>

        <div className="flex justify-between items-center gap-4">
            <button onClick={() => navigate("/contact")} className="text-xs md:text-sm flex font-semibold px-3 md:px-5 py-2 rounded-3xl bg-[#235DD7] text-white cursor-pointer">
                CONTACT US
            </button>
            <div className="size-8 md:hidden items-center flex" onClick={toggleMenu}>
                {
                    isOpen ? (
                        <img src="src\assets\cross.png" alt="close" />
                    ) : (
                        <img src="src\assets\menu.png" alt="menu" />
                    )
                }
            </div>
        </div>
    </div>
        <div className={`md:hidden flex flex-col pb-3 justify-center absolute w-full bg-white gap-3 ${isOpen ? "block" : "hidden"}`}>
            {links.map((item) => (
                <Link key={item.name} to={item.link} className="text-xs border-t flex pt-3 items-center px-4 border-gray-200 font-semibold">
                    {item.name}
                </Link>
            ))}
        </div>
    </>
  )
}

export default Navbar