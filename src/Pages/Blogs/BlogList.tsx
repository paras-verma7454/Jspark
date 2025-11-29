
const BlogList = () => {
    const data= [{
        title:"Revolutionizing Fleet Electrification: Unleashing the Power of IoT and AI in Vehicle Technology and Data Management",
        desc:"The automotive landscape is undergoing a profound transformation, with a heightened focus on sustainability and efficiency. Fleet electrification has emerged as a cornerstone strategy to curb carbon emissions and elevate operational effectiveness.",
        img:"src/assets/dash.png"
    },{
        title:"ThingsBoard Customized Solution: Tailoring IoT for Your Unique Needs",
        desc:"In the dynamic realm of the Internet of Things (IoT), businesses are on the lookout for solutions that not only link devices and collect data but also adapt to their distinctive needs. Meet ThingsBoard, an open-source IoT platform that goes beyond the ordinary, offering a robust foundation for tailoring solutions to the specific demands of various industries.",
        img:"src/assets/things.png"
    },{
        title:"JSpark Unveils the Future of Electric Vehicles: Key Insights and Innovations",
        desc:"In a recent conversation, we delved into the intricate landscape of electric vehicles (EVs), unraveling their evolution and the exciting advancements anticipated in the next five years. At the forefront of this discussion is JSpark, an industry leader presenting an innovative IoT platform for the connected vehicle ecosystem, specially designed for EV manufacturers.",
        img:"src/assets/EV.png"
    }]
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 m-5 md:m-20 gap-5">
        {data.map((item, index) => (
            <div key={index} className="bg-[#F5F6FF] flex flex-col justify-between p-5 gap-10 rounded-lg">
                <img src={item.img} alt={item.title} className="object-cover rounded-t-lg" />
                <h1 className="text-[#0A133A] md:text-2xl font-bold mt-2">{item.title}</h1>
                <p className="text-[#5F6891] md:text-xl mt-2">{item.desc}</p>
                <button  className="text-xs items-center text-center w-30 md:w-35 md:text-sm gap-2 flex font-semibold px-4 md:px-5 py-2 rounded-3xl bg-[#235DD7] text-white cursor-pointer">
                    READ MORE 
                    <img className="h-2" src="src/assets/arrow.png" alt="arrow" />
                </button>
            </div>
        ))}
    </div>
  )
}

export default BlogList