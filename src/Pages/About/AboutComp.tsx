
const AboutComp = () => {
    const data= [{
        title: "Jspark",
        desc: "Since our inception in 2020, JSpark has established itself as a trusted partner for businesses seeking innovative and tailored solutions to meet their specific requirements.",
        img:"assets/about.png"
    },{
        desc:"Our dedicated team of experts is driven by a commitment to excellence, ensuring that we deliver top-notch services to our clients.",
        img:"assets/member.png"
    }]
  return (
    <>
        {data.map((data, index) => (
      <div key={index}
        className={`bg-[#F5F6FF] flex flex-col text-center md:text-start justify-around items-center ${
          index === 1 ? 'md:flex-row md:text-end' : 'md:flex-row'
        }  gap-5 py-20  px-5 md:px-15 mx-10 my-20 md:m-20`}>

        <div className={`flex flex-col justify-around  ${index === 1 ? ' font-bold' : 'md:text-start'} gap-5`}>
          <h1 className="text-[#0A133A] text-md md:text-2xl font-bold">{data.title}</h1>
          <p className="text-[#5F6891] text-xs lg:max-w-xl md:text-xl">{data.desc}</p>
          
        </div>

        <div>
          <img src={data.img} alt={data.title} />
        </div>

      </div>
    ))}
    </>
  )
}

export default AboutComp