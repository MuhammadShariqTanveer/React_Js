import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
  // Add more products as needed
];

const products2 = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
  // Add more products as needed
];

const ProductList = () => {
  return (
    <div>
      <h1>ABC BAKERY</h1>
      <ul>
        <h3>BISCUITS</h3>
        <table>
          <thead>
            <tr>
              <th>Serial.No</th>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
       
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
         </table>
      </ul>
      {/* this is comment */}
      <ul>
        {products2.map((products2) => (
          <li key={products2.id}>
            {products2.name} - ${products2.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

