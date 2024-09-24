// components/Product-list.jsx

import React, { useState } from 'react';

const ProductList = () => {
  const [quantity, setQuantity] = useState(0);

  const handlingQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <button onClick={handlingQuantity}>Add Quantity</button>
    </div>
  );
};

export default ProductList;
