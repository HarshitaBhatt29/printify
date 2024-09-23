import React from 'react'

const features = [
    {
      id: 1,
      title: "Higher Profits",
      description: "We offer some of the lowest prices in the industry because print providers continuously compete to win your business.",
      imageSrc: "https://printify.com/pfh/assets/legacy/higher-profits.svg" 
    },
    {
      id: 2,
      title: "Robust Scaling",
      description: "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
      imageSrc: "https://printify.com/pfh/assets/legacy/robust-scaling.svg" 
    },
    {
      id: 3,
      title: "Best Selection",
      description: "With 900+ products and top quality brands, you can choose the best products for your business.",
      imageSrc: "https://printify.com/pfh/assets/legacy/best-selection.svg" 
    }
  ];

  function Features() {
    return (
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto flex justify-around items-start">
          {features.map((feature) => (
            <div key={feature.id} className="text-center max-w-xs">
              <img 
                src={feature.imageSrc} 
                alt={feature.title} 
                className="w-24 h-24 mx-auto mb-6" 
              />
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  

export default Features
