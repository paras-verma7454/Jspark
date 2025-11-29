import { useNavigate } from "react-router-dom"


const Form = () => {

  const navigate = useNavigate()
  
  return (
    <div className="bg-white flex flex-col-reverse gap-10 md:flex-row justify-around xl:mx-30 mt-20 py-5 px-3 xl:p-10 rounded-md z-1 relative">
      <div>
        <h1 className="text-2xl font-bold text-center md:text-start">
          Reach Out to Jspark
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center text-center font-bold mt-5">
          <div className="flex flex-col justify-center items-center gap-2 bg-[#F5F6FF] p-5 rounded-md">
            <img src="src/assets/call.png" alt="Call Us" className="" />
            <p className="text-[#A3A3A3] text-xs md:text-md">Call Us</p>
            <div>
            <p className="text-xs md:text-md">+145 8642 3543</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 bg-[#F5F6FF] p-5 rounded-md">
            <img src="src/assets/ping.png" alt="our location" className="" />
              <p className="text-[#A3A3A3] text-xs md:text-md">our location</p>
            <div className="">
              <p className="text-xs md:text-md">Noida, UTTAR PRADESH</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 bg-[#F5F6FF] p-9 rounded-md">
            <div className=" flex flex-col gap-2">
            <img src="src/assets/email.png" alt="Email" className="" />
            <p className="text-[#A3A3A3] text-xs md:text-md">Email</p>
            </div>
            <p className="text-xs md:text-md">sales@jspark.in</p>
          </div>

          <div className=" flex flex-col items-center gap-2 bg-[#F5F6FF] p-5 rounded-md">
            <img src="src/assets/time.png" alt="Business hours" className="" />
              <p className="text-[#A3A3A3] text-xs md:text-md">Business hours</p>
            <div className="flex flex-col gap-1">
              <p className="text-xs md:text-md">Monday to Friday</p>
              <p className=" text-[9px] md:text-md"> 9:00 AM - 6:00 PM (GMT+5:30)</p>
            </div>
          </div>
          
        </div>
      </div>

      <div className="flex flex-col gap-5 min-w-80 xl:min-w-120 px-2 xl:px-5">
        <h1 className="text-2xl font-bold text-center md:text-start">Send us message</h1>
        <div className="flex flex-col gap-5 bg-[#F5F6FF] backdrop-blur-md p-5 rounded-md">
          <input type="text" placeholder="Your Name" className="p-2 bg-white border rounded-md border-[#BACFFC] outline-none" />
          <input type="text" placeholder="Enter Your Email" className="p-2 bg-white border rounded-md border-[#BACFFC] outline-none" />
          <input type="text" placeholder="Subject" className="p-2 bg-white border rounded-md border-[#BACFFC] outline-none" />
          <textarea placeholder="Type Your Message" className="p-2 bg-white border rounded-md border-[#BACFFC] outline-none"></textarea>
        <button onClick={() => navigate("/sent")}  className="text-xs md:text-sm text-center font-semibold px-3 md:px-5 py-2 rounded-3xl bg-[#235DD7] text-white cursor-pointer">
                SEND
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form