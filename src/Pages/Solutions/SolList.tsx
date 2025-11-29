const SolList = () => {
  const data = [
    {
      title: "Agritech",
      desc: "JSpark’s vision is to be a global leader in software development and AI & IoT-based programs, creating innovative solutions.",
      img: "src/assets/agritech.png",
      list: "JSpark offers comprehensive IoT solutions.",
    },
    {
      title: "Smart Cities",
      desc: "JSpark’s vision is to be a global leader in software development and AI & IoT-based programs, creating innovative solutions.",
      img: "src/assets/smartcities.png",
      list: "JSpark offers comprehensive IoT solutions.",
    },
    {
      title: "Automotive",
      desc: "JSpark’s vision is to be a global leader in software development and AI & IoT-based programs, creating innovative solutions.",
      img: "src/assets/automotive.png",
      list: "JSpark offers comprehensive IoT solutions.",
    },
    {
      title: "Warehouse",
      desc: "JSpark’s vision is to be a global leader in software development and AI & IoT-based programs, creating innovative solutions.",
      img: "src/assets/warehouse.png",
      list: "JSpark offers comprehensive IoT solutions.",
    },
    {
      title: "Logistics",
      desc: "JSpark’s vision is to be a global leader in software development and AI & IoT-based programs, creating innovative solutions.",
      img: "src/assets/logistics.png",
      list: "JSpark offers comprehensive IoT solutions.",
    },
  ];
  return (
    <div>
      {data.map((data, index) => (
        <div
          key={index}
          className={`bg-[#F5F6FF] flex flex-col-reverse text-center md:text-start justify-around items-center ${
            index % 2 === 1 ? "md:flex-row-reverse md:text-end" : "md:flex-row"
          }  gap-10 pt-20 pb-5 px-2 md:px-15 mx-5 rounded-xl md:mx-10 my-20 md:m-20`}
        >
          <div
            className={`flex flex-col justify-around  ${
              index % 2 === 1 ? "md:text-end" : "md:text-start"
            } gap-5`}
          >
            <h1 className="text-[#0A133A] md:text-xl font-bold">
              {data.title}
            </h1>
            <p className="text-[#5F6891]  md:text-xl">{data.desc}</p>

            {[...Array(3)].map((_, i) => (
              <div className={`flex ${index % 2 === 1 ? "justify-end" : "justify-start"}`}>
                <div key={i} className={`flex flex-col bg-[#EDF3FF] max-w-80 rounded-xl p-3 md:flex-row md:items-center items-center ${
                  index % 2 === 1
                    ? "md:flex-row-reverse md:text-end right-0 "
                    : "md:text-start"
                }   gap-2`}
              >
                <img className="h-4 md:-mt-6" src="src/assets/tick.png" alt="tick" />
                <p className="text-[#0A133A]  lg:text-lg font-semibold">
                  {data.list}
                </p>
              </div>
              </div>
            ))}
            <div
              className={`flex ${
                index % 2 === 1 ? " md:justify-end" : "md:justify-start"
              }`}
            >
              <button
                className={`text-xs items-center md:text-end w-full md:w-40 text-center md:justify-end justify-between gap-5 md:text-sm  flex font-semibold ${
                  index % 2 === 1 ? " md:text-end" : "md:text-start"
                } px-4 md:px-5 py-2 rounded-3xl bg-[#235DD7] text-white cursor-pointer`}
              >
                LEARN MORE
                <img className="h-2" src="src/assets/arrow.png" alt="arrow" />
              </button>
            </div>
          </div>

          <div>
            <img className=" lg:h-120" src={data.img} alt={data.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SolList;
