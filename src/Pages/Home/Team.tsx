import { useState, useRef, useEffect } from 'react';

const Team = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showDots, setShowDots] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const scrollLeft = el.scrollLeft;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const index = Math.round((scrollLeft / maxScroll) * 2);
      setActiveIndex(Math.min(index, 2));
    };
    const checkScrollable = () => {
      setShowDots(el.scrollWidth > el.clientWidth);
    };
    checkScrollable();
    el.addEventListener('scroll', onScroll);
    window.addEventListener('resize', checkScrollable);
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', checkScrollable);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col  md:flex-row justify-center mt-5">

          <div className="bg-[#0A133A] flex items-center  justify-center px-15 py-5">
              <h1 className="text-white flex absolute md:text-xl lg:-ml-38  -mt-10  lg:text-3xl">Jspark  </h1>
              <span className="text-white flex absolute md:text-xl lg:mt-6  lg:text-3xl"> Team of Expertise </span>
              <img className=" h-40 md:h-fit" src="src/assets/team.png" alt="team" />
          </div>

          <div className="bg-[#F5F6FF] images">
              <div ref={scrollRef} className="flex items-center  overflow-x-auto xl:overflow-hidden ">
                    <div className="flex flex-col items-center justify-between mt-8 gap-1 shrink-0 md:shrink">
                      <h1 className="font-bold text-xs">Cody Fisher</h1>
                      <p className="text-[#6F6F6F] text-[9px]">Sr. Software Engineer</p>
                      <img src="src/assets/cody.png" alt="team1" className="" />
                    </div>
                    <div className="flex flex-col items-center justify-around mt-8 gap-1 shrink-0 md:shrink">
                      <h1 className="font-bold text-xs">Devon Lane</h1>
                      <p className="text-[#6F6F6F] text-[9px]">Jr. Software Engineer</p>
                      <img  src="src/assets/devon.png" alt="team2" className="" />
                    </div>
                    <div className="flex flex-col items-center justify-around mt-8 gap-1 shrink-0 md:shrink">
                      <h1 className="font-bold text-xs">Eleanor Pena</h1>
                      <p className="text-[#6F6F6F] text-[9px]">Jr. Software Engineer</p>
                      <img  src="src/assets/elanor.png" alt="team3" className="" />
                    </div>
                    <div className="flex flex-col items-center justify-around mt-8 gap-1 shrink-0 md:shrink">
                      <h1 className="font-bold text-xs">Ronald Richards</h1>
                      <p className="text-[#6F6F6F] text-[9px]">Jr. Software Engineer</p>
                      <img  src="src/assets/ronald.png" alt="team4" className="" />
                    </div>
                    <div className="flex flex-col items-center justify-around mt-8 gap-1 shrink-0 md:shrink">
                      <h1 className="font-bold text-xs">Jane Cooper</h1>
                      <p className="text-[#6F6F6F] text-[9px]">Jr. Software Engineer</p>
                      <img  src="src/assets/jane.png" alt="team5" className="" />
                    </div>
              </div>
          </div>
          
      </div>
      <div className="dots md:hidden flex justify-center gap-2 mt-2">
        {showDots && [0, 1, 2].map((i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${activeIndex === i ? 'bg-[#0A133A]' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </>
  )
}

export default Team