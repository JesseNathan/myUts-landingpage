import React, { useState } from 'react';
import '../Style/Product-list.css';
import CartQuantity from './Cart-Quantity'


export default function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'LOGITECH GAMING HEADSET',
      price: 'RP. 300.000',
      image: 'src/Image/Headphones.jpg',
    },
    {
      id: 2,
      name: 'CHAIR GAMING MGCPROFBL GAMING',
      price: 'RP. 2.500.000',
      image: 'src/Image/chairGaming.jpeg',
    },
    {
      id: 3,
      name: 'DUAL SENSE WIRELESS CONTROLLER',
      price: 'RP. 500.000',
      image: 'src/Image/DualSense1.webp',
    },
    {
      id: 4,
      name: 'PC GAMING NEOMEDIO5 NEOPC',
      price: 'RP. 12.000.000',
      image: 'src/Image/pcGaming.jpeg',
    },
    {
      id: 5,
      name: 'Mouse Classic Nerd',
      price: 'RP. 12.000.000',
      image: 'src/Image/mouse.jpg',
    },
    {
      id: 6,
      name: 'Full HD Gaming Laptop',
      price: 'RP. 12.000.000',
      image: 'src/Image/laptop.jpeg',
    },
  ]);

  // Function to reverse the product list
  const handleReverse = () => {
    setProducts([...products].reverse());
  };

  return (
    <div className="product-carousel">
      <button className="arrow left" onClick={handleReverse}>
        &#9664;
      </button>

      <div className="product-list">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>

            <div className="buyStuff">
              <CartQuantity />
              <div className="product-quantity-container">
                <select className={`js-quantity-selector-${product.id} select-quantity`}>
                  <option selected value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>

            </div>

          </div>
          
          
        ))}
      </div>

      <button className="arrow right" onClick={handleReverse}>
        &#9654;
      </button>
    </div>
  );
}
