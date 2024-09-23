import React from 'react'
const products = [
    {
      id: 1,
      subtitle: "Create",
      title:"custom products",
      description: "Easily add your designs to a wide range of products using our free tools",
      imageSrc: "https://printify.com/pfh/assets/legacy/custom-products.png"  
    },
    {
      id: 2,
      subtitle: "Sell",
      title:"on your terms",
      description: "You choose the products,sale price,and where to sell",
      imageSrc: "https://printify.com/pfh/assets/legacy/your-products.png" 
    },
    {
      id: 3,
      subtitle: "We Handle",
      title:"fulfillment",
      description: "Once an order is placed,we automatically handle all the printing and delivery logictics",
      imageSrc: "https://printify.com/pfh/assets/legacy/fullfillment.png" 
    }
  ];

function Products() {
  return (
    <section className="bg-gray-50 py-16">
    <div className="container mx-auto flex justify-around items-start">
      {products.map((products) => (
        <div key={products.id} className="text-center max-w-xs">
          <img 
            src={products.imageSrc} 
            alt={products.title} 
            className="w-24 h-24 mx-auto mb-6" 
          />
          <h2 className="text-xl font-bold text-green-700">{products.subtitle}</h2>
          <h3 className="text-xl font-bold text-gray-900">{products.title}</h3>
          <p className="mt-4 text-gray-600">{products.description}</p>
        </div>
      ))}
    </div>
  </section>

  )
}

export default Products
