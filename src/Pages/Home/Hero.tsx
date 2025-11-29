const Hero = () => {
  return (
    <div className=" flex flex-col justify-around items-center h-[calc(100vh-82px)]">
      <div className="flex flex-col justify-around items-center gap-10 2xl:gap-30">
        <h1 className="flex mt-13 md:mt-11 text-xs  md:text-lg font-semibold">
          Simplifying Technology
        </h1>
        <h1 className="flex max-w-50 md:max-w-240 -mt-6 md:mt-1 text-center justify-center text-3xl md:text-6xl font-bold">
          Revolutionising Productivity with All-In-One IoT Solutions!
        </h1>
        <button className="flex items-center text-xs md:text-md justify-center font-bold px-9 -mt-2 py-3 rounded-3xl bg-[#235DD7] text-white cursor-pointer">
          BOOK A MEETING
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
        <div className="flex justify-center gap-5 items-center text-xs">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 px-5 md:border-r border-[#0A133A]">
            <img className="h-7 lg:h-15" src="src/assets/Vector.png" alt="tool" />
            <p className=" flex flex-col text-center md:text-start font-semibold text-[#0A133A] max-w-50">
              Specializing In <span>Software Development</span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center md:border-r gap-2 px-5">
            <img className="h-7 lg:h-15" src="src/assets/Vector1.png" alt="tool" />
            <p className="flex flex-col text-center font-semibold text-[#0A133A] max-w-50">
              AI & IoT-Based<span>Solutions</span>
            </p>
          </div>
        </div>

        <div className="flex  justify-center items-center gap-10 text-xs">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 px-5 md:border-r border-[#0A133A]">
            <img className="h-7 lg:h-15" src="src/assets/Exclude.png" alt="tool" />
            <p className=" flex flex-col font-semibold text-[#0A133A] max-w-50">
              Innovative and <span>Tailored Solutions</span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 px-5">
            <img className="h-7 lg:h-15" src="src/assets/Vector2.png" alt="tool" />
            <p className="flex flex-col font-semibold text-[#0A133A] max-w-50">
              Team Of <span>Experts</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
