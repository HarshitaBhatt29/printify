import React from 'react'

function ProductFeaturesSection() {
  return (
    <section className="bg-gray-50  flex-col py-16 flex w-screen h-screen lg:flex-row">
        <div className="w-full  flex justify-center items-center lg:w-1/2">
      <img className="h-[500px] w-[500px] rounded-3xl" src='https://printify.com/wp-content/uploads/2023/09/Make-Your-Own-Shirt-Printify.gif'></img>

      </div>

    {/*Title section */}
    <div className="flex flex-col  w-full justify-center  items-center mt-5 gap-5 lg:w-1/2 lg:px-32">
    <div className='max-h-[500px] max-w-[500px] px-5 sm:px-0 '>
        <h2 className="text-3xl font-bold text-gray-900">
        Easily add your design to a wide range of products  
        </h2>
        <p className="mt-4 text-lg text-gray-600">
        With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products. 
        </p>
        <a href="#" className="mt-6 inline-flex items-center text-xl text-green-600 font-semibold hover:underline">All Products<i className="uil uil-arrow-right text-xl"></i></a>
        </div>
    </div>
    
    
    </section>
  );
}

export default ProductFeaturesSection;
