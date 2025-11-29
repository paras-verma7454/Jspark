import { motion } from "framer-motion";

const servicesData = [
    {
        description: "At JSpark, we offer a comprehensive suite of AI & IoT services that are tailored to meet the unique needs of our clients.",
        title: "Vision AI",
        features: ["Depth Estimation", "Object detection", "Video Classification", "Image Classification"],
        image: "assets/scroll1.png"
    },
    {
        description: "Our white label solution provides a seamless and reliable AI & IoT service that meets our clients' expectations, delivering cutting-edge solutions.",
        title: "IoT",
        features: ["Depth Estimation", "Object detection", "Video Classification", "Image Classification"],
        image: "assets/scroll2.png"
    },
    {
        description: "That optimize business operations and generate valuable insights.",
        title: "NLP",
        features: ["Depth Estimation", "Object detection", "Video Classification", "Image Classification"],
        image: "assets/scroll3.png"
    },
    {
        description: "We have the expertise and experience to provide the right solution for your business.",
        title: "Custom Development",
        features: ["Depth Estimation", "Object detection", "Video Classification", "Image Classification"],
        image: "assets/scroll4.png"
    }
];

const Services = () => {
    return (
        <div className="my-10">
            <div></div>
            <div className="overflow-y-auto max-h-[80vh] scrollbar-thin scrollbar-thumb-[#235DD7] scrollbar-track-[#F8F9FF] custom-scrollbar-left">
                <div style={{ direction: 'ltr' }}>
                    <div className="flex flex-col items-center gap-10">
                        {servicesData.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="flex flex-col md:flex-row justify-center items-center gap-10">
                                <div className="flex flex-col px-5 justify-around items-start gap-10">
                                    <p className="font-bold text-[#0A133A] text-xl md:text-3xl max-w-60 md:max-w-120">
                                        {service.description}
                                    </p>
                                    <button className="text-xs items-center text-center w-35 md:w-40 md:text-sm gap-4 flex font-semibold px-4 md:px-5 py-2 rounded-3xl bg-[#235DD7] text-white cursor-pointer">
                                        LEARN MORE
                                        <img className="h-2" src="assets/arrow.png" alt="arrow" />
                                    </button>
                                </div>
                                <div className="bg-[#F8F9FF] rounded-md px-10 py-6 flex flex-col-reverse md:flex-row justify-between items-center gap-10">
                                    <div className="flex flex-col justify-around items-start gap-5">
                                        <h1 className="bg-[#C8D6F4] text-[#0A133A] w-fit rounded-lg text-[9px] font-bold px-2 py-1">OUR SERVICES</h1>
                                        <p className="font-bold text-2xl">{service.title}</p>
                                        <div className="flex flex-col justify-around items-start gap-3">
                                            {service.features.map((feature, index) => (
                                                <div className="flex items-center gap-2" key={index}>
                                                    <img className="h-4" src="assets/tick.png" alt="tick" />
                                                    <p className="text-[#0A133A] lg:text-lg font-semibold">{feature}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <img src={service.image} className="h-50" alt="services" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;