

import { useNavigate } from "react-router-dom"

const Sent = () => {
    const navigate = useNavigate()
  return (
    <div className='h-screen flex flex-col justify-center items-center md:bg-cover bg-[url("/assets/bg.png")]'>
        <div className=" p-5 md:p-15 md:px-35 flex flex-col justify-center items-center gap-5 mx-5  rounded-lg bg-[#F5F6FF80]">
            <div>
                <img src="assets/sent.png"/>
            </div>
            <div className="text-center">
                <h1 className="font-bold text-xl md:text-2xl">Thank you for reaching out!</h1>
                <p className="text-sm text-[#5F6891]">we’ll get back to you shortly.</p>
            </div>
            <div>
                <button onClick={()=>{
                    navigate("/")
                }} className='text-xs items-center md:text-end w-50 justify-center md:text-sm  flex font-semibold px-4 md:px-5 py-2 rounded-3xl bg-[#235DD7] text-white cursor-pointer'>
                    OK 
                </button>
            </div>
        </div>
    </div>
  )
}

export default Sent