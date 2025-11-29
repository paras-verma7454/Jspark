
const HeroText = ({title, subtitle}: {title: string, subtitle: string}) => {
  return (
    <div>
            <div className="flex flex-col justify-around items-center gap-10 2xl:gap-30">
                <h1 className="flex mt-13 md:mt-20 max-w-50 md:max-w-240 text-[#0A133A] text-center justify-center text-3xl md:text-6xl font-bold">
                {title}
                </h1>
                <p className="flex max-w-50 md:max-w-160 lg:max-w-200 text-[#444F7F] text-center justify-center text-md md:text-2xl font-medium">
                    {subtitle}
                </p>
            </div>
        </div>
  )
}

export default HeroText