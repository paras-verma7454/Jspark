

const Trusted = () => {
  return (
    <div className=" bg-cover h-100  bg-[url('assets/trust.png')]">
        <div className="">
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold  text-[#0A133A] mt-15">
                    Company trusted us
                </h1>
                <p className=" flex flex-col md:flex-row justify-center items-center text-sm mt-2 text-center text-[#0A133A]">
                    Where Vision Meets Value, and Success 
                    <span className="">
                        Finds Its Home
                    </span>
                </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-10 items-center mt-15">
                <div className="flex justify-center items-center gap-5 md:gap-7">

                    <img className="h-7 -mt-4 md:-mt-5 md:h-12 md:-mr-1" src="assets/proeco.png"/>
                    <img className="h-4 md:h-8" src="assets/asterisk.png"/>
                    <img className="h-4 md:h-8" src="assets/recycle.png"/>
                </div>
                <div className="flex justify-between items-center gap-5 md:gap-7">

                    <img className="h-4 md:h-8" src="assets/arc.png"/>
                    <img className="h-4 md:h-8" src="assets/mainpoint.png"/>
                    <img className="h-4 md:h-8" src="assets/oasis.png"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trusted