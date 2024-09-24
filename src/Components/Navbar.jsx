import React, { useState } from 'react';
import '../Style/Navbar.css';
import img from '../Image/Gameseek-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

export default function Navbar() {
  const [quantity, setQuantity] = useState('0')

  const handlingQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <nav>
      <div className="left-nav">
        <img src={img} />
      </div>

      <div className='center-nav'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="right-nav">
        <div className="search-container">
          <input type="text" placeholder='What are you looking for?' className='search-input' />
          <FontAwesomeIcon icon={faMagnifyingGlass} size= "sm" className='search-icon' style={{cursor: 'pointer'}} />  
        </div>

        <div className="icons">
          <FontAwesomeIcon icon={faHeartRegular} style={{cursor: 'pointer'}}/>
          <FontAwesomeIcon icon={faCartShopping} style={{cursor: 'pointer'}} />
          <div className="quantity-cart">
            {quantity}
          </div>
        </div>

      </div>
      

    </nav>  
  )
}