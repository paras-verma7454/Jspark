
const ProductList = () => {
    const Productlist = [{
        title :"IoT Platform",
        img:"src/assets/tube.png",
        list:"JSpark offers comprehensive IoT solutions."

    },{
        title:"AI Health Care Suit",
        img:"src/assets/cup.png",
        list:"JSpark offers comprehensive IoT solutions.",
    },{
        title:"AI Based Financial Software",
        img:"src/assets/disk.png",
        list:"JSpark offers comprehensive IoT solutions.",
    }]
    
    const desc = "JSpark’s vision is to be a global leader in software development and AI & IoT-based programs, creating innovative solutions."
  return (
    <>
    
    {Productlist.map((product, index) => (
      <div key={index}
        className={`bg-[#F5F6FF] flex md:relative  flex-col-reverse text-center md:text-start justify-around items-center 
          ${ index === 1 ? 'md:flex-row-reverse md:text-end' : 'md:flex-row' }
          ${ index === 0 ? '-top-60' : 'md:flex-row' }
          gap-10 pt-10 pb-5 px-15 mx-10 -top-60 mt-5 md:m-20`}>

        <div className={`flex flex-col justify-around  ${index === 1 ? 'md:text-end' : 'md:text-start'} gap-5`}>
          <h1 className="text-[#0A133A] lg:text-xl font-bold">{product.title}</h1>
          <p className="text-[#5F6891] text-xs lg:max-w-xl px-2 md:px-0  lg:text-xl">{desc}</p>
          
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`flex flex-col md:flex-row md:items-start items-center ${index === 1 ? 'md:flex-row-reverse md:text-end' : 'md:text-start'}   gap-2`}>
              <img src="src/assets/tick.png" alt="tick" />
              <p className="text-[#0A133A] w-60 md:w-70 text-xs  lg:text-lg font-semibold">{product.list}</p>
            </div>
          ))}
        </div>

        <div>
          <img className="lg:w-96 w-72" src={product.img} alt={product.title} />
        </div>

      </div>
    ))}
    </>
    
  )
}

export default ProductList