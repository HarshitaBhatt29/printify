export default function Hero() {
  return (
    <main className="w-full h-screen flex flex-col md:flex-row" id="hero">
      <div
        className="w-full h-1/2 flex flex-col items-start justify-end  gap-y-1 px-10 md:px-16 md:w-1/2 md:h-full md:justify-center md:items-start"
        
      >
        <p className="text-4xl w-full text-start md:leading-[60px]  font-pop font-semibold md:text-5xl border">Create and sell custom products</p>
       <span className="flex justify-center items-center">
       <i className="uil uil-check text-[#39b75d] text-3xl "></i> 
        <p className="text-base text-gray-800 font-pop font-semibold ">
        100% Free to use
        </p>
        </span>
        <span className="flex justify-center items-center">
       <i className="uil uil-check text-[#39b75d] text-3xl "></i> 
        <p className="text-base text-gray-800 font-pop font-semibold  ">
        900+ High-Quality Products
        </p>
        </span>
        <span className="flex justify-center items-center">
       <i className="uil uil-check text-[#39b75d] text-3xl "></i> 
        <p className="text-base text-gray-800 font-pop font-semibold ">
        Largest global print network
        </p>
        </span>
        <div className="w-full flex justify-start items-center gap-3 mt-3 ">
        <span className="flex justify-center items-center px-8 py-3 rounded-sm text-white font-semibold text-base bg-[#39b75d] hover:bg-[#1f913f] hover:cursor-pointer transition duration-150 ease-in-out">
            Start for free
          </span>
          <span className="flex justify-center items-center px-8  py-2 border border-gray-500 rounded-sm font-semibold text-basel hover:text-[#39b75d] hover:cursor-pointer transition duration-150 ease-in-out ">
          <i className="uil uil-play-circle text-2xl mr-2"></i> How it works?
          </span>
         
        </div>
        <p className="text-base text-[#39b75d] font-pop font-semibold mt-5 ">Trusted by over 8M sellers around the world</p>
      </div>
      <section className="w-full h-1/2 flex justify-center items-center object-contain md:w-1/2 md:h-full">
        <div
          className="w-4/5 h-[70%]"
        
        >
          <img
            className="h-full w-full object-contain object-center"
            src='https://printify.com/pfh/assets/animations/images/img_5.png'
            loading="lazy"
            alt="3D avatar"
          />
          
        </div>
        
      </section>
    </main>
  );
}