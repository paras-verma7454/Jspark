
const Vision = () => {
  return (
    <div className="bg-cover bg-[url('assets/f2.png')] ">
       <div className="flex flex-col justify-between gap-30 px-5">
            <div className="flex flex-col-reverse md:flex-row justify-around gap-5 items-center">
                <div className="flex flex-col justify-center gap-5">
                    <div>
                        <h1 className="font-bold text-center md:text-left md:text-3xl text-[#0A133A]">
                            Our Vision
                        </h1>
                    </div>
                    <div>
                        <p className="max-w-xl text-center md:text-left lg:text-3xl text-[#5F6891]">
                            JSpark’s vision is to be a global leader in software development and AI & IoT-based programs, creating innovative solutions that optimize business operations and generate valuable insights across different industries.
                        </p>
                    </div>
                </div>
                <div>
                    <img className="h-50 lg:h-70" src="assets/img-1.png"/>
                </div>
            </div>
            <div>
                <div className="flex flex-col md:flex-row justify-around items-center gap-5">
                    <div>
                        <img className="h-50 lg:h-70" src="assets/img-2.png"/>
                    </div>
                    <div className="flex flex-col justify-center gap-5">
                        <div className="">
                            <h1 className="font-bold text-center  md:text-right md:text-3xl text-[#0A133A]">
                                Our Mission
                            </h1>
                        </div>
                        <div className="flex text-center md:text-right">
                            <p className=" max-w-xl lg:text-3xl text-[#5F6891]">
                                Our mission at JSpark is to deliver innovative and customized software solutions and AI & IoT-based programs that help businesses achieve their goals with excellence and customer satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Vision